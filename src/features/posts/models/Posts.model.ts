export type BasePostModel = {
  readonly id: number;
  readonly media?: string;
  readonly userId: number;
  readonly content: string;
  readonly categoryName: string;
};

export type UpdatePostRequestModel = {
  readonly content?: string;
  readonly media?: string;
  readonly categoryName?: string;
};

export type CreatePostRequestModel = Omit<BasePostModel, "id">;
export type DeletePostRequestModel = Pick<BasePostModel, "id" | "userId">;

export type LikePostModel = Pick<BasePostModel, "id" | "userId">;
export type DeletePostLikeModel = Pick<BasePostModel, "id" | "userId">;

export type PostIdBodyProps = {
  postId: string;
  body: BasePostModel;
};
