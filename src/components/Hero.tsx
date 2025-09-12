import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Microscope } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-subtle-gradient flex items-center justify-center overflow-hidden">
      {/* Molecular background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary"></div>
        <div className="absolute top-32 left-40 w-4 h-4 rounded-full bg-primary"></div>
        <div className="absolute top-24 left-52 w-8 h-8 rounded-full bg-primary"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-primary"></div>
        <div className="absolute bottom-40 right-56 w-6 h-6 rounded-full bg-primary"></div>
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="120" y1="120" x2="160" y2="140" stroke="currentColor" strokeWidth="2" className="text-primary"/>
          <line x1="160" y1="140" x2="200" y2="120" stroke="currentColor" strokeWidth="2" className="text-primary"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/9cc793e6-859a-46b0-b39f-f4b1b7907b03.png" 
              alt="PeptoLab - Peptides & Supplements" 
              className="mx-auto h-20 w-auto"
            />
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent leading-tight">
            Advanced Peptide
            <br />
            <span className="text-foreground">Solutions</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover scientifically-backed peptides and supplements designed to optimize your health, 
            performance, and longevity with pharmaceutical-grade quality.
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span>Lab Tested</span>
            </div>
            <div className="flex items-center gap-2">
              <Microscope className="w-5 h-5 text-primary" />
              <span>Research Backed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
              <span>99.9% Purity</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="scientific" size="lg" className="w-full sm:w-auto">
                Learn About Peptides
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;