import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../database/supabase";

const PrivateRoutes = () => {
  let auth = useAuth();
  return auth ? <Outlet /> : <Navigate to={"/SignIn"} />;
};

export default PrivateRoutes;
