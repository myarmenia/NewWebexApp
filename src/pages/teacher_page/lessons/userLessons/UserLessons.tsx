import React, { FC } from "react";
import { Outlet } from "react-router";
import { IExtraMats } from "./editMyLessons/editSchema";
import "./userLessons.css";

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
      {/* <LessonTitle
        title="Իմ դասընթացները"
        isAddLessonBtn={true}
        className="w-full justify-between"
      /> */}
      <Outlet />
    </div>
  );
};
