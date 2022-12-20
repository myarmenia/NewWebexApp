import React, { FC, Fragment } from "react";
import "./feedbackCont.css";
import { UsersMessages } from "../usersMessages/UsersMessages";
import sendMesssageImg from "../../../../../../images/Teacher/Feedback/Vector.svg";
import { LesPTitle } from "../../../userLessons/userLesComponents/lesPTitle/LesPTitle";
import { LesContainer } from "../../../userLessons/userLesComponents/lesContainer/LesContainer";
import Container from "../../../../../container/Container";
import { ExtraMaterials } from "../../../userLessons/stageLesPage/extraMaterials/ExtraMaterials";
import { LesStgLesson } from "../../../userLessons/stageLesPage/lesStageBox/lesStgLesson/LesStgLesson";
import { IStageLesson } from "../../../../../../models/interfaces";

const stageLessons: IStageLesson[] = Array.from({
  length: 12,
}).map(() => ({
  title:
    "«Գրաֆիկ դիզայն» մասնագիտություն, մասնագիտության  կարեւորությունն ու արդիականությունը",
}));

export const FeedbackCont: FC = () => {
  return (
    <div className="feedbackCont">
      <UsersMessages />
      <div className="messageSection">
        <p className="py-3 pt-5 mb-6 border-b border-[#BEBFE4] w-full font-semibold text-sm">
          Ուսանողի Անուն Ազգանուն
        </p>
        <div className="messageCont">
          <div className="messageCont_cont">
            <div className="bg-[#F8EFFF]">
              <LesContainer className="cont01">
                <p className="border-b border-[#BEBFE4] text-[10px] font-semibold pb-4">
                  <span className="font-normal">Դաս 1։</span> «Գրաֆիկ դիզայն»
                  մասնագիտություն, մասնագիտության կարեւորությունն ու
                  արդիականությունը
                </p>
                <div className="bg-[gray] w-[217px] h-[96px]" />
                <p className="text-xs ">
                  Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ
                  պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են
                  մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան
                  է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում
                  լատիներենի մի դասախոս՝ ուսումնասիրելով Lorem Ipsum տեքստի
                  ամենատարօրինակ բառերից մեկը՝ «consectetur»-ը, և այն որոնելով
                  դասական գրականության մեջ՝ բացահայտեց դրա իսկական աղբյուրը։
                  Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում
                  լատիներենի մի դասախոս՝ ուսումնասիրելով Lorem Ipsum տեքստի
                  ամենատարօրինակ բառերից մեկը՝ «consectetur»-ը, և այն որոնելով
                  դասական գրականության մեջ՝ բացահայտեց դրա իսկական աղբյուրը։
                </p>
                <div className="w-[30%] h-[1px] bg-[#BEBFE4]" />
                <ExtraMaterials items={["png", "img", "docx"]} />
                <p className="text-[#898BCE] font-semibold text-xs">
                  Տնային աշխատանք
                </p>
              </LesContainer>
            </div>

            <div className="sendMessageBox">
              <input
                type="text"
                className="sendMessageInput"
                placeholder="Գրել նամակ․․․․"
              />
              <img src={sendMesssageImg} alt="" className="sendMessageImg" />
            </div>
          </div>
          <div className="messageCont_lessons">
            <div className="text-xs text-[#5F6368] border-b border-[#BEBFE4] py-3 mb-2">
              Տնային հանձնարարություններ
            </div>
            <div className="messageCont_lessons_cont">
              {stageLessons.map(({ title }, i) => (
                <Fragment key={Math.random()}>
                  {i !== stageLessons.length - 1 && i !== 0 && (
                    <hr className="bg-[#BEBFE4] w-full h-[1px]" />
                  )}
                  <LesStgLesson {...{ title }} lessonNumber={i + 1} />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
