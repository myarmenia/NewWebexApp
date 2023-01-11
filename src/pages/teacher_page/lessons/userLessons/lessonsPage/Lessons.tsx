import React, { FC, Fragment } from "react";
import "./lessons.css";
import { useLoaderData } from "react-router";
import { LessonTitle } from "../../../../../components/reusable";
import {
  ILessonLoaderData,
  ILessonLoaderObj,
} from "../../../../../models/interfaces";
import { LesBox } from "../userLesComponents/lesBox/LesBox";
import { instance } from "../../../../../request";

interface UserLessons {
  lessonsArr: ILessonLoaderData[];
}

export const Lessons: FC = () => {
  const lessonsArr = useLoaderData() as ILessonLoaderObj[];

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
  const res = await instance.get("posts?userId=1");
  return res.data;
};
