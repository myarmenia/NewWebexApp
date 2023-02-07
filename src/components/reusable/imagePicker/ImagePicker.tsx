import { FC, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import currentImg from "../../../assets/teacher_images/personalInfo/plus.svg";
import { useError, useFormRegister } from "../../../hooks";
import { useFileUploader } from "../../../hooks/useFileUploader";
import { MyInputProps } from "../../../models/forms";
import { ErrorMessage } from "../ErrorMessage";
import styles from "./imagePicker.module.css";

interface ImagePickerProps extends MyInputProps {
  defaultImage?: string;
}

export const ImagePicker: FC<ImagePickerProps> = ({
  defaultImage,
  boxClassName,
  className,
  error,
  errorClassName,
  regName,
}) => {
  const formMethods = useFormContext();
  const register = useFormRegister(regName);
  const errorMessage = useError(regName, error);
  const [file, onFileUpload] = useFileUploader();
  useEffect(() => {
    if (file && regName) {
      formMethods.setValue(regName, file);
    }
  }, [file]);

  return (
    <div className={[styles.addImgCustom, boxClassName].join(" ")}>
      <div className={styles.addImgChild}>
        <div className={`${styles.addImgInp} ${file && "!border-none"}`}>
          <input
            type="file"
            className={[
              className,
              styles.imgDownload,
              file && styles.image,
            ].join(" ")}
            name={register?.name}
            formEncType="multipart/form-data"
            onChange={onFileUpload}
            style={{
              backgroundImage: `url(${
                file ? URL.createObjectURL(file) : defaultImage || currentImg
              })`,
            }}
          />
          {!file && <div className={styles.addImgText}>Ավելացնել նկար</div>}
        </div>
        <div className={styles.infoImg}>
          <div className={styles.infoName}>Անուն Ազգանուն</div>
          <div className={styles.infoTeacher}>Դասախոս</div>
          <div className={styles.infoMail}>
            Էլ․ փոստ՝ studentexample@gmail.com
          </div>
        </div>
      </div>
      <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
    </div>
  );
};
