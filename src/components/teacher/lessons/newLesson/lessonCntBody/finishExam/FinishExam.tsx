import React from "react";
import "./finishExam.css";
import { useFormContext } from "react-hook-form";
import { Selects } from "../validationSchema";

interface FinishExamProps {
  text: string;
  regName: Selects;
}

export const FinishExam: React.FC<FinishExamProps> = ({ text, regName }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="finishExam">
      <span className="text-[#6B6B6B] text-xs">{text}</span>
      <div className="radioCont">
        <div className="radioBox">
          <input type="radio" {...register(regName)} value={"Այո"} />
          <span>Այո</span>
        </div>
        <div className="radioBox">
          <input type="radio" {...register(regName)} value={"Ոչ"} />
          <span>Ոչ</span>
        </div>
        <p className="errorMessage">
          <>{errors[regName]?.message}</>
        </p>
      </div>
    </div>
  );
};
