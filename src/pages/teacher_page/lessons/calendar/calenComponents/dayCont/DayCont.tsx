import { FC } from "react";
import filterImg from "../../../../../../assets/teacher_images/calendar/filterImg.svg";
import { FilterBtn } from "../../../../../../components/reusable";
import { getMonthAndYear } from "../../../../../../helper";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks";
import {
  toNextMonth,
  toPrevMonth,
} from "../../../../../../redux/reducers/calendarList";
import { CalTbody } from "./CalTbody";
import { CalThead } from "./calThead/CalThead";
import "./dayCont.css";
import { ToggleMonth } from "./toggleMonth/ToggleMonth";

interface DayContProps {
  // currentDate: Date;
}

export const DayCont: FC<DayContProps> = ({}) => {
  const { currentDate } = useAppSelector((state) => state.calendarList);
  const dispatch = useAppDispatch();

  return (
    <div id="CalendarBody_DayContainer">
      <div className="CaledarHead">
        <div id="CalendarBody_DayContainerHead">
          <div id="monthBox">
            <p id="month">{getMonthAndYear(currentDate)}</p>
            <div id="ArrowBox">
              <ToggleMonth toggleMonth={() => dispatch(toPrevMonth())} />
              <ToggleMonth
                toggleMonth={() => dispatch(toNextMonth())}
                className="rotate-180"
              />
            </div>
          </div>
          <div id="CalendarHeadBox2">
            <FilterBtn className="CalendarHeadFilterBtn">
              Ֆիլտր
              <img src={filterImg} />
            </FilterBtn>
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
