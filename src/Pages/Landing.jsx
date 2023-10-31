import React from "react";
import { motion } from "framer-motion";
const Landing = () => {
  return (
    <>
      <code>
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          exit={{ x: "-100vw" }}
          className="Page landing"
        >
          <motion.h1
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, type: "spring" }}
            className="flex-center"
          >
            <div className="landing-title">
              <h1>
                Hi, Interactive Cares!
                <br /> This is
                <br />
                Nuren Shams
              </h1>
            </div>
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, type: "spring" }}
            className="landing-para"
          >
            I have tried adhere to the core requirements of technologies as much
            as possible. So,I did not use any CSS framework. But have installed
            two more packages, outside of core React js packages. I have used
            Swiper.js for slider and Framer motion for animations. Did what i
            could in three days. So, could not yet make it responsive.
          </motion.h3>
        </motion.div>
      </code>
    </>
  );
};

export default Landing;
