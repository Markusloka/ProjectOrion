import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/ProtectedRoutes";
import Home from "./pages/Home";
import Signin from "./pages/Sign_in";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/Signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
