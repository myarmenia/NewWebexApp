import React, { FC } from "react";
import { weekDayNames } from "../../../calStore/calStore";
import { ThNum } from "../thNum/ThNum";

export const NmThead: FC = () => {
  return (
    <thead>
      <tr>
        {weekDayNames.map((weeekName) => (
          <ThNum {...{ weeekName }} key={Math.random()} />
        ))}
      </tr>
    </thead>
  );
};
