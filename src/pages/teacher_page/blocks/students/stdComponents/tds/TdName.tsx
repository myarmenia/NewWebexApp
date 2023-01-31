import { FC } from "react";
import toStudentsPageImg from "../../../../../../assets/teacher_images/students/Vector 214.svg";
import { IStudentTd } from "../../../../../../models/interfaces";

export const TdName: FC<Pick<IStudentTd, "name" | "image">> = ({
  name,
  image,
}) => {
  return (
    <div className="flex items-center gap-[10px]">
      {/* <img src={image} alt="" /> place for student image */}
      <div className="bg-[#898BCE] rounded-full w-[26px] h-[26px] shrink-0" />
      <span>{name}</span>
      <img
        src={toStudentsPageImg}
        className="w-[17px] h-4 cursor-pointer"
        alt=""
      />
    </div>
  );
};
