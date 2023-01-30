import { FC, TextareaHTMLAttributes } from "react";
import { useError, useFormRegister } from "../../../hooks";
import { MyInputProps } from "../../../models/forms";
import { ErrorMessage } from "../../reusable";
import styles from "./cstmTextarea.module.css";

interface CstmTextareaProps extends MyInputProps {}

export const CstmTextarea: FC<
  CstmTextareaProps & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ regName, className = "", error, errorClassName, ...props }) => {
  const errorMessage = useError(regName, error);
  const register = useFormRegister(regName);
  return (
    <div className="flex flex-col relative w-full">
      <textarea
        {...props}
        wrap="off"
        className={`${className} scrollbar_hidden ${styles.textarea} lessonInp`}
        {...register}
      />
      <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
    </div>
  );
};
