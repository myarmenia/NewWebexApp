import { FC } from "react";
import { Outlet } from "react-router";
import "./studentLessons.css";

const StudentLessons: FC = () => {
  return (
    <div className="studentLessons">
      <Outlet />
    </div>
  );
};

export default StudentLessons;
