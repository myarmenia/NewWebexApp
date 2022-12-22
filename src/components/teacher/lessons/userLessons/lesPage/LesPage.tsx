import React, { FC } from "react";
import "./lesPage.css";
import { LesContainer } from "../userLesComponents/lesContainer/LesContainer";
import { LesPTitle } from "../userLesComponents/lesPTitle/LesPTitle";
import { LesImageBox } from "./lesImageBox/LesImageBox";
import { LesBoxProps } from "../userLesComponents/lesBox/LesBox";
import { LesCases } from "./lesCases/LesCases";
import { LesStages } from "./lesStages/LesStages";
import {
  LoaderFunctionArgs,
  Params,
  useLoaderData,
  useParams,
} from "react-router";
import {
  ILessonLoaderObj,
  ILessonLoaderData,
} from "../../../../../models/interfaces";
import { useSelector } from "react-redux";
import { lessonsSelectorFN } from "../../../../../redux/reducers/main";
interface LesPageProps extends LesBoxProps {
  stageCount: number;
  stageLessons: number;
  lessonTime: 2;
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
  const { obj, lessonsObj, paramsId } = useLoaderData() as ILessonLoaderData;
  const { title, body } = obj;

  // const params = useParams();
  // const { lessonsArr } = useSelector(lessonsSelectorFN);
  // const currentObj = lessonsArr[+params.id! - 1];
  // const { title, body } = currentObj;

  return (
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
          </LesContainer>
        </div>
    </div>
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
