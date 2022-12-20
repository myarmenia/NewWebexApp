import React from "react";
import { FirstPanel } from "./FirstPanel";
import "./panelChild.css";
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
    <div className="panelContainer">
      <div className="title">{title}</div>
      {isActiv ? (
        <FirstPanel url={url} num={num} count={count} text={text} />
      ) : (
        <SecondPanel />
      )}
    </div>
  );
};
