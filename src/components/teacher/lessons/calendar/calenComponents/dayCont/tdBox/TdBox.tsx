import React, { FC } from "react";
import { IDateDay } from "../../../Calendar";
import "./tdBox.css";

interface TdBoxProps extends IDateDay {
  className?: string;
}

export const TdBox: FC<TdBoxProps> = ({
  dayNumber,
  currentDayEvents,
  className,
}) => {
  currentDayEvents && console.log(currentDayEvents);

  return (
    <td className={`tdBox1 ${className}`}>
      <div className="CalendarCont2NumberBox">{dayNumber}</div>
      <div className="eventBox">
        {currentDayEvents?.map(({ time }) => (
          <div className="CalendarEventBox" key={Math.random()}>
            <div>Դասընթաց</div>
            <div>{time}</div>
          </div>
        ))}
      </div>
    </td>
  );
};
{
  /* <div className="CalendarEventBox">
          <img src="" />
          <div>Название” игры</div>
          <div>20:00</div>
        </div> */
}
