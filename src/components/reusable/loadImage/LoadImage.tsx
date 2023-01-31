import React, { ChangeEventHandler, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "..";
import currentImg from "../../../assets/teacher_images/firstLesson/loadImg.svg";
import { useError, useFileUploader, useFormRegister } from "../../../hooks";
import styles from "./loadImage.module.css";

interface LoadImageProps {
  regName?: string;
  className?: {
    div: string;
    img: string;
    text: string;
  };
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  errorClassName?: string;
  defaultImage?: string;
}

export const LoadImage: React.FC<LoadImageProps> = ({
  regName,
  className = {
    div: "",
    img: "",
    text: "",
  },
  onChange,
  error,
  errorClassName,
  defaultImage,
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
    <div className={[styles.mycontainer, className?.div].join(" ")}>
      <div className={styles.box}>
        <input
          className={[className?.img, styles.input, file && styles.image].join(
            " "
          )}
          style={{
            backgroundImage: `url(${
              file ? URL.createObjectURL(file) : defaultImage || currentImg
            })`,
          }}
          type="file"
          accept="image/png, image/jpeg, image/svg"
          onChange={onFileUpload}
          name={register?.name}
        />
        <span
          className={`text-gray text-[10px] whitespace-nowrap ${className?.text}`}
        >
          Բեռնել նկար
        </span>
      </div>
      <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
    </div>
  );
};
