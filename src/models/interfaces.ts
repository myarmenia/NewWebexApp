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
export interface IImages {
  position: string;
  image: string;
}
