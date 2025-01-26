import { lazy } from "react"

const Dashboard = lazy(() => import("./pages/Dashboard"))
const Customers = lazy(() => import("./pages/Customers"))
const Orders = lazy(() => import("./pages/Orders"))
const Analytics = lazy(() => import("./pages/Analytics"))
const Profile = lazy(() => import("./pages/Profile"))
const Login = lazy(() => import("./pages/Login"))
const Signup = lazy(() => import("./pages/Signup"))

export const routes = [
  { path: "/", element: Dashboard, label: "Dashboard", icon: "FaTachometerAlt" },
  { path: "/customers", element: Customers, label: "Customers", icon: "FaUsers" },
  { path: "/orders", element: Orders, label: "Orders", icon: "FaShoppingCart" },
  { path: "/analytics", element: Analytics, label: "Analytics", icon: "FaChartBar" },
  { path: "/profile", element: Profile, label: "Profile", icon: "FaUser" },
]

export const authRoutes = [
  { path: "/login", element: Login },
  { path: "/signup", element: Signup },
]

