import React, { FC } from "react";
import "./cstmThead.css";

interface CstmTheadProps {
  items: string[];
  thClassName?: string;
}

export const CstmThead: FC<CstmTheadProps> = ({ items, thClassName }) => {
  return (
    <thead className="relative">
      <tr className="theadTr">
        {items.map((el, i) => (
          <th key={i} className={thClassName}>
            {el}
          </th>
        ))}
      </tr>
    </thead>
  );
};
