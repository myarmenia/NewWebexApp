import { FC } from "react";
import { Outlet } from "react-router";

export const StudentLessons: FC = () => {
  return (
    <div
    //  className="studentLessons"
    >
      <Outlet />
    </div>
  );
};
