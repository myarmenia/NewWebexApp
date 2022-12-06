import React from "react";
import "./attachFile.css";

interface AttachFile {
  title: string;
  formats?: string[];
}

export const AttachFile: React.FC<AttachFile> = ({ title, formats }) => {
  return (
    <div className="attachFile">
      <span className="attachFileTitle">{title}</span>
      <div className="flex gap-3">
        <input className="loadFileInput" type="file" accept=".pptx, .docx, .jpg, png" />
        <p className="allowedFileFormat">Կցել ֆայլ (.pptx, .docx, .jpg, png)</p>
      </div>
    </div>
  );
};
