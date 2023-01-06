import { createSlice } from "@reduxjs/toolkit";
import { BaseConnectionModel } from "./models/Connections.model";

type initialStateType = {
    connections: BaseConnectionModel[] | null;
}

const initialState:initialStateType = {
    connections : null
}

const connectionSlice = createSlice({
    name: "connections",
    initialState: initialState,
    reducers: {
        
    }
})