import React, { FC, useEffect, useState } from "react";
import { UseFieldArrayReturn } from "react-hook-form";
import deleteMaterial from "../../../../../assets/teacher_images/exam/Group 1555.svg";
import fileImg from "../../../../../assets/teacher_images/userLessons/Group 1701.svg";
import {
  IEditSchema,
  IExtraMats,
} from "../../../../../validations/editLesson_schema";

interface ExtraMatsProps {
  extraMats?: UseFieldArrayReturn<IEditSchema, "extraMaterials", "id">;
  homeExtraMats?: UseFieldArrayReturn<
    IEditSchema,
    "homeW_extraMaterials",
    "id"
  >;
}

export const ExtraMats: FC<ExtraMatsProps> = ({ extraMats, homeExtraMats }) => {
  const realExtrMats = homeExtraMats || extraMats;
  const [file, setFile] = useState<IExtraMats>();

  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile({
      type: event.target.files![0].type,
      url: URL.createObjectURL(event.target.files![0]),
    });
  };
  useEffect(() => {
    realExtrMats?.append(file!);
  }, [file]);
  return (
    <div className="flex flex-col gap-[10px]">
      <p className="text-xs font-semibold">Հավելյալ նյութերը</p>
      <div className="flex flex-col gap-1 ml-1">
        {realExtrMats!.fields.map((field, i) => (
          <div
            className="flex gap-3 min-w-[90px] w-fit justify-between items-start"
            key={field.id}
          >
            <div className="flex gap-[5px] text-xs">
              <img src={fileImg} alt="" />
              <span>
                {i + 1}.{field.type}
              </span>
            </div>
            <img
              className="cursor-pointer"
              src={deleteMaterial}
              alt=""
              onClick={() => realExtrMats!.remove(i)}
            />
          </div>
        ))}
      </div>
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
