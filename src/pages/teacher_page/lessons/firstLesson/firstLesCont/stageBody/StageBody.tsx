import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CstmInput, CstmTextarea } from "../../../../../../components/forms";
import { AttachFile, LoadImage } from "../../../../../../components/reusable";
import {
  firstLesson_schema,
  IFirstLessonSchema,
} from "../../../../../../validations/firstLesson_schema";
import { BoxTitle } from "../BoxTitle";
import { SaveDataDiv } from "../SaveDataDiv";
import styles from "./stageBody.module.css";

const onSubmit = (data: IFirstLessonSchema) => {
  console.log(data);
};

export const StageBody: FC = () => {
  const methods = useForm<IFirstLessonSchema>({
    resolver: yupResolver(firstLesson_schema),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  <AttachFile
                    regName="lessonFile"
                    label="Կցել ֆայլ (.pptx, .docx, .jpg, png)"
                    title="Հավելյալ նյութերը"
                  />
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
                    label="Կցել ֆայլ (.pptx, .docx, .jpg, png)"
                  />
                  <LoadImage regName="homeworkImage_url" />
                </div>
              </div>
              <SaveDataDiv />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
