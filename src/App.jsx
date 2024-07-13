import { BrowserRouter, Route, Routes } from "react-router-dom"
import EditProfile from "./pages/EditProfile"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

const App = (props) => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App