import React from "react";
import styles from "./panelChild.module.css";
interface FirstPanelProps {
  url?: string;
  num?: string;
  count?: string;
  text?: string;
}
export const FirstPanel: React.FC<FirstPanelProps> = ({
  url,
  num,
  count,
  text,
}) => {
  return (
    <div className={styles.firstPanel}>
      <div className={styles.firstPanelChild}>
        <img src={url} className={styles.firstPanelImg} alt="" />
        <div className={styles.number}>{num}</div>
      </div>
      <div className={styles.firstPanelChild2}>
        {count ? (
          <div className={styles.number2}>
            <span>{count}</span>
          </div>
        ) : (
          count
        )}
        {text ? <div className={styles.firstPanelText}>{text}</div> : null}
      </div>
    </div>
  );
};
