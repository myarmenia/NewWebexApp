import React, { FC } from "react";
import { Outlet } from "react-router";
import { LessonTitle } from "../../../../components/reusable/lessonTitle/LessonTitle";
// import { LessonTitle } from "../../screenComponents/lessonTitle/LessonTitle";
// import StudentLesCard from "./stdLesson/StudentLesCard";
import "./studentLessons.css";
const StudentLessons: FC = () => {
  return (
    <div className="studentLessons">
      <Outlet />
    </div>
  );
};

export default StudentLessons;
