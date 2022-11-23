import { INavItemsContent } from "../../models/interfaces";

export interface ISelect {
  title: string;
  options: string[];
}
export const headerStore: INavItemsContent[] = [
  "Գլխավոր",
  "Հարթակ",
  "Սակագներ",
  { title: "Դասընթացներ", options: ["aaaa", "bbb"] },
  { title: "Աղբյուրներ", options: ["cccc", "1111111"] },
  "Գրանցում",
];
