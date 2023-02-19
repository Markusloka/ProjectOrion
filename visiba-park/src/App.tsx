import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./pages/Home";
import Signin from "./pages/Sign_in";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/Signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
