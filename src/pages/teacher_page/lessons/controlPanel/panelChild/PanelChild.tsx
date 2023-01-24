import React from "react";
import { FirstPanel } from "./FirstPanel";
import styles from "./panelChild.module.css";
import { SecondPanel } from "./SecondPanel";
interface PanelChildProps {
  title: string;
  isActiv?: boolean;
  url?: string;
  num?: string;
  count?: string;
  text?: string;
}
export const PanelChild: React.FC<PanelChildProps> = ({
  isActiv,
  title,
  url,
  num,
  count,
  text,
}) => {
  return (
    <div className={styles.panelContainer}>
      <div className={styles.title}>{title}</div>
      {isActiv ? (
        <FirstPanel url={url} num={num} count={count} text={text} />
      ) : (
        <SecondPanel />
      )}
    </div>
  );
};
