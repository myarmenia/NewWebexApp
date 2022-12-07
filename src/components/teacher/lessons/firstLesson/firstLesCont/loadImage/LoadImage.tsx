import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import "./loadImage.css";

interface LoadImageProps {
  regName?: string;
}

export const LoadImage: React.FC<LoadImageProps> = ({ regName }) => {
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
      className={`loadImageDiv ${file ? `h-[87px] w-[117px]` : ""}`}
      style={{ backgroundImage: `url(${file})` }}
    >
      {!file && (
        <>
          <input
            className="loadImageInput"
            type="file"
            accept="image/png, image/jpeg"
            onChange={onFileUpload}
          />
          <span className="text-[#6B6B6B] text-[10px]">Բեռնել նկար</span>
        </>
      )}
    </div>
  );
};
