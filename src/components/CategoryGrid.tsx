import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import aromatherapyImg from "@/assets/category-aromatherapy.jpg";
import skincareImg from "@/assets/category-skincare.jpg";
import herbsImg from "@/assets/category-herbs.jpg";

const categories = [
  {
    name: "Aromatherapy",
    image: aromatherapyImg,
    description: "Essential oils & diffusers",
    path: "/products?category=aromatherapy",
  },
  {
    name: "Skincare",
    image: skincareImg,
    description: "Natural beauty solutions",
    path: "/products?category=skincare",
  },
  {
    name: "Digestion",
    image: herbsImg,
    description: "Gut health & wellness",
    path: "/products?category=digestion",
  },
  {
    name: "Sleep",
    image: aromatherapyImg,
    description: "Restful night solutions",
    path: "/products?category=sleep",
  },
  {
    name: "Stress Relief",
    image: herbsImg,
    description: "Mind & body balance",
    path: "/products?category=stress",
  },
  {
    name: "Body Care",
    image: skincareImg,
    description: "Complete body wellness",
    path: "/products?category=bodycare",
  },
];

export const CategoryGrid = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of natural remedies for every wellness need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.path} 
              to={category.path}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="overflow-hidden border-0 shadow-elegant hover:shadow-hover transition-all duration-300 group-hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-background/90">{category.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
