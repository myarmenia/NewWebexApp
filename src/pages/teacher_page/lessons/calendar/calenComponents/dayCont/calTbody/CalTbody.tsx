import React, { FC } from "react";
import { useSelector } from "react-redux";
import { ICalendarReducer } from "../../../../../../../models/interfaces";
import { TdBox } from "../tdBox/TdBox";

interface CalTbodyProps {}

export const CalTbody: FC<CalTbodyProps> = ({}) => {
  const { datesWeek } = useSelector(
    (state: ICalendarReducer) => state.calendarList
  );
  return (
    <tbody>
      {datesWeek.map((el, ind) => {
        return (
          <tr className="dayCont_tr" key={Math.random()}>
            {el.map(({ dayNumber, currentDayEvents, isCurrentMonth }, i) => {
              return (
                <TdBox
                  {...{ dayNumber, isCurrentMonth, currentDayEvents }}
                  key={Math.random()}
                />
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
