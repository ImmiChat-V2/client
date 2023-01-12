import { ConnectionUserInfo } from "../models/Connections.model";

export const removeConnectionFromList = (arr:ConnectionUserInfo[], id:number) => {
    const output = arr.filter(connection => connection.id !== id); 
    return output; 
}
