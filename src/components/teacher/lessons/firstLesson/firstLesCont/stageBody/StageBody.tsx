import React from "react";
import { useFormContext } from "react-hook-form";
// import { ContTitle } from "../../../../lesComponents/contTitle/ContTitle";
import { CstmInput } from "../../../../lesComponents/cstmInput/CstmInput";
import { CstmTextarea } from "../../../../lesComponents/cstmTextarea/CstmTextarea";
import { AttachFile } from "../../../../lesComponents/attachFile/AttachFile";
import { BoxTitle } from "../BoxTitle";
import { LoadImage } from "../../../../lesComponents/loadImage/LoadImage";
import { SaveDataDiv } from "../SaveDataDiv";

export const StageBody: React.FC = () => {
  const { register } = useFormContext();
  return (
    <div className="lessonContainer">
      <div className="lessonContainer1">
        <BoxTitle title="Դաս 1" />
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
            <CstmTextarea
              regName="contents"
              placeholder="Բովանդակություն"
              className="lessonInp"
            />
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
        <BoxTitle title="Տնային հանձնարարություն" />
        <div className="LessonCntBody_box">
          <div className="LessonCntBody_boxContent">
            <CstmInput
              type="text"
              placeholder="Տեսանյութ (կցել youtube-ի հղումը)"
              regName="videoInpHomework"
              className="shadow-my1"
            />
            <CstmTextarea
              regName="contentsHomework"
              className="lessonInp"
              placeholder="Բովանդակություն"
            />
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
