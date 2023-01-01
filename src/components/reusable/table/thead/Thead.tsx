import { FC } from "react";
import { TableProps } from "../Table";
import "./thead.css";

type TheadProps = Pick<TableProps, "rows">;

export const Thead: FC<TheadProps> = ({ rows }) => {
  return (
    <thead>
      <tr className="theadTr">
        {rows.map(({ name, thClassName }, i) => (
          <th key={i} className={"custom_th " + thClassName}>
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
};
