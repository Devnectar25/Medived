import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilters } from "@/components/ProductFilters";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import herbsImg from "@/assets/category-herbs.jpg";

// Mock product data - will be replaced with database
const mockProducts = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Wellness Product ${i + 1}`,
  price: 29.99 + i * 5,
  originalPrice: i % 3 === 0 ? 39.99 + i * 5 : undefined,
  image: herbsImg,
  rating: 4.5 + (i % 5) * 0.1,
  reviews: 50 + i * 10,
  category: ["Sleep", "Stress", "Digestion", "Skincare"][i % 4],
  badge: i % 4 === 0 ? "Sale" : i % 4 === 1 ? "New" : undefined,
}));

export default function Products() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [filters, setFilters] = useState({
    category: categoryParam || "",
    priceRange: [0, 100],
    sortBy: "featured",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-hero py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Shop Natural Remedies
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Discover our premium collection of homeopathic medicines
            </p>
          </div>
        </section>

        {/* Products Grid with Filters */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex gap-8">
              {/* Desktop Filters */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <ProductFilters filters={filters} setFilters={setFilters} />
              </aside>

              {/* Products */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-muted-foreground">
                    Showing {mockProducts.length} products
                  </p>
                  
                  {/* Mobile Filter Button */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden">
                        <SlidersHorizontal className="h-4 w-4 mr-2" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80">
                      <div className="mt-8">
                        <ProductFilters filters={filters} setFilters={setFilters} />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
