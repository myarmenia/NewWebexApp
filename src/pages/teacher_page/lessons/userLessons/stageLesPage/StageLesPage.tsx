import React, { FC } from "react";
import "./stageLesPage.css";
import editImg from "../../../../../assets/teacher_images/userLessons/editGray.svg";
import { LoaderFunctionArgs, useLoaderData } from "react-router";
import { ILessonLoaderData } from "../../../../../models/interfaces";
import { stagesArr } from "../lesPage/lesStages/LesStages";
import { LesContainer } from "../userLesComponents/lesContainer/LesContainer";
import { LesStageBox } from "./lesStageBox/LesStageBox";
import { LesWorkBox, LesWorkBoxProps } from "./lesWorkBox/LesWorkBox";
import { Link } from "react-router-dom";

const lesWorkAndHomeWork: LesWorkBoxProps[] = [
  {
    title:
      "«Գրաֆիկ դիզայն» մասնագիտություն, մասնագիտության կարեւորությունն ու արդիականությունը",
    description:
      "Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով Lorem Ipsum տեքստի ամենատարօրինակ բառերից մեկը՝ «consectetur»-ը, և այն որոնելով դասական գրականության մեջ՝ բացահայտեց դրա իսկական աղբյուրը։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով Lorem Ipsum տեքստի ամենատարօրինակ բառերից մեկը՝ «consectetur»-ը, և այն որոնելով դասական գրականության մեջ՝ բացահայտեց դրա իսկական աղբյուրը։",
    extMats: ["png", "pptx", "docx"],
    lesNumber: 1,
  },
  {
    title: "Տնային աշխատանք",
    description:
      "Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ ",
    extMats: ["png", "pptx", "docx"],
    className: { title: "text-[#898BCE]" },
  },
];

export const StageLesPage: FC = () => {
  // ----- Loader data ------
  const { obj, lessonsObj, paramsLes } = useLoaderData() as ILessonLoaderData;
  const { title, id } = obj;
  const { body } = lessonsObj[paramsLes - 1];

  // const params = useParams();
  // const { lessonsArr } = useSelector(lessonsSelectorFN);
  // const currentObj = lessonsArr[+params.les! - 1];
  // const { title, body, id } = currentObj;

  return (
    <div className="stageLesPage">
      <div className="lessonContent">
        <LesContainer className="lesCont">
          <Link to="edit">
            <div className="lesPage_titleBox ">
              <h5 className="lesPage_title !text-[#6B6B6B] !font-normal">
                {title}
              </h5>
              <div className="lesPage_editBox">
                <span className="lesPage_editText">Խմբագրել</span>
                <img src={editImg} alt="" />
              </div>
            </div>
          </Link>
          <hr className="stageLesPage_hr" />
          <LesContainer className="lesWorkHomeWork_container ">
            {/* {lessonsObj.map(({ title, body, id }) => (
              <LesWorkBox
                title={body}
                description={body}
                lesNumber={id}
                extMats={["png", "pptx", "docx"]}
                // {...{  lesNumber, extMats, className }}
                key={Math.random()}
              />
            ))} */}
            <LesWorkBox
              title={body}
              description={body}
              lesNumber={id}
              extMats={["png", "pptx", "docx"]}
              key={Math.random()}
            />
            <LesWorkBox
              title={body}
              description={body}
              lesNumber={id}
              extMats={["png", "pptx", "docx"]}
              key={Math.random()}
            />
          </LesContainer>
        </LesContainer>
      </div>
      <div className="stagesContainer">
        {stagesArr.map(({ stageLessons }, i) => (
          <LesStageBox
            {...{ stageLessons }}
            stageNumber={i + 1}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
};

export const stageLesPageLoader = async ({ params }: LoaderFunctionArgs) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}?userId=1`
  );
  const lessons = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=1`
  );
  const paramsId = params.id;
  const paramsLes = params.les;
  const obj = await res.json();
  const lessonsObj = await lessons.json();
  return { obj, lessonsObj, paramsId, paramsLes };
};
