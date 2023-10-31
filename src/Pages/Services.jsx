import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import demoData from "../../demoData.json";

const Services = () => {
  const data = demoData.services;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        exit={{ x: "-100vw" }}
        className=" services"
      >
        <motion.section
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
          exit={{ opacity: 0 }}
          className="service-content"
        >
          {data.map((d, index) => (
            <div
              key={index}
              className={` ${
                index % 2 === 0 ? "service-section" : "service-section2"
              }`}
            >
              <div className="service-title">
                <h1>{d.title}</h1>
                <p>{d.content}</p>
              </div>

              <img src={d.image} />
            </div>
          ))}
        </motion.section>
      </motion.div>
    </>
  );
};

export default Services;

{
  /* className={`card ${index % 2 === 0 && "large-card"}`} */
}
