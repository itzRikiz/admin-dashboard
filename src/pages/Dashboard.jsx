import React from "react"
import Card from "../components/Card"
import { FaUsers, FaShoppingCart, FaMoneyBillWave, FaChartLine } from "react-icons/fa"
import { useTheme } from "../contexts/ThemeContext"

const Dashboard = () => {
  const { isDarkMode } = useTheme()

  return (
    <div className="dashboard">
      <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card icon={FaUsers} title="Total Customers" value="1,234" />
        <Card icon={FaShoppingCart} title="Total Orders" value="5,678" />
        <Card icon={FaMoneyBillWave} title="Revenue" value="$123,456" />
        <Card icon={FaChartLine} title="Growth" value="12.3%" />
      </div>
    </div>
  )
}

export default Dashboard

