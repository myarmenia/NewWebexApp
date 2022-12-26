import React, { FC } from "react";
import "./stdLesPage.css";
import { LesImageBox } from "./lesImageBox/LesImageBox";

import { LoaderFunctionArgs, useLoaderData } from "react-router";
import {
  ILessonLoaderData,
  LessonProps,
} from "../../../../../models/interfaces";
import { CustomBtn } from "../../../../../components/teacherComponents/customBtn/CustomBtn";
import { LessonTitle } from "../../../../../components/screenComponents/lessonTitle/LessonTitle";
import { LesContainer } from "../../../../teacher_page/lessons/userLessons/userLesComponents/lesContainer/LesContainer";
import { StdLesCases } from "./stdLesCases/StdLesCases";
import { StdLesStages } from "./stdLesStages/StdLesStages";
import { StdLesComments } from "./stdLesComments/StdLesComments";
import { LesPTitle } from "../../../../teacher_page/lessons/userLessons/userLesComponents/lesPTitle/LesPTitle";

export interface LesPageProps extends LessonProps {
  stageCount: number;
  stageLessons: number;
  lessonTime: 2;
  studentsCount?: number;
  isCourseActive: boolean;
}

export const StdLesPage: FC<LesPageProps> = ({
  stageCount,
  stageLessons,
  lessonTime,
  studentsCount,
  keys,
  price,
  title,
}) => {
  // ----- Loader data ------
  // const { obj } = useLoaderData() as ILessonLoaderData;
  // const { title, body } = obj;

  // const params = useParams();
  // const { lessonsArr } = useSelector(lessonsSelectorFN);
  // const currentObj = lessonsArr[+params.id! - 1];
  // const { title, body } = currentObj;

  return (
    <>
      <LessonTitle title="Իմ դասընթացները" className="w-full justify-between" />
      <div className="lesPage">
        <div className="lesPage_container">
          <LesContainer>{title && <LesPTitle {...{ title }} />}</LesContainer>
          <LesImageBox {...{ stageCount, stageLessons, lessonTime }} />
          <LesContainer>
            <StdLesCases
              {...{ studentsCount, title, price, keys }}
              description={
                "Դասընթացի նկարագրությունը, Որպեսզի արդյունքի հասնելու համար, որն ավելի շատ համապատասխանի վերջնական արդյունքին, գրաֆիկական դիզայներները, Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով ։ "
              }
            />
            <StdLesStages />
            {/* <StdLesComments /> */}
            <div>
              <p className="text-gray font-bold mb-2">Դասախոս</p>
              <span className="text-xl text-gray">Անուն Ազգանուն</span>
            </div>
            {/* or button */}
            {/* <CustomBtn type="button" title="Հրապարակել" className="!mt-5" /> */}
          </LesContainer>
        </div>
      </div>
    </>
  );
};

export const lessonPageLoader = async ({ params }: LoaderFunctionArgs) => {
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
