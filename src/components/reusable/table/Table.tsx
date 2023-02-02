import {
  ButtonHTMLAttributes,
  FC,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import { generateArray } from "../../../helper";
import { CustomBtn } from "../../forms";
import { TablePagination } from "./TablePagination";
import { Tbody } from "./Tbody";
import { Thead } from "./Thead";

export interface TableProps<T> {
  rows: {
    name: string;
    render: (obj: T) => string | number | ReactNode | JSX.Element;
    tdClassName?: string;
    thClassName?: string;
  }[];
  data: T[];
  className?: string;
  paginationLength?: number;
}

export function Table<T>({
  rows,
  data,
  className = "",
  paginationLength = 5,
}: TableProps<T>) {
  const [arr, setArr] = useState<T[]>([]);
  console.log(data);

  return (
    <div className={`${className} overflow-x-auto custom_table`}>
      <table>
        <Thead {...{ rows }} />
        <Tbody {...{ rows, data: arr }} />
      </table>
      <TablePagination
        {...{ data, setArr, paginationLength: paginationLength - 1 }}
      />
    </div>
  );
}
