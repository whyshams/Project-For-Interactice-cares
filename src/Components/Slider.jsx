import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import demoData from "../../demoData.json";

const Slider = ({ projectsData }) => {
  const [WindowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slideClicked, setSlideClicked] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const projects = projectsData;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handelSlideClick = (t, c) => {
    setSlideClicked(true);
    setTitle(t);
    setContent(c);
  };

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={WindowWidth > 700 ? "3" : "1"}
        autoplay
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {projects?.map((data) => (
          <SwiperSlide key={data.title}>
            <div onClick={() => handelSlideClick(data.title, data.content)}>
              {slideClicked && title === data.title && (
                <motion.div
                  initial={{ y: "100vw", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="slide-content"
                >
                  <h1>{title}</h1>
                  <p>{content}</p>
                </motion.div>
              )}
              <img src={data.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
