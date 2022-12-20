import React, { FC } from "react";
import sendMesssageImg from "../../../../../../images/Teacher/Feedback/Vector.svg";
import "./chatInput.css";

export const ChatInput: FC = () => {
  return (
    <div className="chatInputDiv">
      <input type="text" className="chatInput" placeholder="Գրել նամակ․․․․" />
      <img src={sendMesssageImg} alt="" className="chatInput_img" />
    </div>
  );
};
