import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "../contexts/ThemeContext";

const data = [
  { name: "Jan", orders: 400 },
  { name: "Feb", orders: 300 },
  { name: "Mar", orders: 500 },
  { name: "Apr", orders: 278 },
  { name: "May", orders: 189 },
  { name: "Jun", orders: 239 },
  { name: "Jul", orders: 349 },
];

const BarChartComponent = () => {
  const { isDarkMode, colors } = useTheme();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
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
        <Bar
          dataKey="orders"
          fill="#8884d8"
          animationBegin={0}
          animationDuration={1500}
          animationEasing="ease-out"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
