import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { shopApi } from "./api";

export const productApiSlice = shopApi.injectEndpoints({
  tagTypes: ["Product"],

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/product/products",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Product", id })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }],
    }),
    getProduct: builder.query({
      query: (productId) => `/product/products/${productId}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
    addNewProduct: builder.mutation({
      query: (initialProduct) => ({
        url: "/product/productscreate",
        method: "POST",
        body: initialProduct,
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...product }) => ({
        url: `/product/products/${id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Product", id }],
      // invalidatesTags: [{ type: "Product", id: "LIST" }],
      // transformResponse: (response, meta, arg) => response.data,
    }),
    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `/product/products`,
        method: "DELETE",
        body: { id },
      }),

      invalidatesTags: (result, error, { id }) => [
        { type: "Product", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddNewProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApiSlice;
