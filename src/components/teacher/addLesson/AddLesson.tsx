import React from "react";
import "./addLesson.css";

export const AddLesson: React.FC = () => {
  return (
    <div className="addLesson">
      <p className="message">Դուք դեռ չունեք դասընթաց, ավելացրեք նորը</p>
      <button className="addLessonBtn">Ավելացնել դասընթաց</button>
    </div>
  );
};
