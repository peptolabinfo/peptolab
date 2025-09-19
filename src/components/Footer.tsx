
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (


  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Company Info */}
        <div className="space-y-4">
          <img 
            src="/lovable-uploads/logo2.PNG" 
            alt="PeptoLab" 
            className="h-12 w-auto"
          />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Premium peptides & supplements for research and health optimization.
          </p>
        </div>
        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
            <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
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
      <div className="mt-10 text-center text-sm text-muted-foreground">
        © 2025 PeptoLab. For research purposes only.
      </div>
    </div>
  </footer>
  );
};

export default Footer;