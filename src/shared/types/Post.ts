export type BasePostType = {
  readonly id: number;
  readonly userId: number;
  readonly profilePic?: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly timestamp?: Date;
  readonly content: string;
  readonly media?: string;
};

export type BasePostTopType = Omit<BasePostType, "content" | "media">;
export type BasePostBodyType = Pick<
  BasePostType,
  "id" | "userId" | "content" | "media"
>;
export type BasePostFooterType = Pick<BasePostType, "id" | "userId">;
