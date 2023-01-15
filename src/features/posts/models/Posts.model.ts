export type BasePostModel = {
  readonly id: number;
  readonly media?: string;
  readonly userId: number;
  readonly content: string;
  readonly categoryName: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
};

export type BasePostRequestModel = Pick<
  BasePostModel,
  "content" | "media" | "categoryName"
>;

export type CreatePostRequestModel = Omit<BasePostModel, "id">;
export type DeletePostRequestModel = Pick<BasePostModel, "id" | "userId">;

export type LikePostModel = Pick<BasePostModel, "id" | "userId">;
export type DeletePostLikeModel = Pick<BasePostModel, "id" | "userId">;

export type UpdatePostRequestModel = {
  postId: number;
  body: BasePostRequestModel;
};

export type BasePostPropType = {
  readonly id: number;
  readonly userId: number;
  readonly profilePic?: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly timestamp?: Date;
  readonly content: string;
  readonly media?: string;
};

export type BasePostTopPropType = Omit<BasePostPropType, "content" | "media">;
export type BasePostBodyPropType = Pick<
  BasePostPropType,
  "id" | "userId" | "content" | "media"
>;
export type BasePostFooterPropType = Pick<BasePostPropType, "id" | "userId">;
