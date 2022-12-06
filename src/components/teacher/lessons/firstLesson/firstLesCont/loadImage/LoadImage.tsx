import React from "react";

interface LoadImageProps {
  title: string;
  formats: string[];
}

export const LoadImage: React.FC<LoadImageProps> = ({ title, formats }) => {
  return (
    <div className="loadImageCont">
      <div className="loadImgBox">
        <span>{title}</span>
        
      </div>
      <div className="loadImgBox"></div>
    </div>
  );
};
