import React, { FC } from "react";
import "./feedbackCont.css";
import { UsersMessages } from "../usersMessages/UsersMessages";
import { IStageLesson } from "../../../../../../models/interfaces";
import { MessToLesson } from "../messToLesson/MessToLesson";
import { MesTask } from "../mesContent/mesTask/MesTask";
import { Outlet, Route, Routes, useLocation } from "react-router";
import { MesHomeWork } from "../mesContent/mesHomeWork/MesHomeWork";
import { MesMessages } from "../mesContent/mesMessages/MesMessages";
import { ChatNav } from "./ChatNav";

const stageLessons: IStageLesson[] = Array.from({
  length: 12,
}).map(() => ({
  title:
    "«Գրաֆիկ դիզայն» մասնագիտություն, մասնագիտության  կարեւորությունն ու արդիականությունը",
}));

export const FeedbackCont: FC<{ children?: any }> = ({ children }) => {
  const location = useLocation();
  const { state } = location;
  return (
    <div className="feedbackCont">
      <UsersMessages />
      <div className="messageSection">
        <div className="messageCont_title">
          <p>Ուսանողի Անուն Ազգանուն</p>
          {!state && <ChatNav />}
        </div>
        <div className="messageCont">
          {/* <Routes>
            <Route path="/" element={<MesTask />} />
            <Route path="homework" element={<MesHomeWork />} />
            <Route path="chat" element={<MesMessages />} />
          </Routes> */}
          {children}

          <MessToLesson {...{ stageLessons }} />
        </div>
      </div>
    </div>
  );
};
