export type BaseUserModel = {
  readonly id: number;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly password: string;
  readonly profilePic?: string;
  readonly dateOfBirth?: Date;
  readonly language: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};

export type DisplayUserModel = Omit<BaseUserModel, "password">;

export type LoginUserModel = Pick<BaseUserModel, "email" | "password">;

export type RegisterUserModel = Omit<
  BaseUserModel,
  "id" | "createdAt" | "updatedAt"
>;

export type UsersLikedPostModel = Pick<
  BaseUserModel,
  "firstName" | "lastName" | "profilePic"
>;
