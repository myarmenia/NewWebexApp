import React, { FC, Fragment } from "react";
import "./messToLesson.css";
import { IOtherLessonLoaderData } from "../../../../../../models/interfaces";
import { useLoaderData } from "react-router";
import { LesMessage } from "../lesMessage/LesMessage";

interface MessToLessonProps {}

export const MessToLesson: FC<MessToLessonProps> = ({}) => {
  // ----- Loader data ------
  const { data } = useLoaderData() as IOtherLessonLoaderData;

  // const {
  //   feedbackArr: { messages },
  // } = useSelector(lessonsSelectorFN);

  return (
    <div className="messageCont_lessons">
      <div className="mr-[18px] text-xs text-[#5F6368] border-b border-[#BEBFE4] py-3 mb-2">
        Տնային հանձնարարություններ
      </div>
      <div className="messageCont_lessons_cont">
        {data.map(({ title }, i) => (
          <Fragment key={Math.random()}>
            {i !== data.length - 1 && i !== 0 && (
              <hr className="bg-[#BEBFE4] w-full h-[1px]" />
            )}
            <LesMessage {...{ title }} lessonNumber={i + 1} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
