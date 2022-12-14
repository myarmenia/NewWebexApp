import { FC } from "react";
import feedbackImg from "../../../../../../assets/teacher_images/students/Group 1696.svg";
import { IStudentTd } from "../../../../../../models/interfaces";

export const TdFeedBack: FC<Pick<IStudentTd, "lessons">> = ({ lessons }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-1">
      {lessons.map((elem, ind) => (
        // <Link to={"somewhere"}>
        <img
          src={feedbackImg}
          className="cursor-pointer"
          alt=""
          key={Math.random()}
        />
        //  </Link>
      ))}
    </div>
  );
};
