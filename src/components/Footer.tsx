import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-subtle-gradient">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Stay Updated on Peptide Research
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest research findings, product updates, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                type="email"
                className="flex-1"
              />
              <Button variant="default">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/9cc793e6-859a-46b0-b39f-f4b1b7907b03.png" 
              alt="PeptoLab" 
              className="h-8 w-auto"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Advanced peptide solutions with pharmaceutical-grade quality. 
              Trusted by researchers and health optimization enthusiasts worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Research", href: "#" },
                { name: "Blog", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors story-link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Categories</h4>
            <ul className="space-y-2">
              {[
                { name: "Recovery & Healing", category: "Recovery & Healing" },
                { name: "Growth & Longevity", category: "Growth & Longevity" }, 
                { name: "Cognitive Enhancement", category: "Cognitive Enhancement" },
                { name: "Anti-Aging", category: "Anti-Aging" },
                { name: "Growth Hormone", category: "Growth Hormone" },
                { name: "Research Compounds", category: "Recovery & Performance" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={`/products?category=${encodeURIComponent(item.category)}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors story-link"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:info@peptolab.com" className="text-sm hover:text-primary transition-colors">
                    info@peptolab.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <a href="tel:+1-800-PEPTIDES" className="text-sm hover:text-primary transition-colors">
                    +1 (800) PEPTIDES
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-muted-foreground">Address</div>
                  <p className="text-sm">
                    123 Science Drive<br />
                    Biotech Park, CA 90210
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-primary transition-colors">Shipping Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Return Policy</Link>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2024 PeptoLab. For research purposes only.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;