import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../database/supabase";

const PrivateRoutes = () => {
  const user = useAuth();
  return user ? <Outlet /> : <Navigate to="/Signin" />;
};

export default PrivateRoutes;
