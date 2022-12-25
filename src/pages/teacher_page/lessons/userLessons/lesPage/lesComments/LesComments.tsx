import React, { FC } from "react";
import "./lesComments.css";
import chevron from "../../../../../../assets/home_images/lessons/leftChevron.svg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

export const LesComments: FC = () => {
  return (
    <div className="flex flex-col gap-2 self-center w-full mt-6">
      <span className="text-sm font-semibold text-gray">Կարծիքներ (9)</span>
      <div className="lesPage_commentsContainer">
        <div className="mySwiper-button-prev2">
          <img src={chevron} alt="" />
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".mySwiper-button-next2",
            prevEl: ".mySwiper-button-prev2",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {Array.from({ length: 10 }).map((el, i) => (
            <SwiperSlide key={i}>
              <div className="lesPage_comment">
                Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ
                պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են
                մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան
                է։
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mySwiper-button-next2">
          <img src={chevron} alt="" className="rotate-180" />
        </div>
      </div>
    </div>
  );
};
