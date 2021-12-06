import React, { useEffect } from "react";
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
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => {
          return (
            <motion.div
              variants={variants}
              initial="hidden"
              custom={index}
              animate={controls}
              whileTap="tap"
              className="rounded-xl lg:first:row-span-2 cursor-pointer shadow-xl border-2 border-blue-800"
            >
              <Link key={index} href={project.link}>
                <a target="_blank" rel="noreferrer">
                  <div className="h-full  p-5 flex flex-col items-center justify-center">
                    <h3 className="break-all flex justify-center items-center">
                      <span className="mr-2">{project.icon}</span>
                      <span className="border-b-4 border-blue-500 pb-1">
                        {project.name}
                      </span>
                    </h3>

                    <p className="mt-7 bg-gray-100 p-3 font-gilroySemiBold flex flex-wrap text-lg">
                      {project.description}
                    </p>
                  </div>
                </a>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGrid;
