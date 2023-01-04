import { FC, MouseEventHandler } from "react";
import starImg from "../../../../../../../assets/student_images/studentLessons/Star 5.svg";
import ActiveStarImg from "../../../../../../../assets/student_images/studentLessons/Star Active.svg";

interface StarItemProps {
  isCompleted: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export const StarItem: FC<StarItemProps> = ({ isCompleted, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      {isCompleted ? (
        <img src={ActiveStarImg} alt="" />
      ) : (
        <img src={starImg} alt="" />
      )}
    </div>
  );
};
