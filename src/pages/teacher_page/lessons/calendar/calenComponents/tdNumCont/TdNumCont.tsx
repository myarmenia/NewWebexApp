import React, { FC } from "react";
import styles from "./tdNumCont.module.css";
import { NmTbody } from "./NmTbody";
import { NmThead } from "./NmThead";

interface TdNumContProps {}

export const TdNumCont: FC<TdNumContProps> = ({}) => {
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
