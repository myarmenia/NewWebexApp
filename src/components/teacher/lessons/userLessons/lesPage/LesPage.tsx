import React, { FC } from "react";
import "./lesPage.css";
import { LesContainer } from "../userLesComponents/lesContainer/LesContainer";
import { LesPTitle } from "../userLesComponents/lesPTitle/LesPTitle";
import { LesImageBox } from "./lesImageBox/LesImageBox";
import { LesBoxProps } from "../userLesComponents/lesBox/LesBox";
import { LesCases } from "./lesCases/LesCases";
import { LesStages } from "./lesStages/LesStages";
import {
  LoaderFunctionArgs,
  Params,
  useLoaderData,
  useParams,
} from "react-router";
import {
  ILessonLoaderObj,
  ILessonLoaderData,
} from "../../../../../models/interfaces";
import { useSelector } from "react-redux";
import { lessonsSelectorFN } from "../../../../../redux/reducers/main";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import chevron from "../../../../../images/Lessons/leftChevron.svg";

interface LesPageProps extends LesBoxProps {
  stageCount: number;
  stageLessons: number;
  lessonTime: 2;
}

export const LesPage: FC<LesPageProps> = ({
  stageCount,
  stageLessons,
  lessonTime,
  studentsCount,
  keys,
  price,
}) => {
  // ----- Loader data ------
  const { obj, lessonsObj, paramsId } = useLoaderData() as ILessonLoaderData;
  const { title, body } = obj;

  // const params = useParams();
  // const { lessonsArr } = useSelector(lessonsSelectorFN);
  // const currentObj = lessonsArr[+params.id! - 1];
  // const { title, body } = currentObj;

  return (
    <div className="lesPage">
      <div className="lesPage_container">
        <LesContainer>
          <LesPTitle {...{ title }} />
        </LesContainer>
        <LesImageBox {...{ stageCount, stageLessons, lessonTime }} />
        <LesContainer>
          <LesCases
            {...{ studentsCount, title, price, keys }}
            description={body}
          />
          <LesStages />
          <div className="flex flex-col gap-2 self-center w-full mt-6">
            <span className="text-sm font-semibold text-[#6B6B6B]">
              Կարծիքներ (9)
            </span>
            <div className="lesPage_commentsContainer">
              <div className="mySwiper-button-prev2 w-4 h-6 shrink-0">
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
                      պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում
                      են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000
                      տարեկան է։
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="mySwiper-button-next2 w-4 h-6 shrink-0">
                <img src={chevron} alt="" className="rotate-180" />
              </div>
            </div>
          </div>
        </LesContainer>
      </div>
    </div>
  );
};

export const lessonPageLoader = async ({ params }: LoaderFunctionArgs) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}?userId=1`
  );
  const lessons = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=1`
  );
  const paramsId = params.id;
  const paramsLes = params.les;
  const obj = await res.json();
  const lessonsObj = await lessons.json();
  return { obj, lessonsObj, paramsId, paramsLes };
};
