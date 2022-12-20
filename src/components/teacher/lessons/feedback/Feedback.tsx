import React, { FC } from "react";
import { Outlet, useLoaderData } from "react-router";
import {
  ILessonLoaderObj,
  IOtherLessonLoaderData,
} from "../../../../models/interfaces";
import { LessonTitle } from "../../lessonTitle/LessonTitle";
import "./feedback.css";
import { FeedbackCont } from "./feedbackComponents/feedbackCont/FeedbackCont";

export const Feedback: FC = () => {
  const mainData = useLoaderData() as IOtherLessonLoaderData;
  const { data } = mainData;
  // console.log(data);

  return (
    <div className="feedback">
      <LessonTitle title="Նամակագրություն" className="mb-0" />
      {/* <FeedbackCont /> */}
      <FeedbackCont>
        <Outlet />
      </FeedbackCont>
    </div>
  );
};

export const feedbackLoader = async ({}) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );
  const data = await res.json();
  const { title } = data as ILessonLoaderObj;

  return { data, title };
};
