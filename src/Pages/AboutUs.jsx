import React from "react";
import { motion } from "framer-motion";
import demoData from "../../demoData.json";

const AboutUs = () => {
  return (
    <>
      <motion.div
        initial={{ y: "-100vw", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transitSion={{ duration: 0.3, type: "spring" }}
        exit={{ y: "100vw" }}
        className="Page about"
      >
        <motion.h1
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transitSion={{ duration: 0.9, delay: 0.3, type: "spring" }}
          className="about-content"
        >
          <div className="">
            <h1>{demoData.about.title}</h1>
            <p>{demoData.about.content}</p>
          </div>
        </motion.h1>
      </motion.div>
    </>
  );
};

export default AboutUs;
