import { createSlice } from "@reduxjs/toolkit";
import { ActiveConnectionsModel } from "./models/Connections.model";

type initialStateType = {
  connections: null | ActiveConnectionsModel;
};

const initialState: initialStateType = {
  connections: null,
};

const connectionSlice = createSlice({
  name: "connections",
  initialState: initialState,
  reducers: {
    getConnections: (state, action) => {
      const { data } = action.payload;
      return data;
    },
    removeConnections: (state, action) => {
        
    }
  },
});
