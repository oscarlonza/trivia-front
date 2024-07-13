import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import RedirectRoute from "./utils/RedirectRoute";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/register"
          element={<RedirectRoute element={<Register />} />}
        />
        <Route
          path="/login"
          element={<RedirectRoute element={<Login />} />}
        />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<h1>Hola</h1>} />}
        />
        <Route
          path="/*"
          element={<h1>404</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import RedirectRoute from "./utils/RedirectRoute";
import Score from "./pages/Score"

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/register"
          element={<RedirectRoute element={<Register />} />}
        />
        <Route
          path="/login"
          element={<RedirectRoute element={<Login />} />}
        />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<h1>Hola</h1>} />}
        />
        <Route
          path="/*"
          element={<h1>404</h1>}
        />
        <Route path="/score" element={<Score/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
