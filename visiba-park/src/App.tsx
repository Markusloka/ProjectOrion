import { Route , Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Sign_in"

function App() {
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Signin" element={<Signin/>} />
  </Routes>
}

export default App;