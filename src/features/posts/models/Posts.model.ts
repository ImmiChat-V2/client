export type BasePostModel = {
  readonly id: number;
  readonly media?: string;
  readonly userId: number;
  readonly content: string;
  readonly categoryName: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
};

export type UpdatePostRequestModel = Pick<
  BasePostModel,
  "content" | "media" | "categoryName"
>;

export type CreatePostRequestModel = Omit<BasePostModel, "id">;
export type DeletePostRequestModel = Pick<BasePostModel, "id" | "userId">;

export type LikePostModel = Pick<BasePostModel, "id" | "userId">;
export type DeletePostLikeModel = Pick<BasePostModel, "id" | "userId">;

export type PostIdBodyProps = {
  postId: string;
  body: BasePostModel;
};
