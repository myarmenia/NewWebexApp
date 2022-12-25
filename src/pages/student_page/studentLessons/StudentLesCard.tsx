import React from "react";
import { Link } from "react-router-dom";
import { LessonProps } from "../../../models/interfaces";
import editImg from "../../../images/Teacher/UserLessons/editGray.svg";
import { CustomBtn } from "../../../components/teacherComponents/customBtn/CustomBtn";
export interface LesBoxProps extends LessonProps {
  studentsCount: number;
  id?: number;
}
const StudentLesCard: React.FC<LesBoxProps> = ({
  title,
  keys,
  description,
  studentsCount,
  price,
  id,
}) => {
  return (
    <div className="student-lesBox">
      <div className="student-lesBox_video">
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
      <p className="student-lesBox_title overflow-hidden">{title}</p>
      <div className="keys">
        {keys.map((key, index) => (
          <div className="key" key={index}>
            {key}
          </div>
        ))}
      </div>
      <p className="student-lesBox_description">{description}</p>
      <div className="count-star">
        <p className="student-lesBox_price">{price}</p>
        <div className="student-star">6 &#x2B50;</div>
      </div>
      <div className="flex ">
        <span className="student-studentsCount">
          Կարծիքներ ({studentsCount})
        </span>
      </div>
      <div className="student-btnSection">
        <Link to={`stage/${id}`}>
          <CustomBtn
            type="button"
            title="Ավելին"
            className="student-seeMoreBtn"
          />
        </Link>
      </div>
    </div>
  );
};

export default StudentLesCard;
