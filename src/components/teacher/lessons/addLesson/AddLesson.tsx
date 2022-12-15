import React from "react";
import { NavLink } from "react-router-dom";
import "./addLesson.css";

export const AddLesson: React.FC = () => {
  return (
    <div className="addLesson">
      <p className="message">Դուք դեռ չունեք դասընթաց, ավելացրեք նորը</p>
      <NavLink className="addLessonBtn" to={"/new_lesson"}>
        Ավելացնել դասընթաց
      </NavLink>
      {/* <button className="addLessonBtn"></button> */}
    </div>
  );
};
