import React, { FC, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router";
import {
  ILessonLoaderData,
  ILessonLoaderObj,
  LessonProps,
} from "../../../../../models/interfaces";
import { LesBox } from "../userLesComponents/lesBox/LesBox";
import { lessonsSelectorFN } from "../../../../../redux/reducers/main";

interface UserLessons {
  // lessonsArr: LessonProps[] | LesBoxProps[];
  lessonsArr: ILessonLoaderData[];
}

export const Lessons: FC = () => {
  // ----- Loader data ------
  const lessonsArr = useLoaderData() as ILessonLoaderObj[];
  
  // const dispatch = useDispatch();
  // const { lessonsArr } = useSelector(lessonsSelectorFN);
  return (
    <div className="userLessonsSection">
      {lessonsArr.map(({ title, body, id }) => (
        <Fragment key={Math.random()}>
          <LesBox
            {...{ title, id }}
            keys={[
              "Արվեստ և դիզայն",
              "Սկսնակների համար",
              "Հավաստագիր",
              "16+",
              "Ավարտական քննություն",
              "165 ժամ",
            ]}
            price="65 000"
            description={body}
            studentsCount={3}
          />
          {/* <LesBox {...el} studentsCount={3} /> */}
        </Fragment>
      ))}
    </div>
  );
};

export const lessonsLoader = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );
  // const lessonsArr = await res.json();

  return res.json();
};
