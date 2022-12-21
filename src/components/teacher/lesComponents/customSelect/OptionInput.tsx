import React, { Dispatch, SetStateAction, useRef } from "react";
import acceptImg from "../../../../images/Teacher/NewLesson/accept.svg";

interface OptionInputProps {
  options: string[];
  setOptions?: Dispatch<SetStateAction<string[]>>;
}

export const OptionInput: React.FC<OptionInputProps> = ({
  options,
  setOptions,
}) => {
  const inpRef = useRef<HTMLInputElement>(null);
  return (
    <div className="relative m-3 mt-2">
      <input
        className="addCategoryInp"
        placeholder="Ավելացնել կատեգորիա"
        ref={inpRef}
      />
      <img
        className="addImg"
        src={acceptImg}
        alt=""
        onClick={() => {
          setOptions?.([...options, inpRef.current!.value]);
          inpRef.current!.value = "";
          inpRef.current!.focus();
        }}
      />
    </div>
  );
};
