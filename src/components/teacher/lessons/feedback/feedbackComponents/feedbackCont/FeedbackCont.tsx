import React, { FC } from "react";
import "./feedbackCont.css";
import { UsersMessages } from "../usersMessages/UsersMessages";
import { IStageLesson } from "../../../../../../models/interfaces";
import { MessToLesson } from "../messToLesson/MessToLesson";
import { useLocation } from "react-router";
import { ChatNav } from "./ChatNav";

const stageLessons: IStageLesson[] = Array.from({
  length: 12,
}).map(() => ({
  title:
    "«Գրաֆիկ դիզայն» մասնագիտություն, մասնագիտության  կարեւորությունն ու արդիականությունը",
}));

export const FeedbackCont: FC<{ children?: any }> = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  const isNavBarShown: boolean =
    pathname.includes("homework") || pathname.includes("chat");
  return (
    <div className="feedbackCont">
      <UsersMessages />
      <div className="messageSection">
        <div className="messageCont_title">
          <p>Ուսանողի Անուն Ազգանուն</p>
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
