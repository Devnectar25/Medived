import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, CheckCircle } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import herbsImg from "@/assets/category-herbs.jpg";

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (id) {
      addToCart.mutate({ productId: id, quantity });
    }
  };

  // Mock product data
  const product = {
    id,
    name: "Stress Relief Formula",
    price: 29.99,
    originalPrice: 39.99,
    image: herbsImg,
    rating: 4.8,
    reviews: 124,
    category: "Stress",
    badge: "Bestseller",
    description: "Our premium Stress Relief Formula combines carefully selected homeopathic ingredients to help you manage daily stress naturally. This gentle yet effective blend supports emotional balance and promotes a sense of calm.",
    benefits: [
      "Reduces anxiety and nervous tension",
      "Promotes emotional balance",
      "Supports healthy stress response",
      "Non-habit forming formula",
      "100% natural ingredients"
    ],
    ingredients: "Ignatia Amara, Gelsemium, Argentum Nitricum, Passiflora, Kali Phosphoricum",
    usage: "Take 10-15 drops in water, 3 times daily or as directed by healthcare provider.",
    inStock: true,
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="space-y-4 animate-scale-in">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
                {product.badge && (
                  <Badge 
                    className="absolute top-4 left-4"
                    variant="secondary"
                  >
                    {product.badge}
                  </Badge>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <Badge variant="outline" className="mb-4">
                  {product.category}
                </Badge>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? "fill-wellness-gold text-wellness-gold"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground">
                    {product.reviews} reviews
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-2xl text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <p className="text-lg text-muted-foreground">
                  {product.description}
                </p>
              </div>

              {product.inStock && (
                <div className="flex items-center gap-2 text-wellness-sage">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">In Stock</span>
                </div>
              )}

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button 
                  size="lg" 
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={addToCart.isPending}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {addToCart.isPending ? "Adding..." : "Add to Cart"}
                </Button>
                
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="benefits" className="animate-fade-in">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
            </TabsList>
            
            <TabsContent value="benefits" className="mt-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-wellness-sage mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="ingredients" className="mt-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">Ingredients</h3>
                <p className="text-muted-foreground">{product.ingredients}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="usage" className="mt-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">How to Use</h3>
                <p className="text-muted-foreground">{product.usage}</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}
