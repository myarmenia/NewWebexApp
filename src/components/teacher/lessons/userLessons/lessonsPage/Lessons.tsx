import React, { FC, Fragment } from "react";
import { LessonProps } from "../../../../../models/interfaces";
import { LesBox, LesBoxProps } from "../userLesComponents/lesBox/LesBox";

interface UserLessons {
  lessonsArr: LessonProps[] | LesBoxProps[];
}

export const Lessons: FC<UserLessons> = ({ lessonsArr }) => {
  return (
    <div className="userLessonsSection">
      {lessonsArr.map((el) => (
        <Fragment key={Math.random()}>
          <LesBox {...el} studentsCount={3} />
          <LesBox {...el} studentsCount={3} />
        </Fragment>
      ))}
    </div>
  );
};
