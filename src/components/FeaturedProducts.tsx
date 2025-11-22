import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import herbsImg from "@/assets/category-herbs.jpg";

// Mock product data - will be replaced with real data from database
const featuredProducts = [
  {
    id: 1,
    name: "Stress Relief Formula",
    price: 29.99,
    originalPrice: 39.99,
    image: herbsImg,
    rating: 4.8,
    reviews: 124,
    category: "Stress",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Sleep Support Blend",
    price: 34.99,
    image: herbsImg,
    rating: 4.9,
    reviews: 89,
    category: "Sleep",
    badge: "New",
  },
  {
    id: 3,
    name: "Digestive Wellness",
    price: 24.99,
    originalPrice: 29.99,
    image: herbsImg,
    rating: 4.7,
    reviews: 156,
    category: "Digestion",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Natural Skin Serum",
    price: 44.99,
    image: herbsImg,
    rating: 5.0,
    reviews: 203,
    category: "Skincare",
    badge: "Premium",
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Products</h2>
            <p className="text-lg text-muted-foreground">
              Our most loved wellness solutions
            </p>
          </div>
          <Link to="/products">
            <Button variant="outline" size="lg" className="hidden md:flex">
              View All
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-0 shadow-elegant hover:shadow-hover transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </Link>
                  {product.badge && (
                    <Badge 
                      className="absolute top-4 left-4"
                      variant={product.badge === "Sale" ? "destructive" : "secondary"}
                    >
                      {product.badge}
                    </Badge>
                  )}
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-wellness-gold text-wellness-gold" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-lg hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link to="/products">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
