import React, { FC } from "react";
import { weekDays } from "../../calStore/calStore";

export const WkThead: FC = () => {
  return (
    <thead>
      <tr>
        <th className="weekSchTh"></th>
        {weekDays.map((el) => (
          <th className="weekSchTh" key={Math.random()}>
            {el}
          </th>
        ))}
      </tr>
    </thead>
  );
};
