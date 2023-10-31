import React from "react";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <>
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring" }}
        exit={{ x: "100vw" }}
        className="Page"
      >
        <h1>Page</h1>
      </motion.div>
    </>
  );
};

export default Clients;
