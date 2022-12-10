import React, { useState } from "react";
import "./editGraffic.css";
interface GrafficChild {
  weekDay: string;
  times: any;
}

const GrafficChild: React.FC<GrafficChild> = ({ weekDay, times }) => {
  return (
    <div className="grafficContainer">
      <p className="day">{weekDay}</p>
      <div className="time">{times}</div>
    </div>
  );
};

export default GrafficChild;
