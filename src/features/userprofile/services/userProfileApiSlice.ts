import { ShortUserInfoType } from "../models/UserProfileTypes";
import { apiSlice } from "features/api/apiSlice";

export const userProfileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<ShortUserInfoType, string>({
      query: (userId: string) => ({
        url: `/users/${userId}`,
        method: "GET",
      }),
    }),
    updateUserProfile: builder.mutation<any, any>({
      query: ({ userId, body }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } =
  userProfileApiSlice;
