import React, { FC } from "react";
import "./usersMessages.css";

export const UsersMessages: FC = () => {
  return (
    <div className="feedbackMessages">
      {Array.from({ length: 20 }).map((el, i) => (
        <div className="chatContainer" key={Math.random()}>
          <img className="chatImg" src="" />
          <div className="chatDescriptionBox">
            <div className="flex items-center gap-2">
              <p className="chatDescription1">Ուսանողի Անուն Ազգանուն</p>
              <div className="userOnline" />
            </div>
            <p className="chatDescription2">Վերջին նամակի առաջին տողը....</p>
          </div>
          <span className="chatTime">11:10</span>
        </div>
      ))}
    </div>
  );
};
