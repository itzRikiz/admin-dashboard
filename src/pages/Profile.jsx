import { useTheme } from "../contexts/ThemeContext";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Profile = () => {
  const { colors } = useTheme();

  return (
    <div className={`${colors.background} ${colors.text} min-h-screen p-8`}>
      <div
        className={`max-w-4xl mx-auto ${colors.cardBg} rounded-lg shadow-lg p-8`}
      >
        <h2 className="text-3xl font-bold mb-8">User Profile</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="w-48 h-48 mx-auto bg-gray-300 rounded-full flex items-center justify-center text-6xl">
              <FaUser />
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Personal Information
                </h3>
                <p className="mb-2">
                  <FaUser className="inline mr-2" /> John Doe
                </p>
                <p className="mb-2">
                  <FaEnvelope className="inline mr-2" /> johndoe@example.com
                </p>
                <p className="mb-2">
                  <FaPhone className="inline mr-2" /> (123) 456-7890
                </p>
                <p>
                  <FaMapMarkerAlt className="inline mr-2" /> New York, NY
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Account Details</h3>
                <p className="mb-2">Member since: January 1, 2023</p>
                <p className="mb-2">Last login: May 15, 2023</p>
                <p>Account type: Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
