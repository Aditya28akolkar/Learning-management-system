import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { useSelector } from "react-redux";

function ReviewPage() {
  const [latestReview, setLatestReview] = useState([]);
  const { allReview } = useSelector((state) => state.review);

  useEffect(() => {
    setLatestReview(allReview.slice(0, 6)); // only first 6 reviews
  }, [allReview]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Heading */}
      <h1 className="md:text-[42px] text-[28px] font-bold text-gray-800 text-center mt-10 px-5">
        Real Reviews from Real Learners
      </h1>

      {/* Subheading */}
      <p className="lg:w-[50%] md:w-[75%] w-[90%] text-[16px] text-gray-600 text-center mt-4 mb-10 leading-relaxed">
        Discover how our Virtual Courses are transforming learning experiences
        through real feedback from students and professionals worldwide.
      </p>

      {/* Review Cards Grid */}
      <div
        className="
          w-full min-h-[100vh] 
          flex flex-wrap justify-center gap-8 
          lg:px-12 md:px-8 px-4 pb-12
        "
      >
        {latestReview.map((item, index) => (
          <ReviewCard
            key={index}
            rating={item.rating}
            image={item.user.photoUrl}
            text={item.comment}
            name={item.user.name}
            role={item.user.role}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewPage;
