import { apiSlice } from "features/api/apiSlice";
import {
  BaseCommentModel,
  UpdateCommentProps,
  DeleteCommentProps,
  CreateCommentRequestModel,
} from "../models/Comments.model";

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateComment: builder.mutation<BaseCommentModel, UpdateCommentProps>({
      query: ({ comment_id, body }) => ({
        url: `/comments/${comment_id}`,
        method: "PUT",
        body,
      }),
    }),
    deleteComment: builder.mutation<null, DeleteCommentProps>({
      query: ({ comment_id, body }) => ({
        url: `/comments/${comment_id}`,
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
      query: (post_id) => ({
        url: `/posts/${post_id}/comments`,
        method: "GET",
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
