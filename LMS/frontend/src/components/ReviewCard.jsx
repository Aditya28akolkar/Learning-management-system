import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewCard = ({ text, name, image, rating, role }) => {
  return (
    <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 max-w-sm w-full">
      
      {/* ⭐ Rating Stars */}
      <div className="flex items-center mb-4 text-yellow-400 text-base">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span key={i}>
              {i < rating ? <FaStar /> : <FaRegStar />}
            </span>
          ))}
      </div>

      {/* 💬 Review Text */}
      <p className="text-gray-600 text-[15px] leading-relaxed mb-6 italic">
        “{text}”
      </p>

      {/* 👤 Reviewer Info */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover shadow-md"
        />
        <div>
          <h4 className="font-semibold text-gray-800 text-sm">{name}</h4>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
