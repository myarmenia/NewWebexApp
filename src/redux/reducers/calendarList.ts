import { createSlice } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router";
import { IDateDay } from "../../models/interfaces";

interface IChooseDay {
  payload: {
    id: number;
    isCurrentMonth: boolean;
    navigate: NavigateFunction;
  };
}

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
    createDates: (state) => {
      const myDates: IDateDay[] = [];
      const currentDate = new Date(
        state.currentDate.getFullYear(),
        state.currentDate.getMonth(),
        1
      );
      const weekDay = currentDate.getDay();
      currentDate.setDate(currentDate.getDate() - currentDate.getDay());
      while (myDates.length < 35) {
        if (
          currentDate.getDate() === new Date().getDate() &&
          currentDate.getMonth() === new Date().getMonth() &&
          currentDate.getFullYear() === new Date().getFullYear()
        ) {
          myDates.push({
            dayNumber: currentDate.getDate(),
            isActive: true,
            currentDayEvents: createDayEventArray(),
            isCurrentMonth: true,
          });
        } else {
          myDates.push({
            dayNumber: currentDate.getDate(),
            isActive: false,
            currentDayEvents: createDayEventArray(),
            isCurrentMonth: true,
          });
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      if (
        myDates[myDates.length - 1].dayNumber > 7 &&
        myDates[myDates.length - 1].dayNumber !==
          new Date(
            state.currentDate.getFullYear(),
            state.currentDate.getMonth() + 1,
            0
          ).getDate()
      ) {
        while (myDates.length < 42) {
          myDates.push({
            dayNumber: currentDate.getDate(),
            isActive: false,
            currentDayEvents: createDayEventArray(),
            isCurrentMonth: true,
          });
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
      for (let i = 0; i < myDates.length; i++) {
        if (i < weekDay || (i > 30 && myDates[i].dayNumber < 8)) {
          myDates[i].isCurrentMonth = false;
        }
      }

      state.dates = myDates;
    },
    createDatesWeek: (state) => {
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
    chooseDay: (state, { payload }: IChooseDay) => {
      const myDatesWeek = state.datesWeek;
      myDatesWeek.map((el) =>
        el.map((elem) => {
          if (payload.isCurrentMonth) {
            if (elem.dayNumber === payload.id) {
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
  createDatesWeek,
  chooseDay,
  toPrevMonth,
  toNextMonth,
} = calendarList.actions;

export default calendarList.reducer;
