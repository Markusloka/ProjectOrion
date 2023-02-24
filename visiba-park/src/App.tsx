import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/ProtectedRoutes";
import Home from "./pages/Home";
import Signin from "./pages/Sign_in";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Home />} path="/" />
      </Route>
      <Route element={<Signin />} path="/Signin" />
    </Routes>
  );
}

export default App;
