import { FC } from "react";
import { Outlet, useLocation, useRouteLoaderData } from "react-router";
import { IOtherLessonLoaderData } from "../../../../../../models/interfaces";
import { MessToLesson } from "../messToLesson/MessToLesson";
import { UsersMessages } from "../usersMessages/UsersMessages";
import { ChatNav } from "./ChatNav";
import styles from "./feedbackCont.module.css";

export const FeedbackCont: FC = () => {
  const {
    students,
    params: { stdId },
  } = useRouteLoaderData("student-feedback") as IOtherLessonLoaderData;
  const currentObj = students[+stdId! - 1];

  const { pathname } = useLocation();
  const isNavBarShown: boolean =
    pathname.includes("homework") || pathname.includes("chat");

  return (
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
  );
};
