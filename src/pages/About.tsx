import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, FlaskConical, Award, Microscope, Shield, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="/lovable-uploads/9cc793e6-859a-46b0-b39f-f4b1b7907b03.png" 
              alt="PeptoLab" 
              className="mx-auto h-16 w-auto mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              About <span className="text-primary">PeptoLab</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are dedicated to advancing human health and performance through cutting-edge 
              peptide research and pharmaceutical-grade supplements.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At PeptoLab, we believe that everyone deserves access to the highest quality 
                  peptides and supplements backed by rigorous scientific research. Our mission 
                  is to bridge the gap between cutting-edge research and practical health solutions.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We work exclusively with certified laboratories and follow the most stringent 
                  quality control processes to ensure that every product meets pharmaceutical standards.
                </p>
                <Button variant="hero" size="lg">
                  View Our Products
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-hero-gradient rounded-2xl opacity-10"></div>
                <Card className="relative border-primary/20">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                          <FlaskConical className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                        <div className="text-sm text-muted-foreground">Average Purity</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                          <Award className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-primary mb-1">ISO</div>
                        <div className="text-sm text-muted-foreground">Certified</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                          <Microscope className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-primary mb-1">50+</div>
                        <div className="text-sm text-muted-foreground">Research Partners</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                          <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                        <div className="text-sm text-muted-foreground">Quality Control</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-border/50 hover:shadow-card-custom transition-smooth">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <FlaskConical className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Scientific Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Every product is backed by peer-reviewed research and undergoes 
                    rigorous testing to ensure maximum efficacy and safety.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50 hover:shadow-card-custom transition-smooth">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We maintain the highest quality standards through cGMP facilities 
                    and comprehensive third-party testing protocols.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50 hover:shadow-card-custom transition-smooth">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Customer Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our expert team provides personalized guidance to help you 
                    achieve your health and performance goals safely and effectively.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Certifications & Standards
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {[
                "cGMP Certified",
                "Third-Party Tested",
                "FDA Registered Facility",
                "ISO 9001:2015",
                "Certificate of Analysis",
                "Research Grade"
              ].map((cert, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-3 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth text-sm"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {cert}
                </Badge>
              ))}
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              All our products come with a Certificate of Analysis (COA) showing detailed 
              purity and potency testing results from independent laboratories.
            </p>

            <Button variant="scientific" size="lg">
              Download Sample COA
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;