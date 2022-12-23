import React, { useEffect, useState } from "react";
import imgStudent from "../../images/opinionImages/student.png";
import "./opinion.css";
import { OpinionCard } from "./OpinionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import chevron from "../../images/Lessons/leftChevron.svg";
export const Opinion: React.FC = () => {
  return (
    <div className="opinionContainer">
      <div className="opinionTitle">Ուսանողի կարծիքը</div>
      <div className="opinionContainerChild">
        <div className="mySwiper-button-prev2">
          <img src={chevron} alt="" />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={17}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".mySwiper-button-next2",
            prevEl: ".mySwiper-button-prev2",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <OpinionCard />
          </SwiperSlide>
        </Swiper>
        <div className="mySwiper-button-next2">
          <img src={chevron} alt="" className="rotate-180" />
        </div>
      </div>
    </div>
  );
};
