import React, { useEffect } from "react";
import services from "../../../utils/services";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
};

const Card = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          delay: 0.5 * i,
        },
      }));
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 lg:gap-10 place-items-center"
    >
      {services.map((service, index) => {
        return (
          <motion.div
            key={index}
            custom={index}
            animate={controls}
            variants={variants}
            initial="hidden"
            className="section-card"
          >
            <div className="flex justify-center">
              <span className="w-12">{service.icon}</span>
            </div>
            <h3 className="py-4">{service.name}</h3>
            <p className="text-lg lg:text-xl font-gilroySemiBold">
              {service.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Card;
