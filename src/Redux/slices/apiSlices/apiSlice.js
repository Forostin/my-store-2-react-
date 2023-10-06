
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { buildUrl } from "../../../utils/common";
import { BASE_URL } from "../../../utils/constants"

import { useSelector } from "react-redux";

// const { list } = useSelector(({ categories }) => categories);

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ id }) => `/products/${id}`,

      providesTags: ["Product"],
    }),
    getProducts: builder.query({
      // query: (params) => buildUrl("/products", params),

      // ??????????????????
      query: (params) => buildUrl(`/products/category`, params),
      
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductQuery, useGetProductsQuery } = apiSlice;