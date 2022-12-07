import React from "react";
import { useFormContext } from "react-hook-form";
import { CstmInput } from "../../../../lesComponents/cstmInput/CstmInput";
import { AttachFile } from "../attachFile/AttachFile";
import { LessonTitle } from "../LessonTitle";
import { LoadImage } from "../loadImage/LoadImage";
import { SaveDataDiv } from "../SaveDataDiv";

export const StageBody: React.FC = () => {
  const { register } = useFormContext();
  return (
    <div className="lessonContainer">
      <div className="lessonContainer1">
        <LessonTitle title="Դաս 1" />
        <div className="LessonCntBody_box">
          <div className="LessonCntBody_boxContent">
            <CstmInput
              type="text"
              placeholder="Դասի վերնագիրը*"
              regName="lessonTitle"
              className="shadow-my1"
            />
            <CstmInput
              type="text"
              placeholder="Տեսանյութ (կցել youtube-ի հղումը)"
              regName="videoInp"
              className="shadow-my1"
            />
            <textarea
              className="lessonTextarea lessonInp"
              placeholder="Բովանդակություն"
              {...register("contents")}
            ></textarea>
            <div className="flex justify-between">
              <AttachFile regName="lessonFile" title="Հավելյալ նյութերը" />
              <LoadImage regName="lessonImage_url" />
            </div>
          </div>
          <SaveDataDiv />
        </div>
      </div>
      <div className="hrMain" />
      <div className="lessonContainer1">
        <LessonTitle title="Տնային հանձնարարություն" />
        <div className="LessonCntBody_box">
          <div className="LessonCntBody_boxContent">
            <CstmInput
              type="text"
              placeholder="Տեսանյութ (կցել youtube-ի հղումը)"
              regName="videoInpHomework"
              className="shadow-my1"
            />
            <textarea
              className="lessonTextarea lessonInp"
              placeholder="Բովանդակություն"
              {...register("contentsHomework")}
            ></textarea>
            <div className="flex justify-between">
              <AttachFile
                regName="homeworkFile"
                title="Տնային աշխատանքի նյութերը"
              />
              <LoadImage regName="homeworkImage_url" />
            </div>
          </div>
          <SaveDataDiv />
        </div>
      </div>
    </div>
  );
};
