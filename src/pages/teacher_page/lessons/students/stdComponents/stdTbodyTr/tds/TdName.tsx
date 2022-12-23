import React, { FC } from "react";
import toStudentsPageImg from "../../../../../../../assets/teacher_images/students/Vector 214.svg";
import { IStudentTd } from "../../../../../../../models/interfaces";
import { Link } from "react-router-dom";

export const TdName: FC<Pick<IStudentTd, "name" | "image">> = ({
  name,
  image,
}) => {
  return (
    <td className="stdTd">
      <div className="stdudentName">
        {/* <img src={image} alt="" /> place for student image */}
        <div className="bg-[#898BCE] rounded-full w-[26px] h-[26px] shrink-0" />
        <span>{name}</span>
        {/* <Link to={"to messages with student"}> */}
        <img
          src={toStudentsPageImg}
          className="w-[17px] h-4 cursor-pointer"
          alt=""
        />
        {/* </Link> */}
      </div>
    </td>
  );
};
