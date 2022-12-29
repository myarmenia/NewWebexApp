import { FC } from "react";
import { ProgressBar } from "../../../../../../components/reusable/ProgressBar";
import { IStudentTd } from "../../../../../../models/interfaces";

export const TdProgres: FC<Pick<IStudentTd, "lessons">> = ({ lessons }) => {
  return (
    <div className="flex flex-col gap-[11px]">
      {lessons.map((elem, ind) => (
        <ProgressBar progress={elem.progres} key={ind} />
      ))}
    </div>
  );
};
