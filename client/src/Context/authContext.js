import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post("https://www.server.com/api/auth/login/", inputs);
      setCurrentUser(res.data);
    } catch (error) {
      // Handle login error
      console.error("Login error:", error);
    }
  };

  const logout = async (inputs) => {
    try {
      await axios.post("https://www.server.com/api/auth/logout/");
      setCurrentUser(null);
      // Clear the user data from localStorage
      localStorage.removeItem("user");
    } catch (error) {
      // Handle logout error
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    const userToStore = {
      id: currentUser?.id,
      name: currentUser?.name,
      // Add other necessary properties
    };
    localStorage.setItem("user", JSON.stringify(userToStore));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};