import { FC, ReactNode } from "react";
import { useLoaderData, useLocation } from "react-router";
import { IOtherLessonLoaderData } from "../../../../../../models/interfaces";
import { MessToLesson } from "../messToLesson/MessToLesson";
import { UsersMessages } from "../usersMessages/UsersMessages";
import { ChatNav } from "./ChatNav";
import styles from "./feedbackCont.module.css";

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
