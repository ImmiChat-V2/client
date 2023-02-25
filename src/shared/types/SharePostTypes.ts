export type BasePostModel = {
  readonly id: number;
  readonly media?: string;
  readonly userId: number;
  readonly content: string;
  readonly categoryName: string;
};

export type BaseCreatePostModel = {
  readonly media?: string;
  readonly content: string;
  readonly categoryName?: string;
};
