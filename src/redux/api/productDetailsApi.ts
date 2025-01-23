import { baseApi } from "./api";

export const prodictDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductDetails: builder.query({
      query: (id: string) => `/product/${id}`,
    }),
  }),
});

export const { useGetProductDetailsQuery } = prodictDetailsApi;
