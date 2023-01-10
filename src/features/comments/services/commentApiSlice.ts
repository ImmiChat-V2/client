import { apiSlice } from "features/api/apiSlice";
import {
  BaseCommentModel,
  UpdateCommentProps,
  CreateCommentProps,
  DeleteCommentProps,
} from "../models/Comments.model";

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateComment: builder.mutation<BaseCommentModel, UpdateCommentProps>({
      query: ({ comment_id, body }: UpdateCommentProps) => ({
        url: `/comments/${comment_id}`,
        method: "PUT",
        body,
      }),
    }),
    deleteComment: builder.mutation<BaseCommentModel, DeleteCommentProps>({
      query: ({ comment_id, body }: DeleteCommentProps) => ({
        url: `/comments/${comment_id}`,
        method: "DELETE",
        body,
      }),
    }),
    postComment: builder.mutation<BaseCommentModel, CreateCommentProps>({
      query: ({ post_id, body }: CreateCommentProps) => ({
        url: `/posts/${post_id}/comments`,
        method: "POST",
        body,
      }),
    }),
    getCommentsForPost: builder.query<any, any>({
      query: (post_id: string) => ({
        url: `/posts/${post_id}/comments`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useUpdateCommentMutation,
  useDeleteCommentMutation,
  usePostCommentMutation,
  useGetCommentsForPostQuery,
} = commentApiSlice;
