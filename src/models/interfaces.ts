export interface INavItem {
  children: string | React.ReactNode;
}
export interface ISelect {
  title: string;
  options: string[];
}
export type INavItemsContent = string | ISelect;
