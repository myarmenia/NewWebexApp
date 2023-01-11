import { FC } from "react";
import { Outlet } from "react-router";
import "./studentLessons.css";

export const StudentLessons: FC = () => {
  return (
    <div className="studentLessons">
      <Outlet />
    </div>
  );
};
