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

type ActiveConnectionInfo = {
  id: number;
  firstName: string;
  lastName: string;
  profilePic: string;
};
type ActiveConnectionData = {
  id: number;
  connected: boolean;
  connectionInfo: ActiveConnectionInfo;
};

export type ActiveConnectionsModel = {
  data: ActiveConnectionData[];
};
