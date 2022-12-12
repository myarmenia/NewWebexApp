import React, { FC } from "react";
import "./stdThead.css";

export const StdThead: FC = () => {
  return (
    <thead className="relative">
      <tr className="theadTr">
        <th>Ուսանողի Անուն</th>
        <th>Հեռախոս</th>
        <th>Դասընթացի անվանումը</th>
        <th>Ուսուցման ամսաթիվը</th>
        <th>Առաջընթացը</th>
        <th>Տնայիններ</th>
      </tr>
    </thead>
  );
};
