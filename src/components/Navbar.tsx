import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

const categories = [
  { name: "Sleep", path: "/products?category=sleep" },
  { name: "Stress", path: "/products?category=stress" },
  { name: "Digestion", path: "/products?category=digestion" },
  { name: "Food & Drink", path: "/products?category=food-drink" },
  { name: "Skincare", path: "/products?category=skincare" },
  { name: "Body Care", path: "/products?category=bodycare" },
  { name: "Aromatherapy", path: "/products?category=aromatherapy" },
  { name: "Yoga & Meditation", path: "/products?category=yoga-meditation" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = 0; // Will be connected to cart state later

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold text-primary">
              MediVeda
            </Link>
            
            {/* Desktop Categories */}
            <div className="hidden lg:flex items-center gap-1">
              {categories.slice(0, 4).map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {category.name}
                </Link>
              ))}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    More
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <div className="flex flex-col gap-4 mt-8">
                    <h3 className="font-semibold text-lg">All Categories</h3>
                    {categories.map((category) => (
                      <Link
                        key={category.path}
                        to={category.path}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            <Link to="/auth">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Categories</h3>
                  </div>
                  {categories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      onClick={() => setIsOpen(false)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
