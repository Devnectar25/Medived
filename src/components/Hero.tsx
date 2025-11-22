import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-wellness-sage/10 text-wellness-sage text-sm font-medium">
                Natural Wellness Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Discover the Power of{" "}
              <span className="text-primary">Homeopathy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Premium homeopathic medicines crafted with care for your holistic wellness journey. Natural, safe, and effective solutions for better health.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="group">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Natural</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl" />
            <img
              src={heroImage}
              alt="Natural homeopathic wellness products"
              className="rounded-3xl shadow-elegant w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
