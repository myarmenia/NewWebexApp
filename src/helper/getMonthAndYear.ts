import { months } from "./calStore";

export const getMonthAndYear = (date: Date): string =>
  `${months[date.getMonth()]} ${date.toLocaleString("en-US", {
    year: "numeric",
  })}`;
