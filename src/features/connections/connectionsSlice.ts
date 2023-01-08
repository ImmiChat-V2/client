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
    getConnections: (state, action) => {
      const { data } = action.payload;
      const connected = [];
      const incoming = [];
      const outgoing = [];
      for (let connection of data) {
        if (!connection.connected && connection.status === "sender") {
          outgoing.push(connection.connectionInfo);
        } else if (!connection.connected && connection.status === "receiver") {
          incoming.push(connection.connectionInfo);
        } else connected.push(connection.connectionInfo);
      }
      state.connected = connected;
      state.incoming = incoming;
      state.outgoing = outgoing;
    },
  },
});

export const { getConnections } = connectionSlice.actions;
export default connectionSlice.reducer;

export const getActiveConnections = (state: any) => state.connected;
export const getIncomingConnections = (state: any) => state.incoming;
export const getOutgoingConnections = (state: any) => state.outgoing;
