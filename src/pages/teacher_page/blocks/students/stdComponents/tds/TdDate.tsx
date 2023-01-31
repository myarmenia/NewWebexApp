import { FC } from "react";
import { IStudentTd } from "../../../../../../models/interfaces";

export const TdDate: FC<Pick<IStudentTd, "lessons">> = ({ lessons }) => {
  return (
    <div className="flex flex-col gap-[6px]">
      {lessons.map((elem, ind) => (
        <span key={Math.random()}>{elem.date.toString()}</span>
      ))}
    </div>
  );
};
