import React from "react";
import "./phases.css";

interface PhasesProps {
  lessonsCount: number;
}

export const Phases: React.FC<PhasesProps> = ({ lessonsCount }) => {
  return (
    <div className="phases">
      <p className="phasesTitle">Վերնագրել դասընթացի փուլերը</p>
      <div className="phasesCont">
        {Array.from({ length: lessonsCount }).map((el, index) => {
          return (
            <input
              type="text"
              className="lessonInp"
              placeholder={`Փուլ${index + 1}`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
