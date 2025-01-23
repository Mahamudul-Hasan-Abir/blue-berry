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
export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => {
        const token = getToken();
        if (!token) {
          throw new Error("Admin is not authenticated");
        }

        return {
          url: "/user/get-all-users",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getUsersRole: builder.query({
      query: () => {
        const token = getToken();
        if (!token) {
          throw new Error("Admin is not authenticated");
        }

        return {
          url: "/user/get-all-users",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUsersRoleQuery } = adminApi;
