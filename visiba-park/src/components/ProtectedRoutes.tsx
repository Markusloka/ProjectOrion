import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../database/supabase";

const PrivateRoutes = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/Signin" />;
};

export default PrivateRoutes;
