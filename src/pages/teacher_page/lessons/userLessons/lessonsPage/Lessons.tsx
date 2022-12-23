import React, { FC, Fragment } from "react";
import { useLoaderData } from "react-router";
import { LessonTitle } from "../../../../../components/screenComponents/lessonTitle/LessonTitle";
import {
  ILessonLoaderData,
  ILessonLoaderObj,
} from "../../../../../models/interfaces";
import { LesBox } from "../userLesComponents/lesBox/LesBox";

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
    <div className="flex flex-col gap-[94px]">
      <div>
        <LessonTitle
          title="Չհրապարակված դասընթացներ"
          isAddLessonBtn={true}
          className="w-full justify-between"
        />
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
      </div>
      <div>
        <LessonTitle title="Ակտիվ դաընթացներ" />
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
      </div>
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