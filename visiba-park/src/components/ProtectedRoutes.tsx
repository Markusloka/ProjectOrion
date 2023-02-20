import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const PrivateRoutes = () => {
  let auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/Signin" />;
};

export default PrivateRoutes;
