import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.jpg"; // replace with actual path

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 rounded-lg border border-gray-600"
            />
            <h2 className="text-2xl font-bold text-white">Virtual Courses</h2>
          </div>
          <p className="text-sm leading-relaxed">
            AI-powered learning platform to help you grow smarter. Learn anything,
            anytime, anywhere with our expert-designed courses.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li
              className="hover:text-white cursor-pointer transition"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="hover:text-white cursor-pointer transition"
              onClick={() => navigate("/allcourses")}
            >
              Courses
            </li>
            <li
              className="hover:text-white cursor-pointer transition"
              onClick={() => navigate("/login")}
            >
              Login
            </li>
            <li
              className="hover:text-white cursor-pointer transition"
              onClick={() => navigate("/profile")}
            >
              My Profile
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Explore Categories</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">Web Development</li>
            <li className="hover:text-white transition">AI / ML</li>
            <li className="hover:text-white transition">Data Science</li>
            <li className="hover:text-white transition">UI / UX Design</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} <span className="text-white font-semibold">LearnAI</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
