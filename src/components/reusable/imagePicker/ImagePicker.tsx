import { FC } from "react";
import { useFormContext } from "react-hook-form";
import currentImg from "../../../assets/teacher_images/personalInfo/plus.svg";
import { useFileUploader } from "../../../hooks/useFileUploader";
import styles from "./imagePicker.module.css";

interface ImagePickerProps {
  defaultImage?: string;
}

export const ImagePicker: FC<ImagePickerProps> = ({ defaultImage }) => {
  const { register } = useFormContext();
  const [file, onFileUpload] = useFileUploader();
  return (
    <div className={styles.addImgCustom}>
      <div className={styles.addImgChild}>
        <div className={`${styles.addImgInp} ${file && "!border-none"}`}>
          <input
            type="file"
            className={[styles.imgDownload, file && styles.image].join(" ")}
            {...register(`img`)}
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
    </div>
  );
};
