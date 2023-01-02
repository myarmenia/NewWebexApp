import React, { FC } from "react";
import { weekDays_long_short } from "../../../../../../helper/calStore/calStore";
import { ThNum } from "./ThNum";

export const NmThead: FC = () => {
  return (
    <thead>
      <tr>
        {weekDays_long_short.map((weeekName) => (
          <ThNum {...{ weeekName }} key={Math.random()} />
        ))}
      </tr>
    </thead>
  );
};
