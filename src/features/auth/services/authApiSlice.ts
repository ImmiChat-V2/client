import {
  DisplayUserModel,
  LoginUserModel,
  RegisterUserModel,
} from "../models/User.model";
import { apiSlice } from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body: RegisterUserModel) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<DisplayUserModel, LoginUserModel>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    validateJwt: builder.mutation<DisplayUserModel, undefined>({
      query: () => ({
        url: "/validate-authentication",
        method: "POST",
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useValidateJwtMutation } =
  authApiSlice;
