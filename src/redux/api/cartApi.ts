import { baseApi } from "./api";

const getToken = () => {
  const persistedAuth = localStorage.getItem("persist:auth");

  if (persistedAuth) {
    const parsedAuth = JSON.parse(persistedAuth);
    return JSON.parse(parsedAuth.token); // Assuming token is stored as a JSON string
  }
  console.error("No auth data found in local storage");
  return null; // Return null if no token is found
};

export const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserCart: builder.query({
      query: () => {
        const token = getToken();
        if (!token) {
          throw new Error("User is not authenticated");
        }

        return {
          url: "/user-cart/cart",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["Cart"],
    }),
    addProductToCart: builder.mutation({
      query: (productDetails) => {
        const token = getToken();
        if (!token) {
          throw new Error("User is not authenticated");
        }
        return {
          url: "/user-cart/cart/add",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: productDetails,
        };
      },
      invalidatesTags: ["Cart"],
    }),
    removeProductFromCart: builder.mutation({
      query: ({ productId }) => {
        const token = getToken();
        if (!token) {
          throw new Error("User is not authenticated");
        }

        if (!productId) {
          throw new Error("Product ID is required to remove item from cart");
        }

        return {
          url: `/user-cart/cart/remove/${productId}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetUserCartQuery,
  useAddProductToCartMutation,
  useRemoveProductFromCartMutation,
} = cartApi;
