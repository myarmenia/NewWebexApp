import { createSlice } from "@reduxjs/toolkit";
import { IDateDay } from "../../models/interfaces";

const createDayEventArray = () =>
  Array.from({ length: Math.floor(Math.random() * 8) }).map(() => ({
    time: "20:00",
  }));

const initialState = {
  currentDate: new Date() as Date,
  dates: [] as IDateDay[],
  datesWeek: [] as IDateDay[][],
};

const calendarList = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    logDates: (state) => {
      console.log(state);
    },
    createDates: (state) => {
      state.dates = [];
      const currentDate = new Date(
        state.currentDate.getFullYear(),
        state.currentDate.getMonth(),
        1
      );
      const weekDay = currentDate.getDay();
      currentDate.setDate(currentDate.getDate() - currentDate.getDay());
      while (state.dates.length < 35) {
        if (
          currentDate.getDate() === new Date().getDate() &&
          currentDate.getMonth() === new Date().getMonth() &&
          currentDate.getFullYear() === new Date().getFullYear()
        ) {
          state.dates.push({
            dayNumber: currentDate.getDate(),
            isActive: true,
            currentDayEvents: createDayEventArray(),
          });
        } else {
          state.dates.push({
            dayNumber: currentDate.getDate(),
            isActive: false,
            currentDayEvents: createDayEventArray(),
          });
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      if (
        state.dates[state.dates.length - 1].dayNumber > 7 &&
        state.dates[state.dates.length - 1].dayNumber !==
          new Date(
            state.currentDate.getFullYear(),
            state.currentDate.getMonth() + 1,
            0
          ).getDate()
      ) {
        while (state.dates.length < 42) {
          state.dates.push({
            dayNumber: currentDate.getDate(),
            isActive: false,
            currentDayEvents: createDayEventArray(),
          });
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
      for (let i = 0; i < state.dates.length; i++) {
        if (i < weekDay || (i > 30 && state.dates[i].dayNumber < 8)) {
          state.dates[i].notCurrentMonth = true;
        }
      }
    },
    createDatesWeek: (state) => {
      state.datesWeek = [];
      let weeksInMonth = state.dates.length / 7;
      let vari = 0;
      for (let b = 0; b < weeksInMonth; b++) {
        const some: IDateDay[] = [];
        for (let b = 0; b < state.dates.length / weeksInMonth; b++) {
          some.push(state.dates[vari]);
          vari++;
        }
        state.datesWeek = [...state.datesWeek, some];
      }
    },
    chooseDay: (state, { payload }) => {
      state.datesWeek.map((el) =>
        el.map((elem) => {
          if (!elem.notCurrentMonth) {
            if (elem.dayNumber === payload) {
              return (elem.isActive = true);
            }
            return (elem.isActive = false);
          }
          return elem;
        })
      );
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
  createDatesWeek,
  chooseDay,
  toPrevMonth,
  toNextMonth,
} = calendarList.actions;

export default calendarList.reducer;
