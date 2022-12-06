import React from "react";
import "./attachFile.css";

interface AttachFile {
  title: string;
  formats: string[];
}

export const AttachFile: React.FC<AttachFile> = ({ title, formats }) => {
  return (
    <div className="attachFile">
      <span className="">{title}</span>
      <input type="file" accept=".pptx, .docx, .jpg, png" />
    </div>
  );
};
