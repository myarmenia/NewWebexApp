import React from "react";
import { Link } from "react-router-dom";
import { CustomBtn } from "../../../../../components/forms";
import { LessonProps } from "../../../../../models/interfaces";
import editImg from "../../../images/Teacher/UserLessons/editGray.svg";
import starImg from "../../../../../assets/teacher_images/userLessons/starImg.svg";
import styles from "./stdLessons.module.css";
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
    <div className={styles["student-lesBox"]}>
      <div className={styles["student-lesBox_video"]}>
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
      <p className={`${styles["student-lesBox_title"]} overflow-hidden`}>
        {title}
      </p>
      <div className={styles.keys}>
        {keys.map((key, index) => (
          <div className={styles.keys} key={index}>
            {key}
          </div>
        ))}
      </div>
      <p className={styles["student-lesBox_description"]}>{description}</p>
      <div className={styles["count-star"]}>
        <p className={styles["student-lesBox_price"]}>{price}</p>
        <div className={styles["student-star"]}>
          6 <img src={starImg} />
        </div>
      </div>
      <div className="flex ">
        <span className={styles["student-studentsCount"]}>
          Կարծիքներ ({studentsCount})
        </span>
      </div>
      <div
      // className="student-btnSection"
      >
        <Link to={"student_courses"}>
          <CustomBtn
            type="button"
            title="Ավելին"
            className={styles["student-seeMoreBtn"]}
          />
        </Link>
      </div>
    </div>
  );
};

export default StudentLesCard;
