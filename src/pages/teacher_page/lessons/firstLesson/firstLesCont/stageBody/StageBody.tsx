import React from "react";
import styles from "./stageBody.module.css";
import { BoxTitle } from "../BoxTitle";
import { SaveDataDiv } from "../SaveDataDiv";
import { CstmInput } from "../../../../../../components/forms";
import { AttachFile } from "../../../../../../components/teacherComponents/attachFile/AttachFile";
import { LoadImage } from "../../../../../../components/teacherComponents/loadImage/LoadImage";
import { CstmTextarea } from "../../../../../../components/forms";

export const StageBody: React.FC = () => {
  return (
    // <div className={lessonContainer, styles.firstLesson_Container}>
    <div className={styles.mycontainer}>
      <div className={styles.box}>
        <BoxTitle title="Դաս 1" />
        <div className={styles.box_content}>
          <div className={styles.article}>
            <CstmInput
              placeholder="Դասի վերնագիրը*"
              regName="lessonTitle"
              className="shadow-light"
            />
            <CstmInput
              placeholder="Տեսանյութ (կցել youtube-ի հղումը)"
              regName="videoInp"
              className="shadow-light"
            />
            <CstmTextarea
              regName="contents"
              placeholder="Բովանդակություն"
              className="lessonInp"
            />
            <div className="flex justify-between gap-3 med-450:flex-col">
              <AttachFile regName="lessonFile" title="Հավելյալ նյութերը" />
              <LoadImage regName="lessonImage_url" />
            </div>
          </div>
          <SaveDataDiv />
        </div>
      </div>
      <div className={styles.hr} />
      <div className={styles.box}>
        <BoxTitle title="Տնային հանձնարարություն" />
        <div className={styles.box_content}>
          <div className={styles.article}>
            <CstmInput
              placeholder="Տեսանյութ (կցել youtube-ի հղումը)"
              regName="videoInpHomework"
              className="shadow-light"
            />
            <CstmTextarea
              regName="contentsHomework"
              className="lessonInp"
              placeholder="Բովանդակություն"
            />
            <div className="flex justify-between gap-3 med-450:flex-col">
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
