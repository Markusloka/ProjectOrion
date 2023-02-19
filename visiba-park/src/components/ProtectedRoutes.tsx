import { Outlet } from "react-router-dom";
import Signin from "../pages/Sign_in";

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Signin />;
};

export default ProtectedRoutes;
