import { FC, useMemo } from "react";
import chevron from "../../../../../../assets/home_images/blocks/leftChevron.svg";
import styles from "./stdLesComments.module.css";

// Swiper
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export const StdLesComments: FC = () => {
  const slidesPerView = useMemo<number>(
    () => (window.innerWidth <= 600 ? 1 : window.innerWidth <= 800 ? 2 : 3),
    []
  );
  return (
    <div className="flex flex-col gap-2 self-center w-full mt-6">
      <span className="text-sm font-semibold text-gray">Կարծիքներ (9)</span>
      <div className={styles.lesPage_commentsContainer}>
        <div className={styles["mySwiper-button-prev2"]}>
          <img src={chevron} alt="" />
        </div>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={0}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 20000,
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
              <div className={styles.lesPage_comment}>
                Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ
                պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են
                մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան
                է։
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles["mySwiper-button-next2"]}>
          <img
            src={chevron}
            alt=""
            className={`${styles["mySwiper-button-next2"]} rotate-180`}
          />
        </div>
      </div>
    </div>
  );
};
