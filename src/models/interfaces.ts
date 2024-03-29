import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface INavItem {
  children: string | React.ReactNode;
}

export interface IHeaderDropDownOption {
  title?: string;
  path?: string;
  onClick?: () => void;
}
export interface IHeaderDropDown {
  dropDownTitle: string;
  options: IHeaderDropDownOption[];
  className?: string;
}
export type INavItemsContent =
  | { title: string; path?: string }
  | IHeaderDropDown;

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
  title?: string;
  keys: string[];
  description?: string;
  price: string;
  video?: string;
  to?: string;
  studentsCount?: number;
}
export interface IteacherMenu {
  title: string;
  img: string;
  activeImg: string;
  id?: number;
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
  isActive?: boolean;
  isCurrentMonth: boolean;
  currentDayEvents?: {
    evName?: string;
    time: string;
  }[];
  date: Date;
}
export interface IWeekEvent {
  title: string;
  lessonDuration?: number;
  weekday?: number; // weekday must be from 1 to 7 => {weekday === row}
  evTime?: number | string; // evTime must be from 1 to 17 => {evTime === col}
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
export interface IDataExample {
  user: ILessonLoaderObj;
}

export interface ILessonLoaderObj {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ILessonLoaderData {
  obj: ILessonLoaderObj;
  lessonsObj: ILessonLoaderObj[];
  paramsId: number;
  paramsLes: number;
}
export interface IStudentLoaderData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export interface IOtherLessonLoaderData {
  data: ILessonLoaderObj[];
  students: IStudentLoaderData[];
  // lessonsObj: ILessonLoaderObj[];
  // paramsId: number;
  // paramsLes: number;
}
