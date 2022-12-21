import React, { FC } from "react";
import { LoaderFunctionArgs, Outlet } from "react-router";
import { ILessonLoaderObj } from "../../../../models/interfaces";
import { LessonTitle } from "../../lessonTitle/LessonTitle";
import "./feedback.css";
import { FeedbackCont } from "./feedbackComponents/feedbackCont/FeedbackCont";

export const Feedback: FC = () => {
  return (
    <div className="feedback">
      <LessonTitle title="Նամակագրություն" className="mb-0" />
      <FeedbackCont>
        <Outlet />
      </FeedbackCont>
    </div>
  );
};

export const feedbackLoader = async ({ params }: LoaderFunctionArgs) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );
  const paramsId = params.id;
  console.log(params, "loader", paramsId);

  const data = await res.json();
  const { title } = data as ILessonLoaderObj;

  return { data, title, paramsId };
};
