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
  pagMaxLength?: number;
}

export function Table<T>({
  rows,
  data,
  className = "",
  pagMaxLength,
}: TableProps<T>) {
  const [arr, setArr] = useState<T[]>([]);
  return (
    <div className={`${className} overflow-x-auto custom_table`}>
      <table>
        <Thead {...{ rows }} />
        <Tbody {...{ rows, data: arr }} />
        {/* <Tbody {...{ rows, data }} /> */}
      </table>
      <TablePagination {...{ data, setArr, pagMaxLength }} />
    </div>
  );
}
