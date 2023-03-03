import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Sign_in";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Signin />} path="/Signin" />
    </Routes>
  );
}

export default App;
