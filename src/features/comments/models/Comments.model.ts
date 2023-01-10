export type BaseCommentModel = {
  readonly id: number;
  readonly userId: number;
  readonly postId: number;
  readonly media?: string;
  readonly content: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
};

export type UpdateCommentRequestModel = Pick<
  BaseCommentModel,
  "media" | "content"
>;
export type DeleteCommentRequestModel = Pick<BaseCommentModel, "userId">;
export type CreateCommentRequestModel = Omit<
  BaseCommentModel,
  "id" | "createdAt" | "updatedAt"
>;

export type UpdateCommentProps = {
  comment_id: string;
  body: UpdateCommentRequestModel;
};

export type CreateCommentProps = {
  post_id: string;
  body: CreateCommentRequestModel;
};

export type DeleteCommentProps = {
  comment_id: string;
  body: DeleteCommentRequestModel;
};
