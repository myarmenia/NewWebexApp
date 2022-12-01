export interface INavItem {
  children: string | React.ReactNode;
}
export interface ISelect {
  title: string;
  options: string[];
}
export type INavItemsContent = string | ISelect;

export interface FeatureBoxProps {
  divUrl: string | any;
  url: string;
  title: string;
}
export interface SearchBoxProps {
  url: string;
  className: string;
  alt?: string;
  title?: string;
}
export interface LessonProps {
  title: string;
  keys: string[];
  description: string;
  price: string;
  video: string;
}
export type UserSubmitForm = {
  gender: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};
