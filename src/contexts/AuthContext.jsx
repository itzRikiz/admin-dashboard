import React, { createContext, useState, useContext } from "react"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = (email, password) => {
    // Implement your login logic here
    setIsAuthenticated(true)
  }

  const signup = (email, password) => {
    // Implement your signup logic here
    setIsAuthenticated(true)
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  return <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>{children}</AuthContext.Provider>
}

