import React from "react";
import testimonials from "../../../utils/testimonials";
import { motion } from "framer-motion";

const variants = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.1,
    rotate: -1,
  },
};

const TestimonialsGrid = () => {
  return (
    <div className="grid place-items-center">
      <div className="grid grid-cols-1 gap-16 mx-10 lg:mx-36">
        {testimonials.map((testimonial, index) => {
          return (
            <motion.div
              key={index}
              variants={variants}
              initial="initial"
              whileHover="hover"
              className="p-5 relative bg-white shadow-lg"
            >
              <div className="top left"></div>
              {/* <div className="top right"></div> */}
              <div className="bottom right"></div>
              {/* <div className="bottom left"></div> */}
              <blockquote className="font-gilroySemiBold italic testimonial text-gray-500">
                {testimonial.message}
                <cite className="font-gilroySemiBold">
                  <span className="text-black">{testimonial.name},</span>{" "}
                  <span className="text-blue-500">
                    {testimonial.designation}
                  </span>
                </cite>
              </blockquote>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialsGrid;
