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
          duration: 0.3,
          delay: 0.2 * i,
        },
      }));
    }
  }, [inView, controls]);

  return (
    <div className="grid place-items-center">
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => {
          return (
            <motion.div
              variants={variants}
              ref={ref}
              initial="hidden"
              custom={index}
              animate={controls}
              whileTap="tap"
              className="bg-gray-100 rounded-xl first:bg-mesaa-proj-background bg-no-repeat bg-cover lg:first:row-span-2 even:bg-ndd-proj-background last:bg-sup-proj-background cursor-pointer object-contain"
            >
              <Link key={index} href={project.link}>
                <a target="_blank" rel="noreferrer">
                  <div className="h-full bg-white bg-opacity-80 p-5 flex flex-col items-center justify-center">
                    <h3 className="break-all">
                      <span className="border-b-4 border-blue-500 pb-1">
                        {project.name}
                      </span>
                    </h3>

                    <p className="mt-7 bg-gray-100 p-2 font-gilroySemiBold flex flex-wrap text-lg rounded-lg ">
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
