import React, { FC } from "react";
import "./dayCont.css";
import filterImg from "../../../../../../images/Teacher/Calendar/filterImg.svg";
import arrowImg from "../../../../../../images/Teacher/Calendar/arrowLeft.svg";
import { IDateDay } from "../../Calendar";
import { TdBox } from "./tdBox/TdBox";

interface DayContProps {
  currentDate: Date;
  datesWeek: IDateDay[][];
}

export const DayCont: FC<DayContProps> = ({ currentDate, datesWeek }) => {
  const weekDays: string[] = [
    "Կիրակի",
    "Երկուշաբթի",
    "Երեքշաբթի",
    "Չորեքշաբթի",
    "Հինգշաբթի",
    "Ուրբաթ",
    "Շաբաթ",
  ];
  return (
    <div id="CalendarBody_DayContainer">
      <div className="CaledarHead">
        <div id="CalendarBody_DayContainerHead">
          <div id="monthBox">
            <p id="month">
              {currentDate.toLocaleString("ru-RU", { month: "long" })}
            </p>
            <div id="ArrowBox">
              <img src={arrowImg} className="arrow" alt="" />
              <img src={arrowImg} className="arrow rotate-180" alt="" />
            </div>
          </div>
          <div id="CalendarHeadBox2">
            <button className="CalendarHeadFilterBtn">
              Ֆիլտր
              <img src={filterImg} />
            </button>
            <div id="FilterContainer">
              <div className="checkboxBox">
                <label className="checkboxContainer">
                  <input type="checkbox" />
                  <span className="checkmark"></span>{" "}
                </label>
                Все
              </div>
              <div className="checkboxBox">
                <label className="checkboxContainer">
                  <input type="checkbox" />
                  <span className="checkmark"></span>{" "}
                </label>
                Активные игры
              </div>
              <div className="checkboxBox">
                <label className="checkboxContainer">
                  <input type="checkbox" />
                  <span className="checkmark"></span>{" "}
                </label>
                Настольные игры
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="CalendarBody_DayContainerContent">
        <table id="table20">
          <thead id="thead20">
            <tr>
              {weekDays.map((el) => (
                <th className="th2" key={Math.random()}>
                  {el}
                </th>
              ))}
            </tr>
          </thead>
          <tbody id="tbody20">
            {datesWeek.map((el, ind) => {
              return (
                <tr key={Math.random()}>
                  {el.map(
                    ({ dayNumber, notCurrentMonth, currentDayEvents }, i) => {
                      return (
                        <TdBox
                   
                          {...{ dayNumber, notCurrentMonth, currentDayEvents }}
                          key={Math.random()}
                        />
                      );
                    }
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
