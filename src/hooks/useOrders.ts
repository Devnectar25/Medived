import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useOrders = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return [];

      const { data, error } = await supabase
        .from("orders")
        .select("*, order_items(*, products(*))")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const createOrder = useMutation({
    mutationFn: async (orderData: {
      cartItems: any[];
      subtotal: number;
      shipping: number;
      total: number;
      paymentMethod: string;
      shippingAddressId?: string;
      notes?: string;
    }) => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error("Please login to place order");

      // Generate order number
      const orderNumber = `ORD-${Date.now()}`;

      // Create order
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          user_id: session.user.id,
          order_number: orderNumber,
          status: "pending",
          subtotal: orderData.subtotal,
          shipping: orderData.shipping,
          total: orderData.total,
          payment_method: orderData.paymentMethod,
          payment_status: orderData.paymentMethod === "cod" ? "pending" : "pending",
          shipping_address_id: orderData.shippingAddressId,
          notes: orderData.notes,
        })
        .select()
        .single();

      if (orderError) throw orderError;
      if (!order) throw new Error("Failed to create order");

      // Create order items
      const orderItems = orderData.cartItems.map((item) => ({
        order_id: order.id,
        product_id: item.product_id,
        product_name: item.products.name,
        quantity: item.quantity,
        price: item.products.price,
      }));

      const { error: itemsError } = await supabase
        .from("order_items")
        .insert(orderItems);

      if (itemsError) throw itemsError;

      return order;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast({ title: "Order placed successfully!" });
    },
    onError: (error: Error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });

  return {
    orders: orders || [],
    isLoading,
    createOrder,
  };
};

export const useOrderById = (orderId: string | undefined) => {
  return useQuery({
    queryKey: ["order", orderId],
    queryFn: async () => {
      if (!orderId) return null;

      const { data, error } = await supabase
        .from("orders")
        .select("*, order_items(*, products(*))")
        .eq("id", orderId)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!orderId,
  });
};
