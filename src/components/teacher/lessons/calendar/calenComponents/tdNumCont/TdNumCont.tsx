import React, { FC } from "react";
import "./tdNumCont.css";
import { IDateDay } from "../../Calendar";
import { TdNum } from "./tdNum/TdNum";
import { ThNum } from "./thNum/ThNum";

interface TdNumContProps {
  datesWeek: IDateDay[][];
}

export const TdNumCont: FC<TdNumContProps> = ({ datesWeek }) => {
  const weekDayNames: string[] = [
    "Կիր",
    "Երկ",
    "Երք",
    "Չոր",
    "Հնգ",
    "Ուրբ",
    "Շբթ",
  ];

  return (
    <div id="CalendarBody_NumericContainer">
      <div id="CalendarNumbers">
        <table id="tableNumber">
          <thead>
            <tr>
              {weekDayNames.map((weeekName) => (
                <ThNum {...{ weeekName }} key={Math.random()} />
              ))}
            </tr>
          </thead>
          <tbody id="tbodyNumber">
            {datesWeek.map((el, ind) => {
              return (
                <tr key={Math.random()}>
                  {el.map(({ dayNumber, isActive, notCurrentMonth }, i) => {
                    return (
                      <TdNum
                        {...{ dayNumber, isActive, notCurrentMonth }}
                        key={Math.random()}
                      />
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
