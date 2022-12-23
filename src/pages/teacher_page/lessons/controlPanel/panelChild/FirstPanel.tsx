import React from "react";
import "./panelChild.css";
import lessons from "../../../../images/controlPanel/lessons.svg";
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
    <div className="firstPanel">
      <div className="firstPanelChild">
        <img src={url} className="firstPanelImg" />
        <div className="number">{num}</div>
      </div>
      <div className="firstPanelChild2">
        {count ? (
          <div className="number2">
            <span>{count}</span>
          </div>
        ) : (
          count
        )}
        {text ? <div className="firstPanelText">{text}</div> : null}
      </div>
    </div>
  );
};
