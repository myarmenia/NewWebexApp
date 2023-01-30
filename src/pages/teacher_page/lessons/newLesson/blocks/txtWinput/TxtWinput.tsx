import { FC, ReactNode } from "react";
import styles from "./txtWinput.module.css";

interface TxtWinputProps {
  text: string;
  children: ReactNode;
}

export const TxtWinput: FC<TxtWinputProps> = ({ text, children }) => {
  return (
    <div className={styles.box}>
      <span className={styles.title}>{text}</span>
      {children}
    </div>
  );
};
