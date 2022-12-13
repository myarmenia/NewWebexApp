import React, { FC } from "react";
import { LessonTitle } from "../../lessonTitle/LessonTitle";
import "./feedback.css";
import { FeedbackCont } from "./feedbackComponents/feedbackCont/FeedbackCont";

export const Feedback: FC = () => {
  return (
    <div className="feedback">
      <LessonTitle title="Նամակագրություն" className="mb-0" />
      <FeedbackCont />
    </div>
  );
};
