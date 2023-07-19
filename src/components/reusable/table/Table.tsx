import { ReactNode, useEffect, useState } from "react";
import { TablePagination } from "./TablePagination";
import { Tbody } from "./Tbody";
import { Thead } from "./Thead";

export interface TableProps<T> {
  rows: {
    name: string;
    render: (obj: T) => ReactNode | JSX.Element;
    tdClassName?: string;
    thClassName?: string;
  }[];
  data: T[];
  className?: string;
  maxTrs?: number;
  pagItemsLength?: number;
}

export function Table<T>({
  rows,
  data,
  className = "",
  maxTrs,
  pagItemsLength,
}: TableProps<T>) {
  const [arr, setArr] = useState<T[]>([]);
  return (
    <div className={`${className} overflow-x-auto custom_table`}>
      <table>
        <Thead {...{ rows }} />
        <Tbody {...{ rows, data: arr }} />
        {/* <Tbody {...{ rows, data }} /> */}
      </table>
      <TablePagination {...{ data, setArr, maxTrs, pagItemsLength }} />
    </div>
  );
}
