import { IWeekEvent } from "../../../../../models/interfaces";

export const weekDays: string[] = [
  "Կիրակի",
  "Երկուշաբթի",
  "Երեքշաբթի",
  "Չորեքշաբթի",
  "Հինգշաբթի",
  "Ուրբաթ",
  "Շաբաթ",
];
export const weekDayNames: string[] = [
  "Կիր",
  "Երկ",
  "Երք",
  "Չոր",
  "Հնգ",
  "Ուրբ",
  "Շբթ",
];
export const weekScheduleTime: string[] = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "00:00",
];
export const weekSheduleEvents: IWeekEvent[] = [
  {
    title: "Դասընթացի վերնագիրը",
    lessonDuration: 4,
    weekday: 1,
    evTime: 8,
  },
  {
    title: "Դասընթացի վերնագիրը",
    lessonDuration: 2,
    weekday: 2,
    evTime: 11,
  },
  {
    title: "Դասընթացի վերնագիրը",
    lessonDuration: 2,
    weekday: 3,
    evTime: 10,
  },
  {
    title: "Դասընթացի վերնագիրը",
    lessonDuration: 2,
    weekday: 4,
    evTime: 12,
  },
  {
    title: "Դասընթացի վերնագիրը",
    lessonDuration: 2,
    weekday: 6,
    evTime: 10,
  },
];
