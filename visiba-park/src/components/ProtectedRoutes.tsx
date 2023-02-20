import { Navigate, Outlet } from "react-router-dom";
import supabase from "../database/supabase";

const PrivateRoutes = () => {
  const auth = supabase.auth.getUser();
  return auth ? <Navigate to="/Signin" /> : <Outlet />;
};

export default PrivateRoutes;
