import { FC } from "react";
import { LoaderFunction, LoaderFunctionArgs, Outlet } from "react-router";
import { LessonTitle } from "../../../../components/reusable";
import { instance } from "../../../../request";
import styles from "./feedback.module.css";
import { FeedbackCont } from "./feedbackComponents/feedbackCont/FeedbackCont";

const FeedbackComp: FC = () => {
  return (
    <div className={styles.feedback}>
      <LessonTitle title="Նամակագրություն" className="mb-0" />
      <FeedbackCont />
    </div>
  );
};

// export const feedbackLessonLoader: LoaderFunction = async ({
//   params,
// }: LoaderFunctionArgs) => {
//   const res = await instance.get("/posts?userId=1");
//   return { data: res.data, params };
// };

const loader: LoaderFunction = async ({ params }) => {
  const res = await instance.get("/posts?userId=1");
  const res1 = await instance.get("/users");
  return { data: res.data, students: res1.data, params };
};

export const Feedback = Object.assign(FeedbackComp, { loader });
