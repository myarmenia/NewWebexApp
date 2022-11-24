import React from "react";
import "./lesson.css";
import { LessonProps } from "../../../models/interfaces";
// import video from "../../../images/Lessons/Rectangle 92.svg";

export const Lesson: React.FC<LessonProps> = ({
  description,
  title,
  price,
  video,
  keys,
}) => {
  return (
    <div className="lesson">
      <div className="video">
        {/* <source /> */}
        <img src={video} alt="" className="w-full h-full bg-cover" />
      </div>
      <p className="lessonTitle">
        {title}
        {/* Գրաֆիկ դիզայնի դասընթաց սկսնակների համար */}
      </p>
      <div className="keys">
        {keys.map((key, index) => (
          <div className="key" key={index}>
            {key}
          </div>
        ))}
      </div>
      <p className="lessonDescription">{description}</p>
      <p className="lessonPrice">{price}</p>
      <button className="seeMoreBtn">Ավելին</button>
    </div>
  );
};
