import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import "./attachFile.css";

interface AttachFile {
  title: string;
  regName?: string;
}

export const AttachFile: React.FC<AttachFile> = ({ title, regName }) => {
  const [file, setFile] = useState<string | any>("");
  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(URL.createObjectURL(event.target.files![0]));
  };
  const { register, setValue } = useFormContext();
  useEffect(() => {
    regName && setValue(regName, file);
  }, [file]);
  return (
    <div className="attachFile">
      <span className="attachFileTitle">{title}</span>
      <div className="flex gap-3">
        <input
          className="loadFileInput"
          type="file"
          accept=".pptx, .docx, .jpg, .png"
          onChange={onFileUpload}
        />
        <p className="allowedFileFormat">Կցել ֆայլ (.pptx, .docx, .jpg, png)</p>
      </div>
    </div>
  );
};
