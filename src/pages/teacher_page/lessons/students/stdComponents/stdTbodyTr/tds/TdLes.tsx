import React, { FC } from "react";
import { IStudentTd } from "../../../../../../../models/interfaces";

export const TdLes: FC<Pick<IStudentTd, "lessons">> = ({ lessons }) => {
  return (
    <td className="stdTd">
      <div className="flex flex-col gap-[6px] overflow-x-hidden">
        {lessons.map(({ title }, ind) => (
          <span className="stdTd_lessonTitle" key={Math.random()}>
            {lessons.length === 1 ? title : `${ind + 1}. ${title}`}
          </span>
        ))}
      </div>
    </td>
  );
};
