/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email, password) => {
    // Implement your login logic here
    try {
      const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Signin Failed");
      }
      const data = await response.json();
      setIsAuthenticated(true);
      return data;
    } catch (error) {
      console.error("Error during Login:", error);
      throw error;
    }
  };

  const signup = async (email, password, name) => {
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });
      if (!response.ok) {
        throw new Error("Signup Failed");
      }
      const data = await response.json();
      console.log("Signup successful:", data);

      setIsAuthenticated(true); // Set user as authenticated
      return data;
    } catch (error) {
      console.error("Error during signup:", error);
      throw error;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
