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

export type BasePostTopType = Omit<BasePostType, "likes" | "comments">;
export type BasePostBodyType = Pick<BasePostType, "content" | "media">;
export type BasePostFooterType = Pick<
  BasePostType,
  "id" | "userId" | "likes" | "comments"
>;
