import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RotateCcw, CheckCircle2, XCircle, Package } from "lucide-react";

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Returns & Refunds</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your satisfaction is our priority
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Return Policy */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Return Policy</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                We want you to be completely satisfied with your purchase. If you're not happy with 
                your order, we accept returns within <strong>7 days</strong> of delivery for most products.
              </p>
              <p>
                To be eligible for a return, items must be unused, in their original packaging, 
                and in the same condition as received.
              </p>
            </div>
          </section>

          {/* Eligible Items */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">What Can Be Returned?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-foreground">Returnable Items</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Unopened herbal supplements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Unused skincare products with seal intact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Aromatherapy products in original packaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Defective or damaged products</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-foreground">Non-Returnable Items</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Opened or used products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Products without original packaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Prescription or personalized items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Products past the 7-day return window</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Return Process */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">How to Return</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Contact Us</h3>
                  <p className="text-muted-foreground">
                    Email us at support@mediveda.com or call +91 1800-123-4567 with your order number 
                    and reason for return.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Get Authorization</h3>
                  <p className="text-muted-foreground">
                    Our team will review your request and provide a Return Authorization Number (RAN) 
                    within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Ship the Item</h3>
                  <p className="text-muted-foreground">
                    Pack the item securely with your RAN included. Ship to the address provided by our 
                    support team. Return shipping costs are the customer's responsibility unless the 
                    item is defective.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Receive Refund</h3>
                  <p className="text-muted-foreground">
                    Once we receive and inspect your return, we'll process your refund within 5-7 
                    business days to your original payment method.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Refund Information */}
          <section className="bg-muted/50 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <RotateCcw className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Refund Information</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Refunds are processed within 5-7 business days after receiving the returned item.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>The refund amount will be credited to your original payment method.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Original shipping charges are non-refundable except for defective or damaged items.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>It may take 7-10 additional days for the refund to reflect in your account, depending on your bank.</span>
              </li>
            </ul>
          </section>

          {/* Exchange Policy */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Exchanges</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                We currently do not offer direct exchanges. If you'd like a different product, 
                please return the original item for a refund and place a new order for the item you prefer.
              </p>
            </div>
          </section>

          {/* Damaged or Defective */}
          <section className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Package className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Damaged or Defective Items</h3>
                <p className="text-muted-foreground">
                  If you receive a damaged or defective item, please contact us immediately with photos 
                  of the product and packaging. We'll arrange for a replacement or full refund, including 
                  return shipping costs, at no charge to you.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Questions About Returns?</h2>
            <p className="text-muted-foreground mb-6">
              Our customer service team is here to help with any return or refund inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@mediveda.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Email Support
              </a>
              <a 
                href="tel:+911800123456" 
                className="inline-flex items-center justify-center px-6 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
              >
                Call Us
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Returns;
