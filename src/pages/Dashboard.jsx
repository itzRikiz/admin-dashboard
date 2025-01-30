import { useTheme } from "../contexts/ThemeContext";
import Card from "../components/Card";
import PieChartComponent from "../components/PieChartComponent";
import LineChartComponent from "../components/LineChartComponent";
import BarChartComponent from "../components/BarChartComponent";
import {
  FaUsers,
  FaShoppingCart,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";

const Dashboard = () => {
  const { colors } = useTheme();

  return (
    <div className={`dashboard ${colors.background} ${colors.text}`}>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card icon={FaUsers} title="Total Customers" value="1,234" />
        <Card icon={FaShoppingCart} title="Total Orders" value="5,678" />
        <Card icon={FaMoneyBillWave} title="Revenue" value="$123,456" />
        <Card icon={FaChartLine} title="Growth" value="12.3%" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className={`p-6 rounded-lg ${colors.cardBg}`}>
          <h3 className="text-xl font-semibold mb-4">Sales Distribution</h3>
          <PieChartComponent />
        </div>
        <div className={`p-6 rounded-lg ${colors.cardBg}`}>
          <h3 className="text-xl font-semibold mb-4">Revenue Trend</h3>
          <LineChartComponent />
        </div>
      </div>
      <div className={`p-6 rounded-lg ${colors.cardBg}`}>
        <h3 className="text-xl font-semibold mb-4">Monthly Orders</h3>
        <BarChartComponent />
      </div>
    </div>
  );
};

export default Dashboard;
