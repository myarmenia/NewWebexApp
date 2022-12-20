import React, { FC } from "react";
import "./mesTask.css";
import { ExtraMaterials } from "../../../../userLessons/stageLesPage/extraMaterials/ExtraMaterials";
import { LesContainer } from "../../../../userLessons/userLesComponents/lesContainer/LesContainer";
import { Link, useLoaderData } from "react-router-dom";
import { IOtherLessonLoaderData } from "../../../../../../../models/interfaces";

export const MesTask: FC = () => {
  const mainData = useLoaderData() as IOtherLessonLoaderData;
  const { data } = mainData;
  return (
    <div className="messageCont_cont">
      <div className="bg-white h-full rounded-[15px]">
        <LesContainer className="cont01">
          <p className="border-b border-[#BEBFE4] text-[10px] font-semibold pb-4">
            <span className="font-normal">Դաս 1։</span> «Գրաֆիկ դիզայն»
            մասնագիտություն, մասնագիտության կարեւորությունն ու արդիականությունը
          </p>
          <div className="bg-[gray] w-[217px] h-[96px]" />
          <p className="text-xs ">
            Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական
            հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ.
            դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ
            ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի
            դասախոս՝ ուսումնասիրելով Lorem Ipsum տեքստի ամենատարօրինակ բառերից
            մեկը՝ «consectetur»-ը, և այն որոնելով դասական գրականության մեջ՝
            բացահայտեց դրա իսկական աղբյուրը։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի
            Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով Lorem
            Ipsum տեքստի ամենատարօրինակ բառերից մեկը՝ «consectetur»-ը, և այն
            որոնելով դասական գրականության մեջ՝ բացահայտեց դրա իսկական աղբյուրը։
          </p>
          <div className="w-[30%] h-[1px] bg-[#BEBFE4]" />
          <ExtraMaterials items={["png", "img", "docx"]} />
          <Link to={"homework"} className="toHomeWork_link">
            Տնային աշխատանք
          </Link>
        </LesContainer>
      </div>
    </div>
  );
};
