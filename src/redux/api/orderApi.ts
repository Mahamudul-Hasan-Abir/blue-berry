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

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addUsersOrder: builder.mutation({
      query: (orderData) => {
        const token = getToken();
        if (!token) {
          throw new Error("User is not authenticated");
        }

        return {
          url: "/orders/post",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: orderData,
        };
      },
    }),
    getUserOrders: builder.query({
      query: () => {
        const token = getToken();
        if (!token) {
          throw new Error("User is not authenticated");
        }

        return {
          url: "/orders/get",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getAllUsersOrdersForAdmin: builder.query({
      query: () => {
        const token = getToken();
        if (!token) {
          throw new Error("User is not authenticated");
        }

        return {
          url: "/orders/admin",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useAddUsersOrderMutation,
  useGetUserOrdersQuery,
  useGetAllUsersOrdersForAdminQuery,
} = orderApi;
