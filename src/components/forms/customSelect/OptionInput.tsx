import React, { FC, useRef } from "react";
import acceptImg from "../../../assets/teacher_images/newLesson/accept.svg";
import { ICustomSelect } from "../../../models/interfaces";

type OptionInputProps = Pick<ICustomSelect, "options" | "isMutable">;

export const OptionInput: FC<OptionInputProps> = ({ options, isMutable }) => {
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
          isMutable?.setOptions?.([...options, inpRef.current!.value]);
          inpRef.current!.value = "";
          inpRef.current!.focus();
        }}
      />
    </div>
  );
};
