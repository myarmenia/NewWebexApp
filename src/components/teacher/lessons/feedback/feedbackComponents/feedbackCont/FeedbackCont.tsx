import React, { FC, ReactNode, useEffect } from "react";
import "./feedbackCont.css";
import { UsersMessages } from "../usersMessages/UsersMessages";
import { IOtherLessonLoaderData } from "../../../../../../models/interfaces";
import { MessToLesson } from "../messToLesson/MessToLesson";
import { useLoaderData, useLocation, useParams } from "react-router";
import { ChatNav } from "./ChatNav";
import { useSelector } from "react-redux";
import { lessonsSelectorFN } from "../../../../../../redux/reducers/main";

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
    <div className="feedbackCont">
      <UsersMessages />
      <div className="messageSection">
        <div className="messageCont_title">
          <p>{currentObj.name}</p>
          {isNavBarShown && <ChatNav />}
        </div>
        <div className="messageCont">
          {children}
          <MessToLesson />
        </div>
      </div>
    </div>
  );
};
