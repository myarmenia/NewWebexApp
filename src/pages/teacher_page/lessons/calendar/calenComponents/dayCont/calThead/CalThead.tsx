import React, { FC } from "react";
import "./calThead.css";
import { weekDays_long } from "../../../../../../../helper/calStore/calStore";

export const CalThead: FC = () => {
  return (
    <thead id="thead20">
      <tr>
        {weekDays_long.map((el) => (
          <th className="th2" key={Math.random()}>
            {el}
          </th>
        ))}
      </tr>
    </thead>
  );
};
