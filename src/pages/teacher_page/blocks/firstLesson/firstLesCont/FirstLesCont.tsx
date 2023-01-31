import { FC } from "react";
import { Route, Routes } from "react-router";
import { CustomBtn } from "../../../../../components/forms";
import { CntTitle } from "../../../../../components/teacherComponents/contTitle/CntTitle";
import styles from "./firstLesCont.module.css";
import { StageBody } from "./stageBody/StageBody";
import { StageLessons } from "./stageLessons/StageLessons";

export const FirstLesCont: FC = () => {
  return (
    <div className={styles.mycontainer}>
      <div className={styles.content}>
        <CntTitle title="ՓՈՒԼ 1" />
        <Routes>
          <Route path="/" element={<StageBody />} />
          <Route path="all_stages" element={<StageLessons />} />
        </Routes>
      </div>
      <div className={styles.btn_box}>
        <CustomBtn title="Հաջորդ դասը" type="submit" />
      </div>
    </div>
  );
};
