import React from "react";
import { MdCastForEducation } from "react-icons/md";
import { SiOpenaccess } from "react-icons/si";
import { FaSackDollar } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

function Logos() {
  const features = [
    { icon: <MdCastForEducation className="w-8 h-8" />, text: "20k+ Online Courses" },
    { icon: <SiOpenaccess className="w-7 h-7" />, text: "Lifetime Access" },
    { icon: <FaSackDollar className="w-7 h-7" />, text: "Value For Money" },
    { icon: <BiSupport className="w-8 h-8" />, text: "Lifetime Support" },
    { icon: <FaUsers className="w-8 h-8" />, text: "Community Support" },
  ];

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-6 md:gap-8 py-10 md:py-14 bg-gradient-to-r from-[#e6f2f5] via-white to-[#e6f2f5]">
      {features.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer"
        >
          <div className="text-[#03394b]">{item.icon}</div>
          <span className="text-[#03394b] font-medium">{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export default Logos;
