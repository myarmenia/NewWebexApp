import React, { FC } from "react";
import "./stdThead.css";

interface StdTheadProps {
  items: string[];
}

export const StdThead: FC<StdTheadProps> = ({ items }) => {
  return (
    <thead className="relative">
      <tr className="theadTr">
        {items.map((el, i) => (
          <th key={i}>{el}</th>
        ))}
      </tr>
    </thead>
  );
};
