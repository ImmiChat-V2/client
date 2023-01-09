import {
  DisplayUserModel,
  BaseUserModel,
} from "features/auth/models/User.model";
import { apiSlice } from "features/api/apiSlice";

export const userProfileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.mutation<BaseUserModel, string>({
      query: (userId: string) => ({
        url: `/users/${userId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserProfileMutation } = userProfileApiSlice;
