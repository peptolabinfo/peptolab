import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our products? Need personalized recommendations? 
              Our expert team is here to help you find the right peptides for your goals.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Get detailed answers from our peptide experts
                  </p>
                  <div className="space-y-2">
                    <div>
                      <strong>General Inquiries:</strong>
                      <br />
                      <a href="mailto:info@peptolab.ps" className="text-primary hover:underline">
                        info@peptolab.ps
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Phone Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Speak directly with our peptide specialists
                  </p>
                  <div className="space-y-2">
                    <div>
                      <strong>Toll-Free:</strong>
                      <br />
                      <a href="tel:+972595406899" className="text-primary hover:underline">
                        +972 59-540-6899
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      Mon-Sat: 9AM-10PM
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Common questions about our products and services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">How long does shipping take?</h4>
                    <p className="text-sm text-muted-foreground">
                      We offer free shipping on orders over $150. Standard shipping takes 3-5 business days, 
                      while express shipping arrives in 1-2 business days.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Do you provide Certificates of Analysis?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, every batch comes with a comprehensive COA showing purity, potency, 
                      and contamination testing from independent laboratories.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What is your return policy?</h4>
                    <p className="text-sm text-muted-foreground">
                      We offer a 30-day satisfaction guarantee on all unopened products. 
                      If you're not completely satisfied, we'll provide a full refund.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Are these products safe for research use?</h4>
                    <p className="text-sm text-muted-foreground">
                      All our products are manufactured in cGMP facilities and undergo rigorous testing. 
                      They are intended for research purposes only and should be handled by qualified personnel.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Do you offer bulk pricing for research institutions?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, we offer competitive bulk pricing for qualified research institutions and laboratories. 
                      Contact our team for custom pricing on large orders.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What storage conditions are required?</h4>
                    <p className="text-sm text-muted-foreground">
                      Most peptides should be stored at -20°C in a freeze-resistant container. 
                      Detailed storage instructions are provided with each product's Certificate of Analysis.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;