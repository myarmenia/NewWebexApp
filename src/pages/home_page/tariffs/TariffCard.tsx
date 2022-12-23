import React from "react";
import TariffIncludes from "./TariffIncludes";
import "./tariffs.css";
const TariffCard: React.FC = () => {
  return (
    <div className="tariffCard">
      <div className="card-header">
        <div className="card-img"></div>
        <div className="card-name-whose">
          <div className="card-name">Սակագնի անունը</div>
          <div className="card-whose">ում համար է նախատեսված</div>
        </div>
      </div>
      <div className="price">1500 դրամ</div>
      <button className="attemptButton">Փորձել 30 օր անվճար</button>
      <div className="includes">Սակագինը ներառում է՝</div>
      <TariffIncludes />
      <TariffIncludes />
      <TariffIncludes />
    </div>
  );
};

export default TariffCard;
