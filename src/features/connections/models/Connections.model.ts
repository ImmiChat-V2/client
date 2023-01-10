type ConnectionMutationResponseData = {
  readonly id: number;
  readonly senderId: number;
  readonly receiverId: number;
  readonly connected: boolean;
  readonly createdAt: string;
  readonly updatedAt: string;
};
export type ConnectionMutationResponseModel = {
  readonly data: ConnectionMutationResponseData;
  readonly message: string;
};

export type ConnectionUserInfo = {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly profilePic: string;
};
type ConnectionData = {
  readonly id: number;
  readonly connected: boolean;
  readonly status: string;
  readonly connectionInfo: ConnectionUserInfo;
};

export type ConnectionsModel = {
  readonly data: ConnectionData[];
};
