import { FC } from "react";
import { NmTbody } from "./NmTbody";
import { NmThead } from "./NmThead";
import styles from "./numCont.module.css";

export const NumCont: FC = () => {
  return (
    <div className={styles.mycontainer}>
      <div className={styles.content}>
        <table className={styles.table}>
          <NmThead />
          <NmTbody />
        </table>
      </div>
    </div>
  );
};
