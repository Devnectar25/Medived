import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Minus, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";

export default function Cart() {
  const { cartItems, isLoading, updateCartItem, removeFromCart } = useCart();
  
  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (item.products?.price || 0) * item.quantity;
  }, 0);
  const shipping = subtotal > 50 ? 0 : 5;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 animate-fade-in">Shopping Cart</h1>

          {isLoading ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">Loading your cart...</p>
            </Card>
          ) : cartItems.length === 0 ? (
            <Card className="p-12 text-center animate-scale-in">
              <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">
                Start adding some wellness products to your cart!
              </p>
              <Link to="/products">
                <Button size="lg">Continue Shopping</Button>
              </Link>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={item.products?.image_url || "/placeholder.svg"}
                        alt={item.products?.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {item.products?.name}
                            </h3>
                            <p className="text-muted-foreground">
                              ${item.products?.price}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart.mutate(item.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateCartItem.mutate({
                                id: item.id,
                                quantity: Math.max(0, item.quantity - 1),
                              })
                            }
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateCartItem.mutate({
                                id: item.id,
                                quantity: item.quantity + 1,
                              })
                            }
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div>
                <Card className="p-6 space-y-4 sticky top-24">
                  <h2 className="text-xl font-bold">Order Summary</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary">${total.toFixed(2)}</span>
                  </div>

                  <Button className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>

                  <Link to="/products">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
