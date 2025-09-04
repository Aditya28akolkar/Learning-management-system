import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
import { useSelector } from "react-redux";
import { SiViaplay } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Cardspage() {
  const [popularCourses, setPopularCourses] = useState([]);
  const { courseData } = useSelector((state) => state.course);
  const navigate = useNavigate();

  useEffect(() => {
    setPopularCourses(courseData.slice(0, 6));
  }, [courseData]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {/* Heading */}
      <h1 className="md:text-[42px] text-[30px] font-extrabold text-center mt-10 px-5 bg-gradient-to-r from-[#19535F] to-[#0B7A75] bg-clip-text text-transparent">
        Our Popular Courses
      </h1>

      {/* Subtitle */}
      <p className="lg:w-1/2 md:w-4/5 text-[16px] text-gray-600 text-center mt-4 mb-12 px-6 leading-relaxed">
        Explore top-rated courses designed to boost your skills, enhance careers,
        and unlock opportunities in tech, AI, business, and beyond.
      </p>

      {/* Courses Grid */}
      <div
        className="w-full min-h-[100vh] flex flex-wrap items-center justify-center gap-8 
        lg:px-16 md:px-10 px-5 mb-20"
      >
        {popularCourses.map((item, index) => (
          <Card
            key={index}
            id={item._id}
            thumbnail={item.thumbnail}
            title={item.title}
            price={item.price}
            category={item.category}
            reviews={item.reviews}
          />
        ))}
      </div>

      {/* View All Button */}
      <button
        className="absolute right-[9%] bottom-4 px-6 py-3 rounded-xl text-[16px] font-medium flex items-center gap-2
                   bg-gradient-to-r from-[#19535F] to-[#0B7A75] text-white shadow-md hover:shadow-lg 
                   hover:scale-105 transition-all duration-300"
        onClick={() => navigate("/allcourses")}
      >
        View all Courses
        <SiViaplay className="w-6 h-6" />
      </button>
    </div>
  );
}

export default Cardspage;
