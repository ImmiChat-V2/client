import { UserProfileType } from "../models/UserProfileModel";
import { apiSlice } from "features/api/apiSlice";

export const userProfileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<{ data: UserProfileType }, number>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "GET",
      }),
    }),
    updateUserProfile: builder.mutation<UserProfileType, UserProfileType>({
      query: (body) => ({
        url: `/users/${body.id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } =
  userProfileApiSlice;
