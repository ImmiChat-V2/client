export type PostModel = {
  readonly id: number;
  readonly media?: string;
  readonly userId: number;
  readonly content: string;
  readonly categoryName: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
};
