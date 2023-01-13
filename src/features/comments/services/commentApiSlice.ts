import { apiSlice } from "features/api/apiSlice";
import {
  BaseCommentModel,
  UpdateCommentProps,
  DeleteCommentProps,
  CreateCommentRequestModel,
  UsersLikedCommentModel,
} from "../models/Comments.model";

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateComment: builder.mutation<BaseCommentModel, UpdateCommentProps>({
      query: ({ commentId, body }) => ({
        url: `/comments/${commentId}`,
        method: "PUT",
        body,
      }),
    }),
    deleteComment: builder.mutation<null, DeleteCommentProps>({
      query: ({ commentId, body }) => ({
        url: `/comments/${commentId}`,
        method: "DELETE",
        body,
      }),
    }),
    createComment: builder.mutation<
      BaseCommentModel,
      CreateCommentRequestModel
    >({
      query: (body) => ({
        url: `/posts/${body.postId}/comments`,
        method: "POST",
        body,
      }),
    }),
    getCommentsForPost: builder.query<BaseCommentModel[], string>({
      query: (postId) => ({
        url: `/posts/${postId}/comments`,
        method: "GET",
      }),
    }),
    getLikesFromComment: builder.query<UsersLikedCommentModel, string>({
      query: (commentId) => ({
        url: `/comments/${commentId}/likes`,
        method: "GET",
      }),
    }),
    likeComment: builder.query<any, string>({
      query: (commentId) => ({
        url: `/comments/${commentId}/likes`,
        method: "POST",
      }),
    }),
    deleteCommentLike: builder.query<any, string>({
      query: (commentId) => ({
        url: `/comments/${commentId}/likes`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useUpdateCommentMutation,
  useDeleteCommentMutation,
  useCreateCommentMutation,
  useGetCommentsForPostQuery,
} = commentApiSlice;
