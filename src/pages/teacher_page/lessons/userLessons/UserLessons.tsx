import { FC } from "react";
import "./userLessons.css";
import { Outlet } from "react-router";
import { IExtraMats } from "../../../../validations/editLesson_schema";

export const extItems: IExtraMats[] = [
  {
    type: "img",
    url: "",
  },
  {
    type: "png",
    url: "",
  },
  {
    type: "pptx",
    url: "",
  },
];

export const UserLessons: FC = () => {
  return (
    <div className="userLessons">
      <Outlet />
    </div>
  );
};
