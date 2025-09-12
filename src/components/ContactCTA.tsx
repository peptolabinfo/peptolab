import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-hero-gradient border-0 text-primary-foreground overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-current"></div>
              <div className="absolute bottom-8 left-8 w-20 h-20 rounded-full bg-current"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-current"></div>
            </div>
            
            <CardContent className="p-12 relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Ready to Start Your
                  <span className="block">Peptide Journey?</span>
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Get personalized recommendations from our expert team. 
                  We're here to help you find the right peptides for your specific goals.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-sm opacity-80">Detailed consultations</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Phone Consultation</h3>
                  <p className="text-sm opacity-80">1-on-1 expert guidance</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group"
                  >
                    Start Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    Browse Catalog
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;