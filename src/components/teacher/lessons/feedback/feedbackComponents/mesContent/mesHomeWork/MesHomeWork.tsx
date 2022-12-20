import React, { FC } from "react";
import "./mesHomeWork.css";
import { ExtraMaterials } from "../../../../userLessons/stageLesPage/extraMaterials/ExtraMaterials";
import { LesContainer } from "../../../../userLessons/userLesComponents/lesContainer/LesContainer";
import { CustomBtn } from "../../../../../lesComponents/customBtn/CustomBtn";
import fileImg from "../../../../../../../images/Teacher/FirstLesson/loadImg.svg";
import { StudentsWork } from "./StudentsWork";

export const MesHomeWork: FC = () => {
  return (
    <div className="messageCont_cont mesHomeWork_container">
      <div className="bg-white rounded-[15px]">
        <LesContainer className="cont01">
          <p className="hover:opacity-75 border-b border-[#BEBFE4] text-[10px] font-semibold pb-4">
            Տնային աշխատանք
          </p>
          <p className="text-xs">
            Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական
            հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ.
            դասական լատինական գրական։
          </p>
          <div className="w-[30%] h-[1px] bg-[#BEBFE4]" />
          <ExtraMaterials items={["png", "img", "docx"]} />
        </LesContainer>
      </div>
      <div className="flex flex-col ">
        <div className="student_homeW_container">
          <div className="flex gap-[22px] flex-col w-[300px] justify-between my-8">
            <StudentsWork />
            <StudentsWork />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <CustomBtn type="button" title="Ընդունել աշխատանքը" />
          <CustomBtn type="button" title="Չընդունել" className="grayBtn" />
        </div>
      </div>
    </div>
  );
};
