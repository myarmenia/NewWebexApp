import { useState } from "react";
import { IDateDay } from "../Calendar";
export const useCreateCalendar = (year: number, changeMonth: number) => {
  //  add array to "currentDayEvents: []" for event boxes in every day
  const dates: IDateDay[] = [];
  const date = new Date(year, changeMonth, 1);

  let weekDay = date.getDay();
  date.setDate(date.getDate() - date.getDay());

  while (dates.length < 35) {
    if (date.getDate() === new Date().getDate()) {
      dates.push({
        dayNumber: date.getDate(),
        isActive: true,
        currentDayEvents: [
          {
            time: "20:00",
          },
          {
            time: "20:00",
          },
          {
            time: "20:00",
          },
          {
            time: "20:00",
          },
          {
            time: "20:00",
          },
        ],
      });
    }
    else{

      dates.push({
        dayNumber: date.getDate(),
      isActive: false,
      currentDayEvents: [
        {
          time: "20:00",
        },
        {
          time: "20:00",
        },
        {
          time: "20:00",
        },
        {
          time: "20:00",
        },
        {
          time: "20:00",
        },
      ],
    });
  }
    date.setDate(date.getDate() + 1);
  }
  if (
    dates[dates.length - 1].dayNumber > 20 &&
    dates[dates.length - 1].dayNumber !==
      new Date(date.getFullYear(), changeMonth + 1, 0).getDate()
  ) {
    while (dates.length < 42) {
      dates.push({ dayNumber: date.getDate(), isActive: false });
      date.setDate(date.getDate() + 1);
    }
  }
  for (let i = 0; i < dates.length; i++) {
    if (i < weekDay || (i > 30 && dates[i].dayNumber < 7)) {
      dates[i].notCurrentMonth = true;
    }
  }

  return dates;
};
