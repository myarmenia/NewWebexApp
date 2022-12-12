import React, { FC } from "react";
import { IStudentTd } from "../../../../../../../models/interfaces";
import toStudentsPageImg from "../../../../../../../images/Teacher/Students/Vector 214.svg";

export const TdName: FC<Pick<IStudentTd, "name">> = ({ name }) => {
  return (
    <td className="stdTd">
      <div className="stdudentName">
        {/* <img src="" alt="" /> place for student image */}
        <div className="bg-[#898BCE] rounded-full w-[26px] h-[26px]" />
        <span>{name}</span>
        <img src={toStudentsPageImg} alt="" />
      </div>
    </td>
  );
};
