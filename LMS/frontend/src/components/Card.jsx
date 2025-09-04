import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ thumbnail, title, category, price, id, reviews }) => {
  const navigate = useNavigate();

  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1);
  };

  const avgRating = calculateAverageRating(reviews);

  return (
    <div
      className="relative max-w-sm w-full bg-white/70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-md border border-gray-200 
                 hover:shadow-2xl hover:-translate-y-2 hover:border-[#0B7A75]/50 transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/viewcourse/${id}`)}
    >
      {/* Thumbnail */}
      <div className="relative w-full h-48">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover rounded-t-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <span className="absolute top-3 left-3 bg-gradient-to-r from-[#19535F] to-[#0B7A75] text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-2 hover:text-[#19535F] transition-colors">
          {title}
        </h2>

        {/* Meta Info */}
        <div className="flex items-center justify-between mt-1">
          <span className="text-xl font-bold text-[#0B7A75]">
            ₹{price}
          </span>
          <span className="flex items-center gap-1 text-sm font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded-lg">
            <FaStar className="text-yellow-500" />
            {avgRating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
