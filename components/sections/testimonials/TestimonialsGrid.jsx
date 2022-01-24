import React from "react";
import testimonials from "../../../utils/testimonials";
import { motion } from "framer-motion";

const variants = {
  initial: {
    scale: 1,
    rotate: 0,
  },
};

const TestimonialsGrid = () => {
  return (
    <div className="grid place-items-center">
      <div className="grid grid-cols-1 gap-16 mx-5 md:mx-10 lg:mx-36">
        {testimonials.map((testimonial, index) => {
          return (
            <div
              key={index}
              className="p-5 relative bg-white shadow-lg max-w-[960px] hover:scale-105 lg:hover:skew-x-1 duration-200 ease-in-out"
            >
              <div className="top left"></div>
              {/* <div className="top right"></div> */}
              <div className="bottom right"></div>
              {/* <div className="bottom left"></div> */}
              <blockquote className="font-gilroySemiBold italic testimonial text-gray-500">
                <span className="break-normal">{testimonial.message}</span>
                <cite className="font-gilroySemiBold">
                  <span className="text-black break-normal">
                    {testimonial.name},
                  </span>{" "}
                  <span className="text-blue-500 break-normal">
                    {testimonial.designation}
                  </span>
                </cite>
              </blockquote>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialsGrid;
