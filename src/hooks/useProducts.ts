import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useProducts = (filters?: {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
  search?: string;
}) => {
  return useQuery({
    queryKey: ["products", filters],
    queryFn: async () => {
      let query = supabase
        .from("products")
        .select("*, categories(name)")
        .eq("is_active", true);

      if (filters?.category) {
        query = query.eq("categories.slug", filters.category);
      }

      if (filters?.minPrice !== undefined) {
        query = query.gte("price", filters.minPrice);
      }

      if (filters?.maxPrice !== undefined) {
        query = query.lte("price", filters.maxPrice);
      }

      if (filters?.search) {
        query = query.or(`name.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
      }

      if (filters?.sortBy === "price-low") {
        query = query.order("price", { ascending: true });
      } else if (filters?.sortBy === "price-high") {
        query = query.order("price", { ascending: false });
      } else if (filters?.sortBy === "rating") {
        query = query.order("rating", { ascending: false });
      } else {
        query = query.order("created_at", { ascending: false });
      }

      const { data, error } = await query;

      if (error) throw error;
      return data;
    },
  });
};

export const useProductBySlug = (slug: string | undefined) => {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: async () => {
      if (!slug) return null;

      const { data, error } = await supabase
        .from("products")
        .select("*, categories(name, slug)")
        .eq("slug", slug)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });
};

export const useFeaturedProducts = () => {
  return useQuery({
    queryKey: ["products", "featured"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*, categories(name)")
        .eq("is_active", true)
        .order("rating", { ascending: false })
        .limit(6);

      if (error) throw error;
      return data;
    },
  });
};
