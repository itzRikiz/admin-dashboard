import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "../contexts/ThemeContext";

const data = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 2780 },
  { name: "May", revenue: 1890 },
  { name: "Jun", revenue: 2390 },
  { name: "Jul", revenue: 3490 },
];

const LineChartComponent = () => {
  const { isDarkMode, colors } = useTheme();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke={isDarkMode ? "#ffffff20" : "#00000020"}
        />
        <XAxis dataKey="name" stroke={colors.text} />
        <YAxis stroke={colors.text} />
        <Tooltip
          contentStyle={{
            backgroundColor: isDarkMode ? "#1a2234" : "#fff",
            border: "none",
          }}
          labelStyle={{ color: isDarkMode ? "#fff" : "#000" }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          strokeWidth={2}
          dot={{ strokeWidth: 2 }}
          animationBegin={0}
          animationDuration={1500}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
