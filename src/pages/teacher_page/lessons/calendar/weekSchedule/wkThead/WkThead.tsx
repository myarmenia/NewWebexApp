import React, { FC } from "react";
import { weekDays_long } from "../../../../../../helper/calStore/calStore";

export const WkThead: FC = () => {
  return (
    <thead>
      <tr>
        <th className="weekSchTh"></th>
        {weekDays_long.map((el) => (
          <th className="weekSchTh" key={Math.random()}>
            {el}
          </th>
        ))}
      </tr>
    </thead>
  );
};
