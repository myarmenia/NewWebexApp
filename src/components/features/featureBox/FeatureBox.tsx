import React from "react";
import "./featureBox.css";
import { FeatureBoxProps } from "../../../models/interfaces";
import transparentImg from "../../../images/Features/transparentImg.svg";

export const FeatureBox: React.FC<FeatureBoxProps> = ({
  title,
  staticImg,
  divUrl,
}) => {
  return (
    <div className="featureBox">
      <div className="featureBox_animImgBox">
        <div
          className="featureBoxImage1"
          style={{ backgroundImage: "url('" + divUrl + "')" }}
        ></div>
        <img className="featureBoxImage2" src={transparentImg} alt="" />
        <img src={staticImg} alt="" className="staticImg" />
      </div>

      <p className="featureBoxTitle">{title}</p>
    </div>
  );
};
