import { Navigate, Outlet } from "react-router-dom";
import supabase from "../database/supabase";

const PrivateRoutes = () => {
  const auth = supabase.auth.getUser;
  return auth ? <Outlet /> : <Navigate to="/Signin" />;
};

export default PrivateRoutes;
