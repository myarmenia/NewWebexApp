import React, { FC } from "react";
import { LoaderFunctionArgs, Outlet } from "react-router";
import { LessonTitle } from "../../../../components/reusable/lessonTitle/LessonTitle";
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

export const feedbackLessonLoader = async ({ params }: LoaderFunctionArgs) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );
  const data = await res.json();
  return { data, params };
};

export const feedback_studentsLoader = async ({
  params,
}: LoaderFunctionArgs) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );
  const res1 = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const students = await res1.json();
  return { data, students, params };
};
