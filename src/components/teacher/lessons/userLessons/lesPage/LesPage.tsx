import React, { FC } from "react";
import "./lesPage.css";
import { LesContainer } from "../userLesComponents/lesContainer/LesContainer";
import { LesPTitle } from "../userLesComponents/lesPTitle/LesPTitle";
import { LesImageBox } from "./lesImageBox/LesImageBox";
import { LesBoxProps } from "../userLesComponents/lesBox/LesBox";
import { LesCases } from "./lesCases/LesCases";
import { LesStages } from "./lesStages/LesStages";
import { LoaderFunctionArgs, useLoaderData } from "react-router";
import { ILessonLoaderData } from "../../../../../models/interfaces";

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
  const { title, body } = useLoaderData() as ILessonLoaderData;

  return (
    <div className="lesPage">
      <div className="my_background_06" />
      <div className="lesPage_container">
        <LesContainer>
          <LesPTitle title={title} />
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

export const lessonPageProvider = async ({ params }: LoaderFunctionArgs) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}?userId=1`
  );
  const paramsId = params.id;

  const { title, body } = await res.json();
  return { title, body, paramsId };
};
