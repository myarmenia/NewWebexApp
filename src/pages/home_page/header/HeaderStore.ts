import { INavItemsContent } from "../../../models/interfaces";

export const headerStore: INavItemsContent[] = [
  { title: "Գլխավոր" },
  { title: "Հարթակ" },
  { title: "Սակագներ" },
  { title: "Դասընթացներ" },
  {
    dropDownTitle: "Ընկերություն",
    options: [
      { title: "student", path: "/student/perosnal_info" },
      { title: "login", path: "/login" },
      { title: "teacher", path: "/teacher" },
    ],
    className: "text-gray",
  },
  { title: "Գրանցում", },
];
