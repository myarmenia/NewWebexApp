import { ChangeEventHandler, FC, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useError } from "../../../hooks";
import { useFileUploader } from "../../../hooks/useFileUploader";
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
  const register = regName ? formMethods?.register(regName) : null;
  const errorMessage = useError(regName, formMethods, error);
  const [file, setFile] = useState<File>(null!);
  const onFileUpload = useFileUploader(setFile, onChange);
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
