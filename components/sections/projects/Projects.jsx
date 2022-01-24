import React from "react";

// Component imports
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  return (
    <div className="pb-12 md:pb-24 -mt-10 lg:-mt-5 mx-5 md:mx-24 mb-10">
      <h2 className="pb-12 lg:pb-20 text-center">
        <span className="pb-2 border-b-4 border-blue-500">Pa</span>st Projects
      </h2>

      <ProjectGrid />
    </div>
  );
};

export default Projects;
