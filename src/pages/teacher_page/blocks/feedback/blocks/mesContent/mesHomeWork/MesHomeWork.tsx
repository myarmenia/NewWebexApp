import { FC, useState } from "react";
import { useParams, useRouteLoaderData } from "react-router";
import { CstmInput, CustomBtn } from "../../../../../../../components/forms";
import { IOtherLessonLoaderData } from "../../../../../../../models/interfaces";
import { ExtraMaterials } from "../../../../userLessons/stageLesPage/extraMaterials/ExtraMaterials";
import { LesContainer } from "../../../../userLessons/userLesComponents/LesContainer";
import styles from "./mesHomeWork.module.css";
import { StudentsWork } from "./StudentsWork";

export const MesHomeWork: FC = () => {
  const [isHomeWorkAccepted, setIsHomeWorkAccepted] = useState(false);
  const [inpValue, setInpValue] = useState<string>("");
  const { data } = useRouteLoaderData(
    "student-feedback"
  ) as IOtherLessonLoaderData;
  const { id } = useParams();
  const { body } = data[+id! - 1];

  return (
    <div
      className={`${styles.messageCont_cont} ${styles.mesHomeWork_container}`}
    >
      <div className="bg-white rounded-[15px]">
        <LesContainer className={styles.cont01}>
          <p className="hover:opacity-75 border-b border-[#BEBFE4] text-[10px] font-semibold pb-4">
            Տնային աշխատանք
          </p>
          <p className="text-xs">{body}</p>
          <div className="w-[30%] h-[1px] bg-[#BEBFE4]" />
          <ExtraMaterials items={["png", "img", "docx"]} />
        </LesContainer>
      </div>
      <div className="flex flex-col ">
        <div className="flex gap-[22px] flex-col w-[300px] justify-between my-8">
          <StudentsWork />
          <StudentsWork />
        </div>
        {isHomeWorkAccepted ? (
          <div className="flex flex-col gap-4">
            <CstmInput
              className="!w-[193px]"
              placeholder="Գնահատել ուսանողին"
              onChange={(e) => setInpValue(e.target.value)}
            />
            <CustomBtn onClick={() => console.log(inpValue)} title="Հաստատել" />
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <CustomBtn
              title="Ընդունել աշխատանքը"
              onClick={() => setIsHomeWorkAccepted(true)}
            />
            <CustomBtn title="Չընդունել" className={styles.grayBtn} />
          </div>
        )}
      </div>
    </div>
  );
};
