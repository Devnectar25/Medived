import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface ProductFiltersProps {
  filters: {
    category: string;
    priceRange: number[];
    sortBy: string;
  };
  setFilters: (filters: any) => void;
}

const categories = [
  "Sleep", "Stress", "Digestion", "Food & Drink", 
  "Skincare", "Body Care", "Aromatherapy", "Yoga & Meditation"
];

export const ProductFilters = ({ filters, setFilters }: ProductFiltersProps) => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold text-lg mb-4">Sort By</h3>
        <RadioGroup 
          value={filters.sortBy}
          onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="featured" id="featured" />
            <Label htmlFor="featured">Featured</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="price-low" id="price-low" />
            <Label htmlFor="price-low">Price: Low to High</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="price-high" id="price-high" />
            <Label htmlFor="price-high">Price: High to Low</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="rating" id="rating" />
            <Label htmlFor="rating">Top Rated</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox 
                id={category}
                checked={filters.category === category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setFilters({ ...filters, category: category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-") });
                  } else {
                    setFilters({ ...filters, category: "" });
                  }
                }}
              />
              <Label 
                htmlFor={category}
                className="text-sm font-normal cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Price Range</h3>
        <Slider
          value={filters.priceRange}
          onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
          max={100}
          step={5}
          className="mb-4"
        />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      <Button 
        variant="outline" 
        className="w-full"
        onClick={() => setFilters({ category: "", priceRange: [0, 100], sortBy: "featured" })}
      >
        Reset Filters
      </Button>
    </div>
  );
};
