import React, { FC, ReactNode } from "react";
import "./feedbackCont.css";
import { UsersMessages } from "../usersMessages/UsersMessages";
import { IOtherLessonLoaderData } from "../../../../../../models/interfaces";
import { MessToLesson } from "../messToLesson/MessToLesson";
import { useLoaderData, useLocation } from "react-router";
import { ChatNav } from "./ChatNav";

export const FeedbackCont: FC<{ children?: ReactNode }> = ({ children }) => {
  const {
    students,
    params: { stdId },
  } = useLoaderData() as IOtherLessonLoaderData;
  const location = useLocation();
  const { pathname } = location;
  const isNavBarShown: boolean =
    pathname.includes("homework") || pathname.includes("chat");

  return (
    <div className="feedbackCont">
      <UsersMessages />
      <div className="messageSection">
        <div className="messageCont_title">
          <p>{students[stdId - 1].name}</p>
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
