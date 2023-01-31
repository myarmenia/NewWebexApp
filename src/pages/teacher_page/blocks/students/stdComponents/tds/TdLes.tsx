import { FC } from "react";
import { IStudentTd } from "../../../../../../models/interfaces";

export const TdLes: FC<Pick<IStudentTd, "lessons">> = ({ lessons }) => {
  return (
    <div className="flex flex-col gap-[6px] overflow-x-hidden">
      {lessons.map(({ title }, ind) => (
        <span
          className="whitespace-nowrap overflow-hidden text-ellipsis"
          key={Math.random()}
        >
          {lessons.length === 1 ? title : `${ind + 1}. ${title}`}
        </span>
      ))}
    </div>
  );
};
