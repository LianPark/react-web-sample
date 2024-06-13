import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const YoutubeSlider = ({ youtubes }) => {
  return (
    <section className="youtube__slider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"5"}
        initialSlide="3"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
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
        {youtubes.map((youtube, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${youtube.poster_path}`}
                alt={youtube.title}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default YoutubeSlider;
