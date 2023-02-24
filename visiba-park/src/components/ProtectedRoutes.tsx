import { Navigate, Outlet } from "react-router-dom";
import supabase from "../database/supabase";

const PrivateRoutes = () => {
  const auth = supabase.auth.getSession();
  return auth ? <Outlet /> : <Navigate to={"/SignIn"} />;
};

export default PrivateRoutes;
