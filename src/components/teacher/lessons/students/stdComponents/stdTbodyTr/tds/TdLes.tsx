import React, { FC } from "react";
import { IStudentTd } from "../../../../../../../models/interfaces";

export const TdLes: FC<Pick<IStudentTd, "lessons">> = ({ lessons }) => {
  return (
    <td className="stdTd">
      <div className="flex flex-col gap-[6px]">
        {lessons.map((elem, ind) => (
          <span key={Math.random()}>
            {lessons.length === 1 ? elem.title : `${ind + 1}. ${elem.title}`}
          </span>
        ))}
      </div>
    </td>
  );
};
