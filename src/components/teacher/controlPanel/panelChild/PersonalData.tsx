import React from "react";
import user from "../../../../images/controlPanel/user.svg";
import star from "../../../../images/controlPanel/star.svg";
interface PanelDataProps {
  title: string;
  isActiv?: boolean;
}
const PersonalData: React.FC<PanelDataProps> = ({ title }) => {
  return (
    <div className="panelContainer">
      <div className="my_background_04" />
      <div className="title">{title}</div>
      <div className="panelData">
        <img src={user} className="panelDataImg" />
        <div className="stars">
          <img src={star} className="star" />
          <img src={star} className="star" />
          <img src={star} className="star" />
          <img src={star} className="star" />
          <img src={star} className="star" />
          <div className="count">(25)</div>
        </div>
      </div>

      <div className="panelData2">
        <div className="panelDataText">Պահանջված</div>
      </div>
    </div>
  );
};

export default PersonalData;
