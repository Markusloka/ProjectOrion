import { Navigate, Outlet } from "react-router-dom";
import Signin from "../pages/Sign_in";

const PrivateRoutes = () => {
  let auth = { provider_token: false };
  return auth.provider_token ? <Outlet /> : <Navigate to="/Signin" />;
};

export default PrivateRoutes;
