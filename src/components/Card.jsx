import React from "react"
import { useTheme } from "../contexts/ThemeContext"

const Card = ({ icon: Icon, title, value }) => {
  const { colors } = useTheme()

  return (
    <div
      className={`card p-4 rounded-lg ${colors.cardBg} ${colors.text} transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${
        colors.isDarkMode ? "" : "shadow-md hover:shadow-lg"
      }`}
    >
      <div className="flex items-center">
        <div className={`text-3xl ${colors.text} mr-4`}>
          <Icon />
        </div>
        <div>
          <h3 className={`text-sm font-medium ${colors.text} opacity-75`}>{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  )
}

export default Card

