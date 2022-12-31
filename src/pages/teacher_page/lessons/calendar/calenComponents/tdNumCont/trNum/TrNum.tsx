import React, { FC } from "react";
import { IDateDay } from "../../../../../../../models/interfaces";
import { TdNum } from "../tdNum/TdNum";

interface TrNumProps {
  el: IDateDay[];
  // datesWeek: IDateDay[][];
}
export const TrNum: FC<TrNumProps> = ({ el }) => {
  return (
    <tr>
      {el.map(({ dayNumber, isActive, isCurrentMonth }) => {
        return (
          <TdNum
            {...{ dayNumber, isActive, isCurrentMonth }}
            key={Math.random()}
          />
        );
      })}
    </tr>
  );
};
