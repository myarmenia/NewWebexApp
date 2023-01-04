import { FC } from "react";
import { TableProps } from "./Table";

export const Thead: FC<Pick<TableProps<any>, "rows">> = ({ rows }) => {
  return (
    <thead>
      <tr>
        {rows.map(({ name, thClassName }, i) => (
          <th key={i} className={thClassName}>
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
};
