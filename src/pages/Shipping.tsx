import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Package, Truck, Clock, MapPin } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Shipping Information</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fast, reliable delivery to your doorstep
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Shipping Methods */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Shipping Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Standard Shipping</h3>
                </div>
                <p className="text-muted-foreground mb-2">₹50 - Delivery in 5-7 business days</p>
                <p className="text-sm text-muted-foreground">Available for all locations across India</p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Express Shipping</h3>
                </div>
                <p className="text-muted-foreground mb-2">₹150 - Delivery in 2-3 business days</p>
                <p className="text-sm text-muted-foreground">Available for metro cities and major towns</p>
              </div>
            </div>
          </section>

          {/* Free Shipping */}
          <section className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Free Shipping</h2>
            <p className="text-lg text-muted-foreground">
              Enjoy free standard shipping on all orders above ₹999!
            </p>
          </section>

          {/* Delivery Timeline */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Delivery Timeline</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Order Processing</h3>
                  <p className="text-muted-foreground">
                    Orders are processed within 1-2 business days. You'll receive a confirmation email 
                    with tracking details once your order ships.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Tracking Your Order</h3>
                  <p className="text-muted-foreground">
                    Track your shipment in real-time using the tracking number provided in your 
                    shipping confirmation email.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Shipping Locations */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Shipping Locations</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                We currently ship to all locations within India. Unfortunately, we do not offer 
                international shipping at this time.
              </p>
              <p className="mt-4">
                <strong>Coverage includes:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All metro cities and major urban areas</li>
                <li>Tier 2 and Tier 3 cities</li>
                <li>Rural areas (delivery times may vary)</li>
                <li>Remote locations (subject to courier serviceability)</li>
              </ul>
            </div>
          </section>

          {/* Important Notes */}
          <section className="bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Important Notes</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Delivery times are estimates and may vary during peak seasons or due to unforeseen circumstances.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Please ensure someone is available to receive the package at the delivery address.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Shipping charges are calculated at checkout based on your location and order weight.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>For any shipping-related queries, please contact our customer support team.</span>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
