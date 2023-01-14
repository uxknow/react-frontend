import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hook";

const PrivateRoute = () => {
  const auth = useAuth();
  return (
    //  auth ? <Outlet /> : <Navigate to="login" /> это основной код
    auth ? <Navigate to="login" /> : <Outlet />
  );
};

export default PrivateRoute;
