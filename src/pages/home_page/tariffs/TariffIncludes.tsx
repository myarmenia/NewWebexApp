import React, { FC } from "react";
import symbol from "../../images/Tarifs/symbol.png";
const TariffIncludes: FC = () => {
  return (
    <div className="tariff-includes">
      <img src={symbol} />
      <p>Սակագինը ներառում է՝</p>
    </div>
  );
};

export default TariffIncludes;
