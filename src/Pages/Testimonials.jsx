import React from "react";
import { motion } from "framer-motion";
import TestiSlider from "../Components/TestiSlider";

const Testimonials = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        exit={{ x: "-100vw" }}
        className="Page"
      >
        <TestiSlider />
      </motion.div>
    </>
  );
};

export default Testimonials;
