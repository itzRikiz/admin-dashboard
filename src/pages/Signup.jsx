import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate, Link } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext"

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signup } = useAuth()
  const navigate = useNavigate()
  const { colors } = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password)
    navigate("/")
  }

  return (
    <div className={`min-h-screen flex items-center justify-center ${colors.background}`}>
      <div
        className={`max-w-md w-full space-y-8 p-10 rounded-xl ${colors.cardBg} ${colors.isDarkMode ? "" : "shadow-md"}`}
      >
        <h2 className={`mt-6 text-center text-3xl font-extrabold ${colors.text}`}>Create your account</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  colors.isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  colors.isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                colors.isDarkMode ? "bg-indigo-600 hover:bg-indigo-700" : "bg-blue-600 hover:bg-blue-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link
            to="/login"
            className={`font-medium ${colors.isDarkMode ? "text-indigo-400" : "text-blue-600"} hover:underline`}
          >
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup

