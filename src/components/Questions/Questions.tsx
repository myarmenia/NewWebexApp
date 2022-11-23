import React from "react";
import { Accordion } from "./Accordion";
import "./Questions.css";
export const Questions = () => {
  return (
    <div className="questionsContainer">
      <div className="questionsTitle">Հաճախ տրվող հարցեր</div>
      <div className="questionsContainerChild">
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
    </div>
  );
};
