import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useValidateJwtMutation } from "../services/authApiSlice";
import { loginUser } from "../authSlice";

const OnLoad = () => {
  const mountedRef = useRef(false);
  const dispatch = useDispatch();
  const [validateJWT, { data, isSuccess, isLoading }] =
    useValidateJwtMutation();
  const onLoad = async () => {
    await validateJWT({});
  };
  useEffect(() => {
    if (!mountedRef.current) {
      onLoad();
    }
    if (isSuccess) {
      dispatch(loginUser(data));
    }
    mountedRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  // Defer mounting until we make api request
  if (isLoading || !mountedRef.current) {
    return <></>;
  }

  return <Outlet />;
};

export default OnLoad;
