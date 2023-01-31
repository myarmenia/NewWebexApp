import React, { useEffect, useState } from "react";
import styles from "./attachImage.module.css";
import { useFormContext } from "react-hook-form";

interface AttachImageProps {
  regName?: string;
  formatTitle?: string;
  formats?: string[];
}

export const AttachImage: React.FC<AttachImageProps> = ({
  regName,
  formatTitle,
  formats,
}) => {
  const [file, setFile] = useState<string | any>("");
  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(URL.createObjectURL(event.target.files![0]));
  };
  const { setValue } = useFormContext();
  useEffect(() => {
    regName && setValue(regName, file);
  }, [file]);
  return (
    <div className={styles.attachImage}>
      <input
        className={styles.attachImageInput}
        type="file"
        accept={formats?.join(", ")}
        onChange={onFileUpload}
      />
      <p className={styles.allowedImageFormat}>
        {`Կցել ${formatTitle} ${formats?.join(", ")}`}
      </p>
    </div>
  );
};
