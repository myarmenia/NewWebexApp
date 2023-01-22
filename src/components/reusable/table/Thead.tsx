import { TableProps } from "./Table";

export const Thead = <T extends any>({ rows }: Pick<TableProps<T>, "rows">) => {
  return (
    <thead>
      <tr>
        {rows.map(({ name, thClassName = "" }, i) => (
          <th key={i} className={thClassName}>
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
};
