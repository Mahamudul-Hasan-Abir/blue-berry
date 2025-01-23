// import { createApi } from "@reduxjs/toolkit/query/react";
// import { baseApi } from "./api";

import { baseApi } from "./api";

export const prodictApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/product",
    }),
  }),
});

export const { useGetProductsQuery } = prodictApi;
