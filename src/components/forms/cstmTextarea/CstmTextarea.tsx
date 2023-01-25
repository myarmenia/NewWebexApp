import { FC, TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { useError } from "../../../hooks";
import { ErrorMessage } from "../../reusable";
import styles from "./cstmTextarea.module.css";

interface CstmTextareaProps {
  regName?: string;
  value?: string | number;
  className?: string;
  error?: string;
}
export const CstmTextarea: FC<
  CstmTextareaProps & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ regName, className = "", error, ...props }) => {
  const formMethods = useFormContext();
  const errorMessage = useError(error, regName, formMethods);
  const register = regName ? formMethods?.register(regName) : null;

  return (
    <div className="flex flex-col relative w-full">
      <textarea
        wrap="off"
        className={`${className} scrollbar_hidden ${styles.textarea} lessonInp`}
        {...props}
        {...register}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
};
