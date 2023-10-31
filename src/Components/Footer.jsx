import React from "react";
import FooterMenu from "./FooterMenu";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <footer className="footer-container">
          <div className="footer-box">
            <FooterMenu />
          </div>
          <div className="footer-box"></div>
          <div className="footer-box">
            <div className="social">
              <a>
                <AiFillFacebook />
              </a>
              <a>
                <AiFillTwitterSquare />
              </a>
              <a>
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
};

export default Footer;
