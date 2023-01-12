import { ConnectionUserInfo } from "../models/Connections.model";

export const removeConnectionFromList = (arr:ConnectionUserInfo[], id:number):ConnectionUserInfo[] => {
    const output = arr.filter(connection => connection.id !== id); 
    return output; 
}