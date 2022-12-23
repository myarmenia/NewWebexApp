import React, { FC } from "react";
import "./lesBox.css";
import editImg from "../../../../../../assets/teacher_images/userLessons/editGray.svg";
import { LessonProps } from "../../../../../../models/interfaces";
import { Link } from "react-router-dom";
import { CustomBtn } from "../../../../../../components/teacherComponents/customBtn/CustomBtn";

export interface LesBoxProps extends LessonProps {
  studentsCount: number;
  id?: number;
}

export const LesBox: FC<LesBoxProps> = ({
  title,
  keys,
  description,
  studentsCount,
  price,
  id,
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
      <div className="flex flex-col">
        <span className="studentsCount">{studentsCount} ուսանող</span>
        <p className="lesBox_price">{price}</p>
      </div>
      <div className="btnSection">
        <div className="editLessonBox">
          <span className="editLesson">Խմբագրել</span>
          <img src={editImg} alt="" className="cursor-pointer" />
        </div>
        <Link to={`stage/${id}`}>
          <CustomBtn type="button" title="Ավելին" className="seeMoreBtn" />
        </Link>
      </div>
    </div>
  );
};
