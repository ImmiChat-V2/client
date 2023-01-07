// boiler plate
import {
  ActiveConnectionsModel,
  ConnectionMutationResponseModel,
} from "../models/Connections.model";
import { apiSlice } from "../../api/apiSlice";

export const connectionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConnections: builder.query<ActiveConnectionsModel, number | string>({
      query: (userId: string | number) => ({
        url: `/users/${userId}/connections`,
        method: "GET",
      }),
    }),
    sendConnection: builder.mutation<ConnectionMutationResponseModel, number | string>({
      query: (userId: string | number) => ({
        url: `/users/${userId}/connections`,
        method: "POST",
      }),
    }),
    acceptConnection: builder.mutation<ConnectionMutationResponseModel, number | string>({
      query: (userId: string | number) => ({
        url: `/users/${userId}/connections`,
        method: "PUT",
      }),
    }),
    removeConnection: builder.mutation<ConnectionMutationResponseModel, number | string>({
      query: (userId: string | number) => ({
        url: `/users/${userId}/connections`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetConnectionsQuery,
  useSendConnectionMutation,
  useAcceptConnectionMutation,
  useRemoveConnectionMutation,
} = connectionsApiSlice;
