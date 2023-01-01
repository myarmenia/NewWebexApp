import { FC } from "react";
import { useSelector } from "react-redux";
import { ICalendarReducer } from "../../../../../../models/interfaces";
import { TdBox } from "./tdBox/TdBox";

interface CalTbodyProps {}

export const CalTbody: FC<CalTbodyProps> = ({}) => {
  const { datesWeek } = useSelector(
    (state: ICalendarReducer) => state.calendarList
  );
  return (
    <tbody>
      {datesWeek.map((week, ind) => {
        return (
          <tr className="dayCont_tr" key={Math.random()}>
            {week.map((day, i) => (
              <TdBox {...day} key={Math.random()} />
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};
