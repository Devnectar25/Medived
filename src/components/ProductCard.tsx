import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  product: {
    id: number | string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    category: string;
    badge?: string;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart.mutate({ productId: String(product.id), quantity: 1 });
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-elegant hover:shadow-hover transition-all duration-300">
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
            onClick={handleAddToCart}
            disabled={addToCart.isPending}
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
  );
};
