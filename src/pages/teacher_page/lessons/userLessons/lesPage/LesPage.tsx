import React, { FC } from "react";
import "./lesPage.css";
import { LesContainer } from "../userLesComponents/lesContainer/LesContainer";
import { LesPTitle } from "../userLesComponents/lesPTitle/LesPTitle";
import { LesImageBox } from "./lesImageBox/LesImageBox";
import { LesBoxProps } from "../userLesComponents/lesBox/LesBox";
import { LesCases } from "./lesCases/LesCases";
import { LesStages } from "./lesStages/LesStages";
import { LoaderFunctionArgs, useLoaderData } from "react-router";
import {
  ILessonLoaderData,
  LessonProps,
} from "../../../../../models/interfaces";
import { LesComments } from "./lesComments/LesComments";
import { CustomBtn } from "../../../../../components/teacherComponents/customBtn/CustomBtn";
import { LessonTitle } from "../../../../../components/screenComponents/lessonTitle/LessonTitle";

export interface LesPageProps extends LessonProps {
  stageCount: number;
  stageLessons: number;
  lessonTime: 2;
  studentsCount?: number;
  isCourseActive: boolean;
}

export const LesPage: FC<LesPageProps> = ({
  stageCount,
  stageLessons,
  lessonTime,
  studentsCount,
  keys,
  price,
}) => {
  // ----- Loader data ------
  const { obj } = useLoaderData() as ILessonLoaderData;
  const { title, body } = obj;

  // const params = useParams();
  // const { lessonsArr } = useSelector(lessonsSelectorFN);
  // const currentObj = lessonsArr[+params.id! - 1];
  // const { title, body } = currentObj;

  return (
    <>
      <LessonTitle title="Իմ դասընթացները" className="w-full justify-between" />
      <div className="lesPage">
        <div className="lesPage_container">
          <LesContainer>
            <LesPTitle {...{ title }} />
          </LesContainer>
          <LesImageBox {...{ stageCount, stageLessons, lessonTime }} />
          <LesContainer>
            <LesCases
              {...{ studentsCount, title, price, keys }}
              description={body}
            />
            <LesStages />
            <LesComments />
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
