import React, { FC } from "react";
import "./lesBox.css";
import editImg from "../../../../../../assets/teacher_images/userLessons/editGray.svg";
import trashbinImg from "../../../../../../assets/teacher_images/userLessons/trashbin_2linesIN.svg";
import starImg from "../../../../../../assets/teacher_images/userLessons/starImg.svg";

import { LessonProps } from "../../../../../../models/interfaces";
import { Link } from "react-router-dom";
import { CustomBtn } from "../../../../../../components/forms";

export interface LesBoxProps extends LessonProps {
  studentsCount?: number;
  commentsCount?: number;
  isCourseActive: boolean;
}

export const LesBox: FC<LesBoxProps> = ({
  title,
  keys,
  price,
  description,
  studentsCount,
  commentsCount,
  isCourseActive,
  to,
}) => {
  return (
    <div className="lesBox">
      <div className="lesBox_video">
        <div className="w-full h-full rounded-3xl bg-purple-500"></div>
        {/* <iframe
        width="100%"
        height="auto  "
        src={video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>  */}
      </div>
      <p className="lesBox_title overflow-hidden">{title}</p>
      <div className="keys">
        {keys.map((key, index) => (
          <div className="key" key={index}>
            {key}
          </div>
        ))}
      </div>
      <p className="lesBox_description">{description}</p>
      {studentsCount && (
        <div className="flex justify-between items-center">
          <span className="studentsCount">{studentsCount} ուսանող</span>
          <span className="studentsCount">Կարծիքներ ({commentsCount})</span>
        </div>
      )}
      <div className="flex flex-col gap-5">
        <div className="flex justify-between text-base">
          <p className="lesBox_price">{price} դրամ</p>
          <span className="flex items-center gap-1 text-gray">
            6
            <img src={starImg} alt="" className="w-5 h-5" />
          </span>
        </div>
        <div className="btnSection">
          {isCourseActive ? (
            <img src={trashbinImg} alt="" className="cursor-pointer" />
          ) : (
            <div className="editLessonBox">
              <span className="editLesson">Խմբագրել</span>
              <img src={editImg} alt="" />
            </div>
          )}

          <Link to={to!}>
            <CustomBtn type="button" title="Ավելին" className="seeMoreBtn" />
          </Link>
        </div>
      </div>
    </div>
  );
};
