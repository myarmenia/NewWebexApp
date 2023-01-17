import { FC, useRef } from "react";
import acceptImg from "../../../assets/teacher_images/newLesson/accept.svg";
import { useSelectContext } from "./CustomSelect";

export const OptionInput: FC = () => {
  const inpRef = useRef<HTMLInputElement>(null);
  const { options, isMutable } = useSelectContext();
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
