import React, { FC } from "react";
import "./calThead.css";
import { weekDays } from "../../../calStore/calStore";

export const CalThead: FC = () => {
  return (
    <thead id="thead20">
      <tr>
        {weekDays.map((el) => (
          <th className="th2" key={Math.random()}>
            {el}
          </th>
        ))}
      </tr>
    </thead>
  );
};
