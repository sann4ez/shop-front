export const useBasketStore = defineStore("basket", () => {
  const cartId = useCookie("cartId", { default: () => null });
  const cart = ref(null);
  const cartCount = ref(null);

  const fetchCart = async () => {
    try {
      const data = await $fetch(`/cart`, {
        ...fetchOptions(),
      });
      cart.value = data;
      cartCount.value = data?.data?.purchases?.length
      return data;
    } catch (error) {
      console.error("fetchCart error:", error);
    }
  };

  const addToCart = async (productId, quantity) => {
    try {
      const data = await $fetch(`/cart/${productId}/add`, {
        ...fetchOptions(),
        method: "POST",
        query: { quantity },
      });

      cartId.value = data?.cart_id ?? cartId.value;

      await fetchCart();

      return data;
    } catch (error) {
      console.error("addToCart error:", error);
    }
  };

    const removeToCart = async (puchaserId, quantity) => {
    try {
      const data = await $fetch(`/cart/${puchaserId}/remove`, {
        ...fetchOptions(),
        method: "POST",
        query: { quantity },
      });

      await fetchCart();

      return data;
    } catch (error) {
      console.error("addToCart error:", error);
    }
  };

  return {
    cartId,
    cart,
    fetchCart,
    addToCart,
    removeToCart,
    cartCount,
  };
});
