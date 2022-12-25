import React, { FC, useState } from "react";
import "./lesStgLesson.css";
import { IStageLesson } from "../../../../../../../models/interfaces";
import { Link } from "react-router-dom";

export const LesStgLesson: FC<IStageLesson> = ({ title, lessonNumber }) => {
  const [isActive, setIsActive] = useState(lessonNumber === 1);

  return (
    <div className="lesStgLesson">
      <p
        className={`text-[10px] font-semibold w-fit ${
          isActive ? "activeLes" : ""
        }`}
      >
        <Link to={"/feedback"} className="font-normal" state={true}>
          <span className="font-normal">Դաս {lessonNumber}:</span> {title}
        </Link>
      </p>
      <Link to={"homework"} className="homeWorkAncor">
        Տնային աշխատանք
      </Link>
    </div>
  );
};
