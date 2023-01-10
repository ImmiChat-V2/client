import {
  UserProfileType,
  UpdateUserProfileProps,
} from "../models/UserProfileTypes";
import { apiSlice } from "features/api/apiSlice";

export const userProfileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<UserProfileType, string>({
      query: (userId: string) => ({
        url: `/users/${userId}`,
        method: "GET",
      }),
    }),
    updateUserProfile: builder.mutation<
      UserProfileType,
      UpdateUserProfileProps
    >({
      query: ({ userId, body }: UpdateUserProfileProps) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } =
  userProfileApiSlice;
