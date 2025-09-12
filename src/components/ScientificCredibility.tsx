import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, FlaskConical, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { number: "99.9%", label: "Purity Guaranteed", icon: FlaskConical },
  { number: "50+", label: "Research Partners", icon: Award },
  { number: "24/7", label: "Quality Control", icon: CheckCircle }
];

const certifications = [
  "cGMP Certified",
  "Third-Party Tested", 
  "FDA Registered Facility",
  "ISO 9001:2015",
  "Certificate of Analysis"
];

const ScientificCredibility = () => {
  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <AnimatedSection 
                key={index}
                animation="bounce-in"
                delay={index * 200}
              >
                <Card className="text-center border-border/50 bg-card hover:shadow-card-custom hover:scale-105 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center animate-float">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
        
        {/* Main Content */}
        <AnimatedSection animation="slide-up" className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Scientific Excellence
            <span className="block text-primary mt-2">You Can Trust</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Every peptide in our catalog undergoes rigorous testing and quality control processes. 
            We partner with leading research institutions and follow the highest manufacturing standards 
            to ensure you receive pharmaceutical-grade products.
          </p>
          
          {/* Certifications */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Certifications & Standards</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <AnimatedSection
                  key={index}
                  animation="scale-in"
                  delay={index * 100}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:scale-110 transition-all duration-200"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {cert}
                  </Badge>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {/* Molecular decoration */}
        <div className="relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="flex justify-center items-center h-full">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-primary animate-pulse"></div>
                <div className="absolute -top-8 -right-8 w-12 h-12 rounded-full bg-primary animate-pulse delay-300"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-primary animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScientificCredibility;