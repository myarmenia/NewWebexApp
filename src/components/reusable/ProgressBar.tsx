import { FC } from "react";

interface ProgressBarProps {
  progress: number;
  className?: string;
}

export const ProgressBar: FC<ProgressBarProps> = ({ progress, className }) => {
  return (
    <div
      className={`text-[10px] w-full h-3 flex bg-[#D9D9D9] relative rounded-[30px] overflow-hidden ${className}`}
      key={Math.random()}
    >
      <div className="bg-[#898BCE] h-full" style={{ width: progress + "%" }} />
      <span className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 !text-white font-semibold">
        {progress}%
      </span>
    </div>
  );
};
