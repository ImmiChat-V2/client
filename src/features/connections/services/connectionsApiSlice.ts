import {
  ConnectionsModel,
  ConnectionMutationResponseModel,
} from "../models/Connections.model";
import { apiSlice } from "features/api/apiSlice";

export const connectionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConnections: builder.query<{ data: ConnectionsModel }, number>({
      query: (userId) => ({
        url: `/users/${userId}/connections`,
        method: "GET",
      }),
    }),
    sendConnection: builder.mutation<ConnectionMutationResponseModel, number>({
      query: (userId) => ({
        url: `/users/${userId}/connections`,
        method: "POST",
      }),
    }),
    acceptConnection: builder.mutation<ConnectionMutationResponseModel, number>(
      {
        query: (userId) => ({
          url: `/users/${userId}/connections`,
          method: "PUT",
        }),
      }
    ),
    removeConnection: builder.mutation<ConnectionMutationResponseModel, number>(
      {
        query: (userId) => ({
          url: `/users/${userId}/connections`,
          method: "DELETE",
        }),
      }
    ),
  }),
});

export const {
  useGetConnectionsQuery,
  useSendConnectionMutation,
  useAcceptConnectionMutation,
  useRemoveConnectionMutation,
} = connectionsApiSlice;
