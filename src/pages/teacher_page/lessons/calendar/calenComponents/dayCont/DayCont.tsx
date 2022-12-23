import React, { FC } from "react";
import "./dayCont.css";
import filterImg from "../../../../../../assets/teacher_images/calendar/filterImg.svg";
import { CalTbody } from "./calTbody/CalTbody";
import { CalThead } from "./calThead/CalThead";
import { useDispatch, useSelector } from "react-redux";
import {
  toPrevMonth,
  toNextMonth,
} from "../../../../../../redux/reducers/calendarList";
import { ToggleMonth } from "./toggleMonth/ToggleMonth";
import { ICalendarReducer } from "../../../../../../models/interfaces";
import { months } from "../../calStore/calStore";

interface DayContProps {
  // currentDate: Date;
}

export const DayCont: FC<DayContProps> = ({}) => {
  const { currentDate } = useSelector(
    (state: ICalendarReducer) => state.calendarList
  );
  const dispatch = useDispatch();
  const toMonth = `${
    months[currentDate.getMonth()]
  } ${currentDate.toLocaleString("en-US", { year: "numeric" })}`;
  return (
    <div id="CalendarBody_DayContainer">
      <div className="CaledarHead">
        <div id="CalendarBody_DayContainerHead">
          <div id="monthBox">
            <p id="month">{toMonth}</p>
            <div id="ArrowBox">
              <ToggleMonth toggleMonth={() => dispatch(toPrevMonth())} />
              <ToggleMonth
                toggleMonth={() => dispatch(toNextMonth())}
                className="rotate-180"
              />
            </div>
          </div>
          <div id="CalendarHeadBox2">
            <button className="CalendarHeadFilterBtn">
              Ֆիլտր
              <img src={filterImg} />
            </button>
          </div>
        </div>
      </div>
      <div id="CalendarBody_DayContainerContent">
        <table id="table2">
          <CalThead />
          <CalTbody />
        </table>
      </div>
    </div>
  );
};
