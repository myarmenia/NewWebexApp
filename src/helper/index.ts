export { generateArray } from "./generateArray";
export { getCurrentWeekStartToEnd } from "./getCurrentWeekStartToEnd";
export { getMonthAndYear } from "./getMonthAndYear";
export { uniqueKey } from "./uniqueKey";
export {
  months,
  weekDays_long,
  weekDays_long_short,
  weekScheduleTime,
  weekSheduleEvents,
} from "./calStore";
export const thisDate = `${new Date().getDate()}.${
  new Date().getMonth().toString().length <= 2 && "" + new Date().getMonth() + 1
}.${new Date().getFullYear()}`;
export const strOrNumber = (e: string | number): number =>
  typeof e === "string" ? parseInt(e) : e;
