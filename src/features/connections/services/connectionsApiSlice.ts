// boiler plate
import { BaseUserModel } from "features/auth/models/User.model";
import { apiSlice } from "../../api/apiSlice";

export const connectionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConnections: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}/connections`,
        method: "GET",
      }),
    }),
    sendConnectionRequest: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}/connections`,
        method: "POST",
      }),
    }),
    acceptConnection: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}/connections`,
        method: "PUT",
      }),
    }),
    removeConnection: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}/connections`,
        method: "DELETE",
      }),
    }),
  }),
});
