import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import demoData from "../../demoData.json";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

export default function TetsiSlider() {
  const testiData = demoData.testimonials;
  return (
    <>
      <div className="Testi-slider">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          <div>
            {testiData.map((data) => (
              <SwiperSlide>
                <motion.div
                  initial={{ x: "-100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
                  className="testi-content"
                >
                  <p>"{data.review}"</p>
                  <div>{data.name}</div>
                </motion.div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
}
