import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/hero-wellness.jpg";
import aromatherapyImg from "@/assets/category-aromatherapy.jpg";
import skincareImg from "@/assets/category-skincare.jpg";

const slides = [
  {
    title: "Discover the Power of",
    highlight: "Homeopathy",
    description: "Premium homeopathic medicines crafted with care for your holistic wellness journey. Natural, safe, and effective solutions for better health.",
    image: heroImage,
    badge: "Natural Wellness Solutions",
    cta: "Shop Now",
    ctaLink: "/products",
  },
  {
    title: "Transform Your Skin with",
    highlight: "Natural Care",
    description: "Experience the gentle power of nature with our organic skincare range. Pure ingredients for radiant, healthy skin.",
    image: skincareImg,
    badge: "Organic Beauty",
    cta: "Explore Skincare",
    ctaLink: "/products?category=skincare",
  },
  {
    title: "Find Peace Through",
    highlight: "Aromatherapy",
    description: "Discover tranquility with our premium essential oils and aromatherapy blends. Natural stress relief for mind and body.",
    image: aromatherapyImg,
    badge: "Stress Relief",
    cta: "Browse Collection",
    ctaLink: "/products?category=aromatherapy",
  },
];

export const HeroCarousel = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left Content */}
                  <div className="space-y-6 animate-fade-in-up">
                    <div className="inline-block">
                      <span className="px-4 py-2 rounded-full bg-wellness-sage/10 text-wellness-sage text-sm font-medium">
                        {slide.badge}
                      </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                      {slide.title}{" "}
                      <span className="text-primary">{slide.highlight}</span>
                    </h1>
                    
                    <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                      {slide.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <Link to={slide.ctaLink}>
                        <Button size="lg" className="group">
                          {slide.cta}
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
                    <div className="flex flex-wrap gap-6 pt-6 border-t border-border/50">
                      <div>
                        <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                        <div className="text-sm text-muted-foreground">Products</div>
                      </div>
                      <div>
                        <div className="text-2xl md:text-3xl font-bold text-primary">50K+</div>
                        <div className="text-sm text-muted-foreground">Happy Customers</div>
                      </div>
                      <div>
                        <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
                        <div className="text-sm text-muted-foreground">Natural</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="relative animate-scale-in">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl" />
                    <img
                      src={slide.image}
                      alt={slide.highlight}
                      className="rounded-3xl shadow-elegant w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 hidden md:flex" />
        <CarouselNext className="right-4 hidden md:flex" />
      </Carousel>
    </section>
  );
};
