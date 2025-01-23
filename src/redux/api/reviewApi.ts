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
export const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for adding a review
    addReviewToProduct: builder.mutation({
      query: ({ productId, review }) => {
        const token = getToken();
        if (!token) {
          throw new Error("User is not authenticated");
        }

        return {
          url: `product/${productId}/review`, // Endpoint for posting a review
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: review, // Send the review data in the body
        };
      },
      // Invalidate cache for product-related data
    }),
  }),
});

export const { useAddReviewToProductMutation } = reviewApi;
