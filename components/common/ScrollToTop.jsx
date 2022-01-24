import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const topIcon = (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 11l7-7 7 7M5 19l7-7 7 7"
    ></path>
  </svg>
);

const variants = {
  tap: {
    y: "2px",
  },
};

const ScrollToTop = () => {
  const [scrollOn, setScrollOn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const verticalScrollOn = window.scrollY > 100;

    if (verticalScrollOn) {
      setScrollOn(true);
    } else {
      setScrollOn(false);
    }
  };

  const handleClick = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  if (scrollOn) {
    return (
      <motion.div
        variants={variants}
        whileTap="tap"
        onClick={() => handleClick()}
        className="fixed bottom-3 right-3 p-4 bg-blue-500 rounded-full text-white flex justify-center items-center shadow-md cursor-pointer"
      >
        <span>{topIcon}</span>
      </motion.div>
    );
  } else {
    return null;
  }
};

export default ScrollToTop;
