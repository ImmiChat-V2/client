export type BaseFeedType = {
  readonly id: number;
  readonly userId: number;
  readonly content: string;
  readonly media?: string;
  readonly user: UserInfoType;
  readonly likes: { id: number }[];
  readonly comments: { userId: number }[];
};

type UserInfoType = {
  readonly firstName: string;
  readonly lastName: string;
  readonly profilePic?: string;
};
