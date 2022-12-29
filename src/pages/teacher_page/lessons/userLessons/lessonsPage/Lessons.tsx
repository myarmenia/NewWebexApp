import React, { FC, Fragment } from "react";
import "./lessons.css";
import { useLoaderData } from "react-router";
import { LessonTitle } from "../../../../../components/reusable/lessonTitle/LessonTitle";
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
  // const lessonsArr = [] as ILessonLoaderObj[];

  // const dispatch = useDispatch();
  // const { lessonsArr } = useSelector(lessonsSelectorFN);
  return (
    <div className="flex flex-col gap-[94px]">
      <div>
        <LessonTitle
          title="Չհրապարակված դասընթացներ"
          className="w-full justify-between"
          linkForBtn={{
            to: "/new_lesson",
            title: "+ Ավելացնել դասընթաց",
          }}
        />
        {lessonsArr.length ? (
          <div className="userLessonsSection_unpublished">
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
                  to={`stage/${id}`}
                  isCourseActive={false}
                />
                {/* <LesBox {...el} studentsCount={3} /> */}
              </Fragment>
            ))}
          </div>
        ) : (
          <p className="text-base text-gray">
            Դուք դեռ չունեք չհրապարակված դասընթաց, ավելացրեք նորը
          </p>
        )}
      </div>
      <div>
        <LessonTitle title="Ակտիվ դաընթացներ" />
        {lessonsArr.length ? (
          <div className="userLessonsSection_active">
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
                  commentsCount={9}
                  to={`stage/${id}`}
                  isCourseActive={true}
                />
                {/* <LesBox {...el} studentsCount={3} /> */}
              </Fragment>
            ))}
          </div>
        ) : (
          <p className="text-base text-gray">
            Դուք դեռ չունեք հրապարակված դասընթաց, ավելացրեք նորը
          </p>
        )}
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
