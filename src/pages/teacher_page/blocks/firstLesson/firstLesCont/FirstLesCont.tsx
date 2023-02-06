import { FC } from "react";
import { Outlet } from "react-router";
import { CustomBtn } from "../../../../../components/forms";
import { CntTitle } from "../../../../../components/teacherComponents/contTitle/CntTitle";
import styles from "./firstLesCont.module.css";

export const FirstLesCont: FC = () => {
  return (
    <div className={styles.mycontainer}>
      <div className={styles.content}>
        <CntTitle title="ՓՈՒԼ 1" />
        <Outlet />
      </div>
      <div className={styles.btn_box}>
        <CustomBtn title="Հաջորդ դասը" type="submit" />
      </div>
    </div>
  );
};
