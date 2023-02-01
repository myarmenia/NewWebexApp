import { FC, useRef } from "react";
import acceptImg from "../../../assets/teacher_images/newLesson/accept.svg";
import { enterPress } from "../../../helper";
import { useSelectContext } from "./CustomSelect";
import styles from "./customSelect.module.css";

export const OptionInput: FC = () => {
  const inpRef = useRef<HTMLInputElement>(null);
  const { options, setOptions } = useSelectContext();

  const appendOption = () => {
    if (inpRef.current!.value) {
      setOptions?.([...options, inpRef.current!.value]);
      inpRef.current!.value = "";
      inpRef.current!.focus();
    }
  };
  return (
    <div className="relative m-3 mt-2">
      <input
        className={styles.input}
        placeholder="Ավելացնել կատեգորիա"
        ref={inpRef}
        onKeyDown={(e) => enterPress(e, appendOption)}
      />
      <img
        className={styles.addImg}
        src={acceptImg}
        alt=""
        onClick={appendOption}
      />
    </div>
  );
};
