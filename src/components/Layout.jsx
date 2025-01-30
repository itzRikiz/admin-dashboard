/* eslint-disable react/prop-types */
import { useTheme } from "../contexts/ThemeContext";
import { useSidebar } from "../contexts/SidebarContext";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  const { colors } = useTheme();
  const { isOpen } = useSidebar();

  return (
    <div className={`flex min-h-screen ${colors.background} ${colors.text}`}>
      <Sidebar />
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="relative z-10">
          {" "}
          {/* Increased z-index for header */}
          <Header />
        </div>
        {/* <main className={`flex justify-between items-center p-6 ${colors.cardBg} ${colors.text} shadow-md rounded-lg m-4`} > */}
        <main className="p-2">
          <div className="container mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
