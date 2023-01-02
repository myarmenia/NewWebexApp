import React from "react";
import "./stageBody.css";
import { BoxTitle } from "../BoxTitle";
import { SaveDataDiv } from "../SaveDataDiv";
import { CstmInput } from "../../../../../../components/forms";
import { AttachFile } from "../../../../../../components/teacherComponents/attachFile/AttachFile";
import { LoadImage } from "../../../../../../components/teacherComponents/loadImage/LoadImage";
import { CstmTextarea } from "../../../../../../components/forms";

export const StageBody: React.FC = () => {
  return (
    <div className="lessonContainer firstLesson_Container">
      <div className="lessonContainer1">
        <BoxTitle title="Դաս 1" />
        <div className="LessonCntBody_box">
          <div className="LessonCntBody_boxContent">
            <CstmInput
              type="text"
              placeholder="Դասի վերնագիրը*"
              regName="lessonTitle"
              className="shadow-light"
            />
            <CstmInput
              type="text"
              placeholder="Տեսանյութ (կցել youtube-ի հղումը)"
              regName="videoInp"
              className="shadow-light"
            />
            <CstmTextarea
              regName="contents"
              placeholder="Բովանդակություն"
              className="lessonInp"
            />
            <div className="flex justify-between gap-3">
              <AttachFile regName="lessonFile" title="Հավելյալ նյութերը" />
              <LoadImage regName="lessonImage_url" />
            </div>
          </div>
          <SaveDataDiv />
        </div>
      </div>
      <div className="hrMain !m-0" />
      <div className="lessonContainer1">
        <BoxTitle title="Տնային հանձնարարություն" />
        <div className="LessonCntBody_box">
          <div className="LessonCntBody_boxContent">
            <CstmInput
              type="text"
              placeholder="Տեսանյութ (կցել youtube-ի հղումը)"
              regName="videoInpHomework"
              className="shadow-light"
            />
            <CstmTextarea
              regName="contentsHomework"
              className="lessonInp"
              placeholder="Բովանդակություն"
            />
            <div className="flex justify-between gap-3">
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
