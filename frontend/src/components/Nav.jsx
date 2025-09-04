import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { IoMdPerson } from "react-icons/io";
import { GiHamburgerMenu, GiSplitCross } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../redux/userSlice";

function Nav() {
  const [showHam, setShowHam] = useState(false);
  const [showPro, setShowPro] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  const handleLogout = async () => {
    try {
      await axios.get(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      dispatch(setUserData(null));
      toast.success("Logged out successfully");
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  return (
    <nav>
      {/* Top Navbar */}
      <div className="fixed top-0 w-full h-[70px] px-6 lg:px-12 flex items-center justify-between bg-black/30 backdrop-blur-md z-20 shadow-md">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-[55px] rounded-md border border-white cursor-pointer hover:scale-105 transition"
          onClick={() => navigate("/")}
        />

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-white">
          {/* User Avatar / Icon */}
          {!userData ? (
            <IoMdPerson
              className="w-10 h-10 p-2 rounded-full border border-gray-200 bg-black/60 cursor-pointer hover:bg-gray-700 transition"
              onClick={() => setShowPro((prev) => !prev)}
            />
          ) : (
            <div
              className="w-10 h-10 rounded-full overflow-hidden border border-gray-300 bg-black flex items-center justify-center text-lg cursor-pointer hover:scale-105 transition"
              onClick={() => setShowPro((prev) => !prev)}
            >
              {userData.photoUrl ? (
                <img
                  src={userData.photoUrl}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              ) : (
                userData?.name?.slice(0, 1).toUpperCase()
              )}
            </div>
          )}

          {/* Educator Dashboard */}
          {userData?.role === "educator" && (
            <button
              onClick={() => navigate("/dashboard")}
              className="px-4 py-2 rounded-lg bg-white/10 border border-white text-white hover:bg-white hover:text-black transition"
            >
              Dashboard
            </button>
          )}

          {/* Auth Buttons */}
          {!userData ? (
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 rounded-lg bg-white/10 border border-white text-white hover:bg-white hover:text-black transition"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <GiHamburgerMenu
          className="w-7 h-7 text-white lg:hidden cursor-pointer"
          onClick={() => setShowHam(true)}
        />
      </div>

      {/* Profile Dropdown (Desktop) */}
      {showPro && (
        <div className="absolute top-[80px] right-10 flex flex-col gap-2 bg-white rounded-lg shadow-lg p-3 z-30 text-sm font-medium">
          <span
            className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            My Profile
          </span>
          <span
            className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
            onClick={() => navigate("/enrolledcourses")}
          >
            My Courses
          </span>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/90 flex flex-col items-center justify-center gap-6 text-white text-lg z-40 transform ${
          showHam ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500`}
      >
        <GiSplitCross
          className="absolute top-6 right-6 w-8 h-8 cursor-pointer"
          onClick={() => setShowHam(false)}
        />

        <span
          className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white hover:text-black cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          My Profile
        </span>
        <span
          className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white hover:text-black cursor-pointer"
          onClick={() => navigate("/enrolledcourses")}
        >
          My Courses
        </span>

        {userData?.role === "educator" && (
          <span
            className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white hover:text-black cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </span>
        )}

        {!userData ? (
          <span
            className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white hover:text-black cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        ) : (
          <span
            className="px-6 py-3 rounded-lg bg-white hover:text-black text-black bg-white cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </span>
        )}
      </div>
    </nav>
  );
}

export default Nav;
