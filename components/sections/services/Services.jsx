import React from "react";

// Component imports
import Card from "./Card";

const Services = () => {
  return (
    <div className="bg-gray-100 mt-20 mb-20 lg:mt-0 relative">
      <div className="section-tilt-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="pt-24 pb-32">
        <h2 className="pb-12 lg:pb-20 text-center">
          <span className="pb-2 border-b-4 border-blue-500">Wh</span>at I offer
        </h2>
        <Card />
      </div>
      <div class="section-tilt-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Services;
