import React, { useState } from "react"
import { useTheme } from "../contexts/ThemeContext"
import { useSidebar } from "../contexts/SidebarContext"
import { useAuth } from "../contexts/AuthContext"
import { FaBars, FaSun, FaMoon, FaUser, FaSignOutAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const { isDarkMode, toggleTheme, colors } = useTheme()
  const { isOpen, toggleSidebar } = useSidebar()
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  const handleProfile = () => {
    navigate("/profile")
    setIsDropdownOpen(false)
  }

  return (
    <header
      className={`flex justify-between items-center p-6 ${colors.cardBg} ${colors.text} shadow-md rounded-lg m-4`}
    >
      <div className="flex items-center">
        {!isOpen && (
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none md:hidden mr-4">
            <FaBars />
          </button>
        )}
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="text-2xl focus:outline-none">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center focus:outline-none"
          >
            <FaUser className="text-white" />
          </button>
          {isDropdownOpen && (
            <div
              className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ${colors.cardBg} ring-1 ring-black ring-opacity-5 z-50`}
            >
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button
                  onClick={handleProfile}
                  className={`block px-4 py-2 text-sm ${colors.text} ${colors.hover} w-full text-left`}
                  role="menuitem"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className={`block px-4 py-2 text-sm ${colors.text} ${colors.hover} w-full text-left`}
                  role="menuitem"
                >
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

