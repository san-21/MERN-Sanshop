import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setToken } from "redux/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://sanshop-api.onrender.com",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryIncludesRefetch = async (args, api, extraOptions) => {
  let queryResult = await baseQuery(args, api, extraOptions);

  if (queryResult?.error?.status === 403) {
    const refreshQueryResult = await baseQuery("/refresh", api, extraOptions);

    if (refreshQueryResult?.data) {
      api.dispatch(setToken({ ...refreshQueryResult.data }));

      queryResult = await baseQuery(args, api, extraOptions);
    } else {
      if (refreshQueryResult?.error?.status === 403) {
        refreshQueryResult.error.data.message =
          "Your Login Expired :Login Again";
      }
      return refreshQueryResult;
    }
  }
  return queryResult;
};

export const shopApi = createApi({
  baseQuery: baseQueryIncludesRefetch,
  reducerPath: "shopApi",
  tagTypes: ["Product", "User"],
  endpoints: (builder) => ({}),
});
