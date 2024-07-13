import { jwtDecode } from "jwt-decode";

const isAuthenticated = () => {
  const token = localStorage.getItem('user');
  if (!token) {
    return false;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};

export default isAuthenticated;