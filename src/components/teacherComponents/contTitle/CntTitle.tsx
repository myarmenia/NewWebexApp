import { FC } from "react";
import styles from "./contTitle.module.css";

interface ContTitleProps {
  title: string;
}

export const CntTitle: FC<ContTitleProps> = ({ title }) => {
  return (
    <div className={styles.title}>
      <span className={styles.text}>{title}</span>
      <div className={styles.underline} />
    </div>
  );
};
