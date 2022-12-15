export interface INavItem {
  children: string | React.ReactNode;
}
export interface ISelect {
  title: string;
  options: string[];
}
export type INavItemsContent = string | ISelect;
export interface FeatureBoxProps {
  divUrl: string;
  staticImg: string;
  title: string;
}
export interface SearchBoxProps {
  url: string;
  className: string;
  alt?: string;
  title?: string;
  animDelay?: number;
}
export interface LessonProps {
  title: string;
  keys: string[];
  description: string;
  price: string;
  video?: string;
}
export interface IteacherMenu {
  id?: number;
  img: string;
  activeImg: string;
  title: string;
  to?: string;
  toSubPaths?: {
    title: string;
    path: string;
    isClicked: boolean;
  }[];
}
export interface MenuImage {
  bgColor?: string;
}
export interface ILessonCourses {
  lessonsCount: number;
}
export type UserSubmitForm = {
  gender: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};
export interface IPaginationItem {
  id: number;
  isActive: boolean;
  isCompleted: boolean;
}
export interface IDateDay {
  dayNumber: number;
  isActive?: boolean;
  notCurrentMonth?: boolean;
  currentDayEvents?: {
    evName?: string;
    time: string;
  }[];
}
export interface IWeekEvent {
  title: string;
  lessonDuration?: number;
  weekday?: number; // weekday must be from 1 to 7 => {weekday === row}
  evTime?: number; // evTime must be from 1 to 17 => {evTime === col}
}
export interface ICalendarReducer {
  calendarList: {
    dates: IDateDay[];
    datesWeek: IDateDay[][];
    currentDate: Date;
  };
}
export interface IStageLesson {
  lessonNumber?: number;
  title: string;
}
export interface IStudentTd {
  [key: string]: string | number | string[] | Date | Object | undefined;
  image?: string;
  name: string;
  phoneNumber: string;
  lessons: {
    title: string;
    date: string | Date;
    progres: number;
    homework: string;
  }[];
}
