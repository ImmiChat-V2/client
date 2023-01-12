import { createSlice } from "@reduxjs/toolkit";
import { ConnectionUserInfo } from "./models/Connections.model";
import { removeConnectionFromList } from "./utils/connectionUtils";

type initialStateType = {
  connected: ConnectionUserInfo[];
  incoming: ConnectionUserInfo[];
  outgoing: ConnectionUserInfo[];
};

const initialState: initialStateType = {
  connected: [],
  incoming: [],
  outgoing: [],
};

const connectionSlice = createSlice({
  name: "connections",
  initialState: initialState,
  reducers: {
    handleGetConnections: (state, action) => {
      const { data } = action.payload;
      const [connectedArr, incomingArr, outgoingArr]: Array<
        ConnectionUserInfo[]
      > = [[], [], []];
      for (const { connected, status, connectionInfo } of data) {
        if (connected) {
          connectedArr.push(connectionInfo);
        } else if (status === "sender") {
          outgoingArr.push(connectionInfo);
        } else incomingArr.push(connectionInfo);
      }
      state.connected = connectedArr;
      state.incoming = incomingArr;
      state.outgoing = outgoingArr;
    },
    handleAcceptConnection: (state, action) => {
      const { senderId } = action.payload.data;
      const [acceptedConnectionInfo] = state.incoming.filter(
        (connection) => connection.id === senderId
      );
      const newIncoming = removeConnectionFromList(state.incoming, senderId);
      state.incoming = newIncoming;
      state.connected.push(acceptedConnectionInfo);
    },
    handleSendConnection: (state, action) => {
      const { data } = action.payload;
      state.outgoing.push(data);
    },
    handleRemoveConnection: (state, action) => {
      const { status, id } = action.payload.data;
      switch (status) {
        case "connected":
          const connectedArr = removeConnectionFromList(state.connected, id);
          state.connected = connectedArr;
          break;
        case "outgoing":
          const outgoingArr = removeConnectionFromList(state.outgoing, id);
          state.outgoing = outgoingArr;
          break;
        case "incoming":
          const incomingArr = removeConnectionFromList(state.incoming, id);
          state.incoming = incomingArr;
          break;
        default:
          break;
      }
    },
  },
});

export const {
  handleGetConnections,
  handleAcceptConnection,
  handleSendConnection,
  handleRemoveConnection,
} = connectionSlice.actions;
export default connectionSlice.reducer;

export const getActiveConnections = (state: any) => state.connected;
export const getIncomingConnections = (state: any) => state.incoming;
export const getOutgoingConnections = (state: any) => state.outgoing;
