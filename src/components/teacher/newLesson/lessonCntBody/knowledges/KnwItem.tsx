import React from "react";
import { FieldArrayWithId, UseFieldArrayReturn } from "react-hook-form";
import closeImg from "../../../../../images/Teacher/NewLesson/X.svg";
import { TeacherSubmitForm } from "../validationSchema";

interface KnwItemProps {
  knowledge: string;
  reqKnowledges: UseFieldArrayReturn<
    TeacherSubmitForm,
    "requiredKnowledges",
    "id"
  >;
  i: number;
}

export const KnwItem: React.FC<KnwItemProps> = ({
  knowledge,
  reqKnowledges,
  i,
}) => {
  return (
    <div className="flex justify-between items-center gap-[10px] bg-[#7764FB] text-xs text-white opacity-80 px-[18px] py-[5px] rounded-[30px]">
      <span className="leading-3">{knowledge}</span>
      <img
        className="h-2"
        src={closeImg}
        alt=""
        onClick={() => reqKnowledges.remove(i)}
      />
    </div>
  );
};
