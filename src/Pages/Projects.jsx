import React from "react";
import { motion } from "framer-motion";
import Slider from "../Components/Slider";
import demoData from "../../demoData.json";

const Projects = () => {
  const data = demoData.projects;
  return (
    <>
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        exit={{ x: "-100vw" }}
        className="Page projects"
      >
        <div className="flex-center ">
          <h1 className="project-title">Projects</h1>
        </div>
        <div className="slider">
          <Slider projectsData={data} />
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
