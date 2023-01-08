import store from "../app/store"
import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useGetConnectionsQuery } from 'features/connections/services/connectionsApiSlice'
import { useRemoveConnectionMutation } from "features/connections/services/connectionsApiSlice";
import { getConnections, removeConnection } from 'features/connections/connectionsSlice';

const TestComponent = () => {
    const dispatch = useDispatch();
    // const { data, isSuccess } = useGetConnectionsQuery(1);
    const [removeConnection, { data, isSuccess, error }] = useRemoveConnectionMutation();
    const handleRemoveConnection = (id) => {
        removeConnection(id)
    }




    useEffect(() => {
        if (isSuccess) {
            dispatch(removeConnection(data))
            console.log(data);
        }
    }, [isSuccess])
    return (
        <div>
            <button onClick={() => handleRemoveConnection(1)}>Delete connection</button>
        </div>
    )
}

export default TestComponent;
