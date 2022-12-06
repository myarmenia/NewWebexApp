import React, { useState } from "react";
import "./loadImage.css";

interface LoadImageProps {}

export const LoadImage: React.FC<LoadImageProps> = ({}) => {
  const [file, setFile] = useState<string | any>("");
  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(URL.createObjectURL(event.target.files![0]));
  };

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
