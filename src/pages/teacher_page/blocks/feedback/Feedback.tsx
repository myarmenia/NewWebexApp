import { FC } from "react";
import { LoaderFunction, LoaderFunctionArgs, Outlet } from "react-router";
import { LessonTitle } from "../../../../components/reusable";
import { instance } from "../../../../request";
import styles from "./feedback.module.css";
import { FeedbackCont } from "./feedbackComponents/feedbackCont/FeedbackCont";

export const Feedback: FC = () => {
  return (
    <div className={styles.feedback}>
      <LessonTitle title="Նամակագրություն" className="mb-0" />
      <FeedbackCont>
        <Outlet />
      </FeedbackCont>
    </div>
  );
};

export const feedbackLessonLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const res = await instance.get("/posts?userId=1");
  return { data: res.data, params };
};

export const feedback_studentsLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const res = await instance.get("/posts?userId=1");
  const res1 = await instance.get("/users");
  return { data: res.data, students: res1.data, params };
};
