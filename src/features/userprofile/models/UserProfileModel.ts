export type UserProfileType = {
  readonly id: number;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly profilePic?: string;
  readonly dateOfBirth?: Date;
  readonly language: string;
  readonly coverPic?: string;
  readonly updatedAt?: Date;
  readonly createdAt?: Date;
};

export type UserProfileInfoType = UserProfileType & {
  readonly friends: ShortUserInfoType[];
};

export type ShortUserInfoType = Pick<
  UserProfileType,
  "id" | "firstName" | "lastName" | "profilePic"
>;
