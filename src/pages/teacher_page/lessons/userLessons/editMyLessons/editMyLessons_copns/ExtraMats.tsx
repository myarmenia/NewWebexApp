import React, { FC, useEffect, useState } from "react";
import { UseFieldArrayReturn, useFormContext } from "react-hook-form";
import { IEditSchema, IExtraMats } from "../editSchema";
import fileImg from "../../../../../../assets/teacher_images/userLessons/Group 1701.svg";
import deleteMaterial from "../../../../../../assets/teacher_images/exam/Group 1555.svg";

declare type FieldArrayKey =
  | keyof Pick<IEditSchema, "extraMaterials" | "homeW_extraMaterials">
  | any;

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
    <div className="extraMaterials">
      <p className="text-xs font-semibold">Հավելյալ նյութերը</p>
      <div className="extMatItems">
        {realExtrMats!.fields.map((field, i) => (
          <div
            className="flex gap-3 min-w-[90px] w-fit justify-between items-start"
            key={field.id}
          >
            <div className="extraMat">
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
