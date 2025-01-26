import React from "react"
import { useTheme } from "../contexts/ThemeContext"
import { useSidebar } from "../contexts/SidebarContext"
import Sidebar from "./Sidebar"
import Header from "./Header"

const Layout = ({ children }) => {
  const { colors } = useTheme()
  const { isOpen } = useSidebar()

  return (
    <div className={`flex min-h-screen ${colors.background} ${colors.text}`}>
      <Sidebar />
      <div className={`flex-1 transition-all duration-300 ease-in-out ${isOpen ? "md:ml-64" : ""}`}>
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </div>
  )
}

export default Layout

