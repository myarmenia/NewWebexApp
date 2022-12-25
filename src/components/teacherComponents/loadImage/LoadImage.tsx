import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import "./loadImage.css";

interface LoadImageProps {
  regName?: string;
  className?: {
    div: string;
    img: string;
    text: string;
  };
}

export const LoadImage: React.FC<LoadImageProps> = ({ regName, className }) => {
  const [file, setFile] = useState<string | any>("");
  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(URL.createObjectURL(event.target.files![0]));
  };
  const { register, setValue } = useFormContext();
  useEffect(() => {
    regName && setValue(regName, file);
  }, [file]);
  return (
    <div
      className={`loadImageDiv ${file ? `h-[87px] w-[117px]` : ""} ${
        className?.div
      }`}
      style={{ backgroundImage: `url(${file})` }}
    >
      {!file && (
        <>
          <input
            className={`${className?.img} loadImageInput`}
            type="file"
            accept="image/png, image/jpeg"
            onChange={onFileUpload}
          />
          <span
            className={`text-gray text-[10px] whitespace-nowrap ${className?.text}`}
          >
            Բեռնել նկար
          </span>
        </>
      )}
    </div>
  );
};
