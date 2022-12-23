import React, { FC } from "react";
import { IStudentTd } from "../../../../../../../models/interfaces";

export const TdDate: FC<Pick<IStudentTd, "lessons">> = ({ lessons }) => {
  return (
    <td className="stdTd text-center">
      <div className="flex flex-col gap-[6px] mr-7">
        {lessons.map((elem, ind) => (
          <span key={Math.random()}>{elem.date.toString()}</span>
        ))}
      </div>
    </td>
  );
};
