import React, { FC } from "react";
import { useSelector } from "react-redux";
import { ICalendarReducer } from "../../../../../../../models/interfaces";
import { TrNum } from "../trNum/TrNum";

interface NmTbodyProps {}

export const NmTbody: FC<NmTbodyProps> = () => {
  const { datesWeek } = useSelector(
    (state: ICalendarReducer) => state.calendarList
  );
  return (
    <tbody id="tbodyNumber">
      {datesWeek.map((el) => {
        return <TrNum {...{ el }} key={Math.random()} />;
      })}
    </tbody>
  );
};
