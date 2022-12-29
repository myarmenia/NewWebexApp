import { FC } from "react";
import "./thead.css";

interface TheadProps {
  items: string[];
  thClassName?: string;
}

export const Thead: FC<TheadProps> = ({ items, thClassName }) => {
  return (
    <thead className="relative">
      <tr className="theadTr">
        {items.map((el, i) => (
          <th key={i} className={"custom_th "+  thClassName}>
            {el}
          </th>
        ))}
      </tr>
    </thead>
  );
};
