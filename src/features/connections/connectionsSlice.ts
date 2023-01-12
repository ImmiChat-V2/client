import { createSlice } from "@reduxjs/toolkit";
import { ConnectionUserInfo } from "./models/Connections.model";

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
      const newIncoming = state.incoming.filter(
        (connection) => connection.id !== senderId
      );
      state.incoming = newIncoming;
      state.connected.push(acceptedConnectionInfo);
    },
  },
});

export const { handleGetConnections, handleAcceptConnection } =
  connectionSlice.actions;
export default connectionSlice.reducer;

export const getActiveConnections = (state: any) => state.connected;
export const getIncomingConnections = (state: any) => state.incoming;
export const getOutgoingConnections = (state: any) => state.outgoing;
