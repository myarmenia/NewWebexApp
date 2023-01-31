import { FC } from "react";
import closeImg from "../../../../../../assets/teacher_images/newLesson/X.svg";

interface KnwItemProps {
  knowledge: string;
  onClick: () => void;
}

export const KnwItem: FC<KnwItemProps> = ({ knowledge, onClick }) => {
  return (
    <div className="flex justify-between items-center gap-[10px] bg-[#7764FB] text-xs text-white opacity-80 pl-3 pr-[10px] py-[5px] rounded-[30px] min-h-[22px]">
      <span className="leading-3">{knowledge}</span>
      <img
        className="h-2 cursor-pointer"
        src={closeImg}
        alt=""
        onClick={onClick}
      />
    </div>
  );
};
