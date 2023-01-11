import "./dayCont.css";
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
import { ToggleMonth } from "./ToggleMonth";

export const DayCont: FC = ({}) => {
  const { currentDate } = useAppSelector((state) => state.calendarList);
  const dispatch = useAppDispatch();

  return (
    <div id="dayContainer">
      <div className="caledarHead">
        <div id="dayContainerHead">
          <div id="monthBox">
            <p id="month">{getMonthAndYear(currentDate)}</p>
            <div id="arrowBox">
              <ToggleMonth toggleMonth={() => dispatch(toPrevMonth())} />
              <ToggleMonth
                toggleMonth={() => dispatch(toNextMonth())}
                className="rotate-180"
              />
            </div>
          </div>
          <div id="calendarHeadBox">
            <FilterBtn className="calendarFilterBtn">
              Ֆիլտր
              <img src={filterImg} />
            </FilterBtn>
          </div>
        </div>
      </div>
      <div id="dayContainerContent">
        <table id="w-full border-collapse h-[inherit]">
          <CalThead />
          <CalTbody />
        </table>
      </div>
    </div>
  );
};
