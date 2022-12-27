import { LoginUserModel } from "../models/User.model";
import { apiSlice } from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: LoginUserModel) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    validateJwt: builder.mutation({
      query: () => ({
        url: "/validate-authentication",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useValidateJwtMutation } = authApiSlice;
