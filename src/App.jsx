import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import RedirectRoute from "./utils/RedirectRoute";
import Developer from "./pages/Developer";
import Score from "./pages/Score";
import EditProfile from "./pages/EditProfile"

const App = (props) => {

  console.log("version 2.0.0");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={<RedirectRoute element={<Register />} />}
        />
        <Route path="/login" element={<RedirectRoute element={<Login />} />} />
        <Route
          path="/developer"
          element={<RedirectRoute element={<Developer />} />}
        />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<h1>Hola</h1>} />}
        />

        <Route path="/score" element={<Score/>} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
