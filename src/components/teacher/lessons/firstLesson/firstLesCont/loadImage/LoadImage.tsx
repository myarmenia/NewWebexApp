import React from "react";
import "./loadImage.css";

interface LoadImageProps {
  formats?: string[];
}

export const LoadImage: React.FC<LoadImageProps> = ({ formats }) => {
  return (
    <div className="loadImageDiv">
      <input
        className="loadImageInput"
        type="file"
        accept="image/png, image/jpeg"
      />
      <span className="text-[#6B6B6B] text-[10px]">Բեռնել նկար</span>
    </div>
  );
};
