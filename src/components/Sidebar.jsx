import React from "react"
import { NavLink } from "react-router-dom"
import { useSidebar } from "../contexts/SidebarContext"
import { useTheme } from "../contexts/ThemeContext"
import { FaTachometerAlt, FaUsers, FaShoppingCart, FaChartBar, FaUser, FaChevronLeft } from "react-icons/fa"
import { routes } from "../routes"

const icons = {
  FaTachometerAlt,
  FaUsers,
  FaShoppingCart,
  FaChartBar,
  FaUser,
}

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar()
  const { colors } = useTheme()

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } md:hidden`}
        onClick={toggleSidebar}
      ></div>
      <nav
        className={`fixed top-0 left-0 h-full w-64 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${colors.cardBg} ${colors.text} md:translate-x-0 z-30 shadow-lg rounded-r-lg`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Admin Dashboard</h2>
              {/* Show/Hide button for tablet and larger screens */}
              <button
                onClick={toggleSidebar}
                className="hidden md:flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-700 transition-colors duration-200"
              >
                <FaChevronLeft
                  className={`transform transition-transform duration-300 ${isOpen ? "" : "rotate-180"}`}
                />
              </button>
            </div>
            <ul className="space-y-2">
              {routes.map((route) => {
                const Icon = icons[route.icon]
                return (
                  <li key={route.path}>
                    <NavLink
                      to={route.path}
                      className={({ isActive }) =>
                        `flex items-center p-3 rounded-lg transition-colors duration-200 ${
                          isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700 hover:text-white"
                        }`
                      }
                      onClick={() => {
                        if (window.innerWidth < 768) {
                          toggleSidebar()
                        }
                      }}
                    >
                      {Icon && <Icon className="mr-3 text-xl" />}
                      <span className="font-medium">{route.label}</span>
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar

