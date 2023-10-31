import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <>
      <div>
        <motion.div
          initial={{ y: "-100vw", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transitSion={{ duration: 0.3, type: "spring" }}
          exit={{ y: "100vw" }}
          className="Page contact"
        >
          <motion.div
            initial={{ x: "100vh", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transitSion={{ duration: 0.9, delay: 0.5, type: "spring" }}
            exit={{ y: "100vw" }}
            className="form-container"
          >
            <h1 className="flex-center">Contact Us</h1>

            <form>
              <div className="form-element">
                <label className="flex-center" for="name">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                />
              </div>
              <div className="form-element">
                <label className="flex-center" for="email">
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your email"
                />
              </div>
              <div className="form-element">
                <label className="flex-center" for="message">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="form-element flex-center">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;
