export type BasePostType = {
  readonly id: number;
  readonly userId: number;
  readonly profilePic?: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly timestamp?: Date;
  readonly content: string;
  readonly media?: string;
  readonly likes: { id: number }[];
  readonly comments: { userId: number }[];
};

export type BasePostTopType = Pick<
  BasePostType,
  "userId" | "profilePic" | "firstName" | "lastName" | "timestamp" | "content" | "media"
>;
export type BasePostBodyType = Pick<BasePostType, "content" | "media">;
export type BasePostFooterType = Pick<
  BasePostType,
  "id" | "userId" | "likes" | "comments"
>;
