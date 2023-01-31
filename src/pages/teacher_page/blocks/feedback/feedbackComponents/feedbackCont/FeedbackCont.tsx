import React, { FC, ReactNode, useEffect } from "react";
import styles from "./feedbackCont.module.css";
import { UsersMessages } from "../usersMessages/UsersMessages";
import { IOtherLessonLoaderData } from "../../../../../../models/interfaces";
import { MessToLesson } from "../messToLesson/MessToLesson";
import { useLoaderData, useLocation, useParams } from "react-router";
import { ChatNav } from "./ChatNav";

export const FeedbackCont: FC<{ children?: ReactNode }> = ({ children }) => {
  // ----- Loader data ------
  const {
    students,
    params: { stdId },
  } = useLoaderData() as IOtherLessonLoaderData;
  const currentObj = students[+stdId! - 1];

  const location = useLocation();
  const { pathname } = location;
  const isNavBarShown: boolean =
    pathname.includes("homework") || pathname.includes("chat");

  // const params = useParams();
  // const {
  //   feedbackArr: { students, messages },
  // } = useSelector(lessonsSelectorFN);
  // const currentObj = students[+params.stdId! - 1];

  return (
    <div className={styles.feedbackCont}>
      <UsersMessages />
      <div className={styles.messageSection}>
        <div className={styles.messageCont_title}>
          <p>{currentObj.name}</p>
          {isNavBarShown && <ChatNav />}
        </div>
        <div className={styles.messageCont}>
          {children}
          <MessToLesson />
        </div>
      </div>
    </div>
  );
};
