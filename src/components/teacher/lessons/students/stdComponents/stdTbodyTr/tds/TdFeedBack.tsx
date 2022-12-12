import React, { FC } from "react";
import { IStudentTd } from "../../../../../../../models/interfaces";
import feedbackImg from "../../../../../../../images/Teacher/Students/Group 1696.svg";

export const TdFeedBack: FC<Pick<IStudentTd, "lessons">> = ({ lessons }) => {
  return (
    <td className="stdTd">
      <div className="flex items-center justify-center flex-col gap-1">
        {lessons.map((elem, ind) => (
          <img src={feedbackImg} alt="" key={Math.random()} />
        ))}
      </div>
    </td>
  );
};
