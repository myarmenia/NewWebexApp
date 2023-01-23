import { FC } from "react";
import styles from  "./userLessons.module.css";
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
    <div className={styles.mycontainer}>
      <Outlet />
    </div>
  );
};
