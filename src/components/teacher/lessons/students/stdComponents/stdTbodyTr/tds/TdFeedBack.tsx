import React, { FC } from "react";
import { IStudentTd } from "../../../../../../../models/interfaces";
import feedbackImg from "../../../../../../../images/Teacher/Students/Group 1696.svg";
import { Link } from "react-router-dom";

export const TdFeedBack: FC<Pick<IStudentTd, "lessons">> = ({ lessons }) => {
  return (
    <td className="stdTd">
      <div className="flex items-center justify-center flex-col gap-1">
        {lessons.map((elem, ind) => (
          // <Link to={"somewhere"}>
          <img
            src={feedbackImg}
            className="cursor-pointer"
            alt=""
            key={Math.random()}
          />
          //  </Link>
        ))}
      </div>
    </td>
  );
};
