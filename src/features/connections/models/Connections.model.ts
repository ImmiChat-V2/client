type ConnectionMutationResponseData = {
  readonly id: number;
  readonly senderId: number;
  readonly receiverId: number;
  readonly connected: boolean;
  readonly createdAt: string;
  readonly updatedAt: string;
};
export type ConnectionMutationResponseModel = {
  data: ConnectionMutationResponseData;
  message: string;
};

export type ConnectionUserInfo = {
  id: number;
  firstName: string;
  lastName: string;
  profilePic: string;
};
type ConnectionData = {
  id: number;
  connected: boolean;
  status: string;
  connectionInfo: ConnectionUserInfo;
};

export type ConnectionsModel = {
  data: ConnectionData[];
};
