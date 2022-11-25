import React from "react";
import './featureBox.css'
import { FeatureBoxProps } from "../../../models/interfaces";

export const FeatureBox: React.FC<FeatureBoxProps> = ({
  title,
  url,
  divUrl,
}) => {
  return (
    <div className="featureBox">
      <div className="featureBoxImage" style={{ backgroundImage: "url('" + divUrl + "')" }}>
        <img src={url} alt="" />
      </div>
      <p className="featureBoxTitle">{title}</p>
    </div>
  );
};
