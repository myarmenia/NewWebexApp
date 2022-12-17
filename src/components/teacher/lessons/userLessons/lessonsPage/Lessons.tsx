import React, { FC, Fragment } from "react";
import { useLoaderData } from "react-router";
import {
  ILessonLoaderData,
  LessonProps,
} from "../../../../../models/interfaces";
import { LesBox, LesBoxProps } from "../userLesComponents/lesBox/LesBox";

interface UserLessons {
  // lessonsArr: LessonProps[] | LesBoxProps[];
  lessonsArr: ILessonLoaderData[];
}

export const Lessons: FC = () => {
  const lessonsArr = useLoaderData() as ILessonLoaderData[];
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
