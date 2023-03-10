import { BaseUserModel } from "features/auth/models/User.model";
import { UserInfoType } from "shared/types/Feed";

export type BaseCommentModel = {
  readonly id: number;
  readonly userId: number;
  readonly postId: number;
  readonly media?: string;
  readonly content: string;
  readonly likes: { id: number }[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly user: UserInfoType;
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

export type UsersLikedCommentModel = Pick<
  BaseUserModel,
  "firstName" | "lastName" | "profilePic"
>;

export type UpdateCommentProps = {
  commentId: number;
  body: UpdateCommentRequestModel;
};

export type CreateCommentProps = {
  postId: number;
  body: CreateCommentRequestModel;
};

export type DeleteCommentProps = {
  commentId: number;
  body: DeleteCommentRequestModel;
};
