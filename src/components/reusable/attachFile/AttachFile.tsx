import { ChangeEventHandler, FC, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useError, useFileUploader, useFormRegister } from "../../../hooks";
import { ErrorMessage } from "../ErrorMessage";
import styles from "./attachFile.module.css";

interface AttachFileProps {
  title?: string;
  titleClName?: string;
  label?: string;
  regName?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  errorClassName?: string;
}

export const AttachFile: FC<AttachFileProps> = ({
  title,
  titleClName,
  label,
  regName,
  onChange,
  error,
  errorClassName,
}) => {
  const formMethods = useFormContext();
  const register = useFormRegister(regName);
  const errorMessage = useError(regName, error);
  const [file, onFileUpload] = useFileUploader(onChange);
  useEffect(() => {
    if (file && regName) {
      // formMethods.setValue(regName, file);
      formMethods.setValue(regName, URL.createObjectURL(file));
    }
  }, [file]);
  return (
    <div className={styles.box}>
      {title && (
        <span className={[styles.title, titleClName].join(" ")}>{title}</span>
      )}
      <div className="flex gap-3">
        <input
          className={styles.input}
          type="file"
          accept=".pptx, .docx, .jpg, .png"
          onChange={onFileUpload}
          name={register?.name}
          // {...register}
        />
        {label && <p className="text-xs">{label}</p>}
      </div>
      <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
    </div>
  );
};
