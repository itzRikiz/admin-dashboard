import React, { Suspense } from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import { SidebarProvider } from "./contexts/SidebarContext"
import { AuthProvider, useAuth } from "./contexts/AuthContext"
import Layout from "./components/Layout"
import { routes, authRoutes } from "./routes"

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? children : <Navigate to="/login" />
}

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <AuthProvider>
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {authRoutes.map((route) => (
                  <Route key={route.path} path={route.path} element={<route.element />} />
                ))}
                <Route
                  path="/*"
                  element={
                    <ProtectedRoute>
                      <Layout>
                        <Routes>
                          {routes.map((route) => (
                            <Route key={route.path} path={route.path} element={<route.element />} />
                          ))}
                        </Routes>
                      </Layout>
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Suspense>
          </Router>
        </AuthProvider>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App

