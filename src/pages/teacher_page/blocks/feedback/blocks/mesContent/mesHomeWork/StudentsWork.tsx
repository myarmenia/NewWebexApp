import { FC } from "react";
import fileImg from "../../../../../../../assets/teacher_images/firstLesson/loadImg.svg";

interface StudentsWorkProps {
  title: string;
  file: string;
  time: string;
}

export const StudentsWork: FC = () => {
  return (
    <div className="flex gap-2 justify-between">
      <div className="flex items-center gap-2">
        <img src={fileImg} alt="" />
        <span>Ֆայլի անունը </span>
      </div>
      <span>10:00</span>
    </div>
  );
};
