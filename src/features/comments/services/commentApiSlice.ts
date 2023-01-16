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
    getCommentsForPost: builder.query<BaseCommentModel[], number>({
      query: (postId) => ({
        url: `/posts/${postId}/comments`,
        method: "GET",
      }),
    }),
    getLikesFromComment: builder.query<UsersLikedCommentModel, number>({
      query: (commentId) => ({
        url: `/comments/${commentId}/likes`,
        method: "GET",
      }),
    }),
    likeComment: builder.mutation<string, number>({
      query: (commentId) => ({
        url: `/comments/${commentId}/likes`,
        method: "POST",
      }),
    }),
    deleteCommentLike: builder.mutation<string, number>({
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
  useGetLikesFromCommentQuery,
  useLikeCommentMutation,
  useDeleteCommentLikeMutation,
} = commentApiSlice;
