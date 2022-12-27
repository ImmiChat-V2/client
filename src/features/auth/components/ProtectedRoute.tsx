import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../authSlice";

type ProtectedRouteProps = {
  readonly isProtected: boolean;
  readonly redirectPath: string;
};

const ProtectedRoute = ({ isProtected, redirectPath }: ProtectedRouteProps) => {
  const user = useSelector(getCurrentUser);
  console.log(user);

  if ((isProtected && !user) || (!isProtected && user)) {
    return <Navigate to={redirectPath} />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
