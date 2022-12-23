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
      {el.map(({ dayNumber, isActive, notCurrentMonth }) => {
        return (
          <TdNum
            {...{ dayNumber, isActive, notCurrentMonth }}
            key={Math.random()}
          />
        );
      })}
    </tr>
  );
};
