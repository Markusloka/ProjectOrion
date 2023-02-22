import { useAuth } from "./Auth";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const auth = useAuth();
  return auth.user ? children : <Navigate to={"/SignIn"} />;
};

export default PrivateRoutes;
