import { FC, Suspense } from "react";
import {
  Await,
  defer,
  LoaderFunction,
  Outlet,
  useLocation,
  useParams,
  useRouteLoaderData,
} from "react-router";
import { LessonTitle } from "../../../../components/reusable";
import { IOtherLessonLoaderData } from "../../../../models/interfaces";
import { instance } from "../../../../request";
import styles from "./feedback.module.css";
import { ChatNav } from "./blocks/ChatNav";
import { MessToLesson } from "./blocks/messToLesson/MessToLesson";
import { UsersMessages } from "./blocks/usersMessages/UsersMessages";
import { RootSpinner } from "../../../../components/rootSpinner/RootSpinner";

const FeedbackComp: FC = () => {
  const loaderData = useRouteLoaderData(
    "student-feedback"
  ) as IOtherLessonLoaderData;
  const { stdId } = useParams();
  const currentObj = loaderData.students[+stdId! - 1];

  const { pathname } = useLocation();
  const isNavBarShown: boolean =
    pathname.includes("homework") || pathname.includes("chat");

  return (
    <div className={styles.feedback}>
      <LessonTitle title="Նամակագրություն" className="mb-0" />
      <Suspense fallback={<RootSpinner />}>
        <Await resolve={loaderData}>
          <div className={styles.feedbackCont}>
            <UsersMessages />
            <div className={styles.messageSection}>
              <div className={styles.messageCont_title}>
                <p>{currentObj.name}</p>
                {isNavBarShown && <ChatNav />}
              </div>
              <div className={styles.messageCont}>
                <Outlet />
                <MessToLesson />
              </div>
            </div>
          </div>
        </Await>
      </Suspense>
    </div>
  );
};

const loader: LoaderFunction = async () => {
  const res = await instance.get("/posts?userId=1");
  const res1 = await instance.get("/users");
  return defer({ data: res.data, students: res1.data });
};

export const Feedback = Object.assign(FeedbackComp, { loader });
