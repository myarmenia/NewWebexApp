import React, { FC, Fragment } from "react";
import { IOtherLessonLoaderData } from "../../../../../../models/interfaces";
import { useLoaderData } from "react-router";
import { IStageLesson } from "../../../../../../models/interfaces";
import { LesStgLesson } from "../../../userLessons/stageLesPage/lesStageBox/lesStgLesson/LesStgLesson";
import "./messToLesson.css";

interface MessToLessonProps {
  stageLessons: IStageLesson[];
}

export const MessToLesson: FC<MessToLessonProps> = ({ stageLessons }) => {
  const mainData = useLoaderData() as IOtherLessonLoaderData;
  const { data } = mainData;
  return (
    <div className="messageCont_lessons">
      <div className="mr-[18px] text-xs text-[#5F6368] border-b border-[#BEBFE4] py-3 mb-2">
        Տնային հանձնարարություններ
      </div>
      <div className="messageCont_lessons_cont">
        {data.map(({ title }, i) => (
          <Fragment key={Math.random()}>
            {i !== stageLessons.length - 1 && i !== 0 && (
              <hr className="bg-[#BEBFE4] w-full h-[1px]" />
            )}
            <LesStgLesson {...{ title }} lessonNumber={i + 1} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
