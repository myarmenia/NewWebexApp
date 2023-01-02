import { months } from "./calStore/calStore";

export const getCurrentWeekStartToEnd = (date: Date): string => {
  const myDate = new Date(date);
  let weekStartDay: number = 0;
  let weekEndDay: number = 0;

  for (let i = 0; i < Infinity; i++) {
    if (myDate.getDay() > 0) {
      myDate.setDate(myDate.getDate() - 1);
    }
    if (myDate.getDay() === 0) {
      weekStartDay = myDate.getDate();
      break;
    }
  }
  for (let x = 0; x < 7; x++) {
    if (myDate.getDay() < 6) {
      myDate.setDate(myDate.getDate() + 1);
    }
    if (myDate.getDay() === 6) {
      weekEndDay = myDate.getDate();
    }
  }

  return `${months[date.getMonth()]} ${weekStartDay} - ${weekEndDay}`;
};
