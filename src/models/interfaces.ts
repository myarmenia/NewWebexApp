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
  video: string;
}
export interface IteacherMenu {
  id?: number;
  isClicked: boolean;
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
