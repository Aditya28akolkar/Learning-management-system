import React from "react";
import { SiViaplay } from "react-icons/si";
import { TbDeviceDesktopAnalytics, TbBrandOpenai } from "react-icons/tb";
import { LiaUikit } from "react-icons/lia";
import { MdAppShortcut } from "react-icons/md";
import { FaHackerrank } from "react-icons/fa";
import { SiGoogledataproc, SiOpenaigym } from "react-icons/si";
import { BsClipboardDataFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ExploreCourses() {
  const navigate = useNavigate();

  const categories = [
    { icon: <TbDeviceDesktopAnalytics className="w-10 h-10" />, label: "Web Development", bg: "bg-[#fbd9fb]" },
    { icon: <LiaUikit className="w-10 h-10" />, label: "UI/UX Designing", bg: "bg-[#d9fbe0]" },
    { icon: <MdAppShortcut className="w-10 h-10" />, label: "App Development", bg: "bg-[#fcb9c8]" },
    { icon: <FaHackerrank className="w-10 h-10" />, label: "Ethical Hacking", bg: "bg-[#fbd9fb]" },
    { icon: <TbBrandOpenai className="w-10 h-10" />, label: "AI / ML", bg: "bg-[#d9fbe0]" },
    { icon: <SiGoogledataproc className="w-10 h-10" />, label: "Data Science", bg: "bg-[#fcb9c8]" },
    { icon: <BsClipboardDataFill className="w-10 h-10" />, label: "Data Analytics", bg: "bg-[#fbd9fb]" },
    { icon: <SiOpenaigym className="w-10 h-10" />, label: "AI Tools", bg: "bg-[#d9fbe0]" },
  ];

  return (
    <div className="w-full min-h-[50vh] flex flex-col lg:flex-row items-center justify-between gap-8 px-6 lg:px-16 py-12">
      
      {/* Left Section */}
      <div className="w-full lg:w-[350px] flex flex-col items-start justify-center gap-4">
        <h2 className="text-4xl font-extrabold leading-snug">
          Explore <br />
          <span className="bg-gradient-to-r from-[#19535F] to-[#0B7A75] bg-clip-text text-transparent">
            Our Courses
          </span>
        </h2>
        <p className="text-gray-600 text-[16px] leading-relaxed">
          Discover a variety of curated courses to elevate your skills, from tech
          to business, designed for learners at all levels.
        </p>
        <button
          className="mt-6 px-6 py-3 rounded-xl text-[16px] font-medium flex items-center gap-2
                     bg-gradient-to-r from-[#19535F] to-[#0B7A75] text-white shadow-md hover:shadow-lg 
                     hover:scale-105 transition-all duration-300"
          onClick={() => navigate("/allcourses")}
        >
          Explore Courses <SiViaplay className="w-6 h-6" />
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[720px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-3 cursor-pointer group"
          >
            <div
              className={`w-[100px] h-[100px] ${cat.bg} rounded-xl flex items-center justify-center 
                          shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}
            >
              <span className="text-gray-700">{cat.icon}</span>
            </div>
            <span className="text-sm font-medium text-gray-800 group-hover:text-[#0B7A75] transition">
              {cat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreCourses;
