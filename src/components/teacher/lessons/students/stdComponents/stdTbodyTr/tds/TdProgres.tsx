import React, { FC } from "react";
import { IStudentTd } from "../../../../../../../models/interfaces";

export const TdProgres: FC<Pick<IStudentTd, "lessons">> = ({ lessons }) => {
  return (
    <td className="stdTd">
      <div className="flex flex-col gap-[11px]">
        {lessons.map((elem, ind) => (
          <div
            className="w-full h-3 flex bg-[#D9D9D9] relative"
            key={Math.random()}
          >
            <div
              className="bg-[#898BCE] h-full"
              style={{ width: elem.progres + "%" }}
            />
            <span className="textCenterAbsolute">{elem.progres}%</span>
          </div>
        ))}
      </div>
    </td>
  );
};
