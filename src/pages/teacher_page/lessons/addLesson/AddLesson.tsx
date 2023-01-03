import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CustomBtn } from "../../../../components/forms";
import "./addLesson.css";

export const AddLesson: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="addLesson">
      <p className="message">Դուք դեռ չունեք դասընթաց, ավելացրեք նորը</p>
      <CustomBtn
        title="Ավելացնել դասընթաց"
        onClick={() => navigate("new_lesson")}
      />
    </div>
  );
};
