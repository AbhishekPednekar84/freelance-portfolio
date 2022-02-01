import React from "react";
import TestimonialsGrid from "./TestimonialsGrid";

const Testimonials = () => {
  return (
    <div className="bg-gray-50 mt-20 lg:mt-0 relative ">
      <div className="section-tilt-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="pt-24 pb-20">
        <h2 className="pb-12 lg:pb-20 text-center">
          <span className="pb-2 border-b-4 border-blue-500">Cl</span>ient Speak
        </h2>
        <TestimonialsGrid />
      </div>
    </div>
  );
};

export default Testimonials;
