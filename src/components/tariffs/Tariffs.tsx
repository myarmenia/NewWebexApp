import React from "react";
import TariffCard from "./TariffCard";
import "./tariffs.css";
const Tariffs: React.FC = () => {
  return (
    <div className="tariff">
      <div className="tariffChild">
        <div className="tariffTitle">Բաժանորդագրվիր և օգտվիր դասընթացներից</div>
        <div className="tariffChoose">
          Ընտրիր սակագնային պլաններից որևէ մեկը ․․․
        </div>
        <div className="choose-month-year">
          <div className="choose-month">Ամսական</div>
          <div className="switch-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="choose-year">
            <div className="discount">20% զեղչ</div>
            Տարեկան
          </div>
        </div>
        <div className="tariffContainer">
          <TariffCard />
          <TariffCard />
          <TariffCard />
          <TariffCard />
          <TariffCard />
        </div>
      </div>
    </div>
  );
};

export default Tariffs;
