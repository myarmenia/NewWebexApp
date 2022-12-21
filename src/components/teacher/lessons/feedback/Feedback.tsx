import React, { FC, useEffect } from "react";
import {
  LoaderFunctionArgs,
  Outlet,
  useLoaderData,
  useLocation,
} from "react-router";
import {
  ILessonLoaderObj,
  IOtherLessonLoaderData,
} from "../../../../models/interfaces";
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
  const data = await res.json();
  return { data, paramsId };
};
