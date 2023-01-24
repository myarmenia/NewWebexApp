import { ChangeEventHandler, FC, KeyboardEventHandler } from "react";
import { useFormContext } from "react-hook-form";
import { useError } from "../../../hooks";
import styles from "./cstmTextarea.module.css";

interface CstmTextareaProps {
  regName?: string;
  placeholder?: string;
  value?: string | number;
  className?: string;
  error?: string;
  defaultValue?: string | number;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
}

export const CstmTextarea: FC<CstmTextareaProps> = ({
  regName,
  placeholder = "",
  className = "",
  defaultValue,
  error,
  onChange,
  onKeyDown,
  value,
}) => {
  const formMethods = useFormContext();
  const errorMessage = useError(error, regName, formMethods);
  const register = regName ? formMethods?.register(regName) : null;

  return (
    <div className="flex flex-col relative w-full">
      <textarea
        wrap="off"
        className={`${className} scrollbar_hidden ${styles.textarea} lessonInp`}
        {...register}
        {...{ defaultValue, onChange, placeholder, value, onKeyDown }}
      />
      <p className="errorMessage">{errorMessage}</p>
    </div>
  );
};
