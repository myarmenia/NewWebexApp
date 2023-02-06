export {
  months,
  weekDays_long,
  weekDays_long_short,
  weekScheduleTime,
  weekSheduleEvents,
} from "./calStore";
export { generateArray } from "./generateArray";
export { getCurrentWeekStartToEnd } from "./getCurrentWeekStartToEnd";
export { getMonthAndYear } from "./getMonthAndYear";
export { enterPress } from "./enterPress";
export { toFormData, toObject } from "./formData_funcs";

export const thisDate = `${new Date().getDate()}.${
  new Date().getMonth().toString().length <= 2 && "" + new Date().getMonth() + 1
}.${new Date().getFullYear()}`;
export const strOrNumber = (e: string | number): number =>
  typeof e === "string" ? parseInt(e) : e;
export const addZero = (i: number | string) =>
  `${i}`.length < 2 ? `0${i}` : i;
