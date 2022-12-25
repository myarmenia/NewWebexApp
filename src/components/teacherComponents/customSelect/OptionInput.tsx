import React, { FC, useRef } from "react";
import acceptImg from "../../../assets/teacher_images/newLesson/accept.svg";
import { ICustomSelect } from "../../../models/interfaces";

type OptionInputProps = Pick<ICustomSelect, "setOptions" | "options">;

export const OptionInput: FC<OptionInputProps> = ({ options, setOptions }) => {
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
