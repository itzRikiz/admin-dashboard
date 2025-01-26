import React from "react"
import { NavLink } from "react-router-dom"
import { useSidebar } from "../contexts/SidebarContext"
import { useTheme } from "../contexts/ThemeContext"
import { FaTachometerAlt, FaUsers, FaShoppingCart, FaChartBar, FaUser } from "react-icons/fa"
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
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
          <ul>
            {routes.map((route) => {
              const Icon = icons[route.icon]
              return (
                <li key={route.path} className="mb-2">
                  <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-colors duration-200 ${
                        isActive ? `${colors.hover} font-semibold` : colors.hover
                      }`
                    }
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        toggleSidebar()
                      }
                    }}
                  >
                    {Icon && <Icon className="mr-2" />}
                    <span>{route.label}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Sidebar

