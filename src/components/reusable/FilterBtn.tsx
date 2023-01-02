import { FC, MouseEventHandler, ReactNode } from "react";

interface FilterBtnProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const FilterBtn: FC<FilterBtnProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        className +
        " border-0 bg-[rgba(255,255,255,0.6)] shadow-light cursor-pointer py-[6px] px-3 text-[#9C9C9C] rounded-2xl text-xs h-[28px] bg_hover"
      }
    >
      {children}
    </button>
  );
};
