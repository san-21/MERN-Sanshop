import { shopApi } from "./api";

export const userApiSlice = shopApi.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/user/users",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "User", id })),
              { type: "User", id: "UserLIST" },
            ]
          : [{ type: "User", id: "UserLIST" }],
    }),
    getUser: builder.query({
      query: (userId) => `/user/getuser/${userId}`,
      method: "GET",
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    addNewUser: builder.mutation({
      query: (initialUser) => ({
        url: "/user/addnewuser",
        method: "POST",
        body: initialUser,
      }),
      invalidatesTags: [{ type: "User", id: "UserLIST" }],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...user }) => ({
        url: `/user/updateuser/${id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
      // invalidatesTags: [{ type: "Product", id: "LIST" }],
      transformResponse: (response, meta, arg) => response.data,
    }),

    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `/user/deleteuser`,
        method: "DELETE",
        body: { id },
      }),

      invalidatesTags: (result, error, { id }) => [
        { type: "User", id: "UserLIST" },
      ],
    }),
    signUpUser: builder.mutation({
      query: ({ id, ...user }) => ({
        url: `/user/signupuser/${id}`,
        method: "PATCH",
        body: user,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
      // invalidatesTags: [{ type: "Product", id: "LIST" }],
      transformResponse: (response, meta, arg) => response.data,
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateUserMutation,
  useAddNewUserMutation,
  useDeleteUserMutation,
  useGetUserQuery,
  useSignUpUserMutation,
} = userApiSlice;
