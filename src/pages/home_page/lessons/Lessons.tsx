import React, { useEffect, useState } from "react";
import "./lessons.css";
import { Lesson } from "./lesson/Lesson";
import { lessonsArr } from "./lessonsStore";
import chevron from "../../images/blocks/leftChevron.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

export const Lessons: React.FC = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(3);
  useEffect(() => {
    if (window.innerWidth <= 1100 && window.innerWidth > 700) {
      setSlidesPerView(2);
    } else if (window.innerWidth <= 700) {
      setSlidesPerView(1);
    }
  }, []);
  return (
    <div className="lessons">
      <div className="lessonsTitle">Ամենապահանջված դասերը</div>
      <div className="lessonsContainer">
        <div className="mySwiper-button-prev">
          <img src={chevron} alt="" />
        </div>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={17}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          navigation={{
            nextEl: ".mySwiper-button-next",
            prevEl: ".mySwiper-button-prev",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {lessonsArr.map((el, index) => (
            <SwiperSlide key={index}>
              <Lesson {...el} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mySwiper-button-next">
          <img src={chevron} alt="" className="rotate-180" />
        </div>
      </div>
    </div>
  );
};
