import React from "react";
import "./finishExam.css";

interface FinishExamProps {
  text: string;
}

export const FinishExam: React.FC<FinishExamProps> = ({ text }) => {
  const random = Math.random();
  return (
    <div className="finishExam">
      <span className="text-[#6B6B6B] text-xs">{text}</span>
      <div className="radioCont">
        <div className="radioBox">
          <input type="radio" name={`same${random}`} id="" />
          <span>Այո</span>
        </div>
        <div className="radioBox">
          <input type="radio" name={`same${random}`} id="" />
          <span>Ոչ</span>
        </div>
      </div>
    </div>
  );
};
