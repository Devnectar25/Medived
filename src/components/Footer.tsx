import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">MediVeda</h3>
            <p className="text-muted-foreground">
              Your trusted source for premium homeopathic medicines and natural wellness solutions.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/products?category=sleep" className="text-muted-foreground hover:text-foreground transition-colors">Sleep</Link></li>
              <li><Link to="/products?category=stress" className="text-muted-foreground hover:text-foreground transition-colors">Stress Relief</Link></li>
              <li><Link to="/products?category=digestion" className="text-muted-foreground hover:text-foreground transition-colors">Digestion</Link></li>
              <li><Link to="/products?category=skincare" className="text-muted-foreground hover:text-foreground transition-colors">Skincare</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link to="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-muted-foreground hover:text-foreground transition-colors">Returns</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Stay Updated</h4>
            <p className="text-muted-foreground text-sm">
              Subscribe for exclusive offers and wellness tips
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="flex-1"
              />
              <Button size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 MediVeda. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
