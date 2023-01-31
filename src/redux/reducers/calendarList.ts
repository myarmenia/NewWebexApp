import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router";
import { generateArray } from "../../helper";
import { IDateDay } from "../../models/interfaces";

interface IChooseDay {
  id: number;
  isCurrentMonth: boolean;
  navigate: NavigateFunction;
}

const createDayEventArray = () =>
  generateArray(Math.floor(Math.random() * 8), {
    time: "20:00",
  });

const initialState = {
  currentDate: new Date() as Date,
  dates: [] as IDateDay[],
  datesWeek: [] as IDateDay[][],
  chosenDay: new Date() as Date,
};

const calendarList = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    createDates: (state) => {
      const myDates: IDateDay[] = [];
      const currentDate = new Date(
        state.currentDate.getFullYear(),
        state.currentDate.getMonth(),
        1
      );
      currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1);
      while (myDates.length < 35) {
        if (
          currentDate.getDate() === state.chosenDay.getDate() &&
          currentDate.getMonth() === state.chosenDay.getMonth() &&
          currentDate.getFullYear() === state.chosenDay.getFullYear()
        ) {
          myDates.push({
            isActive: true,
            currentDayEvents: createDayEventArray(),
            isCurrentMonth:
              currentDate.getMonth() === state.currentDate.getMonth(),
            date: new Date(currentDate),
          });
        } else {
          myDates.push({
            isActive: false,
            currentDayEvents: createDayEventArray(),
            isCurrentMonth:
              currentDate.getMonth() === state.currentDate.getMonth(),
            date: new Date(currentDate),
          });
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      if (
        myDates[myDates.length - 1].date.getDate() > 7 &&
        myDates[myDates.length - 1].date.getDate() !==
          new Date(
            state.currentDate.getFullYear(),
            state.currentDate.getMonth() + 1,
            0
          ).getDate()
      ) {
        while (myDates.length < 42) {
          if (
            currentDate.getDate() === state.chosenDay.getDate() &&
            currentDate.getMonth() === state.chosenDay.getMonth() &&
            currentDate.getFullYear() === state.chosenDay.getFullYear()
          ) {
            myDates.push({
              isActive: true,
              currentDayEvents: createDayEventArray(),
              isCurrentMonth:
                currentDate.getMonth() === state.currentDate.getMonth(),
              date: new Date(currentDate),
            });
          } else {
            myDates.push({
              isActive: false,
              currentDayEvents: createDayEventArray(),
              isCurrentMonth:
                currentDate.getMonth() === state.currentDate.getMonth(),
              date: new Date(currentDate),
            });
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
      state.dates = myDates;
    },
    combineDates: (state) => {
      let myDatesWeek: IDateDay[][] = [];
      let weeksInMonth = state.dates.length / 7;
      let vari = 0;
      for (let b = 0; b < weeksInMonth; b++) {
        const some: IDateDay[] = [];
        for (let b = 0; b < state.dates.length / weeksInMonth; b++) {
          some.push(state.dates[vari]);
          vari++;
        }
        myDatesWeek = [...myDatesWeek, some];
      }
      state.datesWeek = myDatesWeek;
    },
    chooseDay: (state, { payload }: PayloadAction<IChooseDay>) => {
      const myDatesWeek = state.datesWeek;
      myDatesWeek.map((el) =>
        el.map((elem) => {
          if (payload.isCurrentMonth) {
            if (elem.date.getDate() === payload.id) {
              state.chosenDay = new Date(state.currentDate);
              state.chosenDay.setDate(payload.id);
              payload.navigate("week_schedule");
              return (elem.isActive = true);
            }
            return (elem.isActive = false);
          }
          return elem;
        })
      );
      state.datesWeek = myDatesWeek;
    },
    toPrevMonth: (state) => {
      const date = new Date(
        state.currentDate.getFullYear(),
        state.currentDate.getMonth() - 1,
        state.currentDate.getDate()
      );
      state.currentDate = date;
    },
    toNextMonth: (state) => {
      const date = new Date(
        state.currentDate.getFullYear(),
        state.currentDate.getMonth() + 1,
        state.currentDate.getDate()
      );
      state.currentDate = date;
    },
  },
});

export const {
  createDates,
  combineDates,
  chooseDay,
  toPrevMonth,
  toNextMonth,
} = calendarList.actions;

export default calendarList.reducer;
