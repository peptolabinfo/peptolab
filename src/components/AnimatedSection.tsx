import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'bounce-in';
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className, 
  animation = 'fade-in', 
  delay = 0 
}: AnimatedSectionProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isIntersecting ? `animate-${animation}` : 'opacity-0',
        className
      )}
      style={{
        animationDelay: isIntersecting ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;