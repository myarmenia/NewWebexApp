import React from "react";
import lessongraffic from "../../../../images/controlPanel/lessongraffic.svg";
export const SecondPanel = () => {
  return (
    <div className="secondPanel">
      <div className="secondPanelChild">
        <div className="secondPanelDate">22/12/2022</div>
        <img src={lessongraffic} className="secondPanelImg" />
      </div>
      <div className="secondPanelChild2">
        <div className="number">10</div>
      </div>
      <div className="secondPanelChild3">
        <div className="firstPanelText2">Պահանջված</div>
      </div>
    </div>
  );
};
