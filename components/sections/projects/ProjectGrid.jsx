import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "../../../utils/projects";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: {
    opacity: 0,
  },
  tap: {
    y: "2px",
  },
};

const ProjectGrid = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.5 * i,
        },
      }));
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="grid place-items-center">
      <div className="grid gap-14 lg:gap-24 grid-cols-1">
        {projects.map((project, index) => {
          return (
            <motion.div
              key={index}
              variants={variants}
              initial="hidden"
              custom={index}
              animate={controls}
              className="shadow-lg hover:shadow-2xl rounded-xl"
            >
              <div className="px-5 lg:px-8 flex flex-col lg:flex-row justify-center items-center bg-gray-200 py-10 lg:py-0 rounded-xl relative">
                <div className="h-2/3 lg:h-128 lg:w-2/3 mb-10 lg:mb-0 flex items-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    width="100%"
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="lg:w-1/3 flex flex-col items-center justify-center lg:pl-10">
                  <h4 className="break-all w-full flex justify-start items-center">
                    <span className="mr-2">{project.icon}</span>
                    <span>{project.name}</span>
                  </h4>

                  <p className="mt-7 bg-gray-100 p-3 font-gilroySemiBold flex flex-wrap text-lg border-l-4 border-blue-500">
                    {project.description}
                  </p>

                  <motion.button
                    variants={variants}
                    whileTap="tap"
                    onClick={() =>
                      window.open(project.link, "noopener,noreferrer")
                    }
                    className="px-3 py-2 border-2 uppercase bg-white border-blue-500 mt-10 text-blue-500 flex items-center justify-center font-gilroySemiBold rounded-lg hover:bg-blue-500 transition ease-in duration-500 hover:text-white"
                  >
                    See Website
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGrid;
