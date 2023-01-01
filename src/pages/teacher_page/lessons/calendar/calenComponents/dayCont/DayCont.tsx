import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import filterImg from "../../../../../../assets/teacher_images/calendar/filterImg.svg";
import { ICalendarReducer } from "../../../../../../models/interfaces";
import {
  toNextMonth,
  toPrevMonth,
} from "../../../../../../redux/reducers/calendarList";
import { months } from "../../calStore/calStore";
import { CalTbody } from "./CalTbody";
import { CalThead } from "./calThead/CalThead";
import "./dayCont.css";
import { ToggleMonth } from "./toggleMonth/ToggleMonth";

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
