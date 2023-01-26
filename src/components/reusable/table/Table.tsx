import { ReactNode } from "react";
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
}

export const Table = <T extends any>({
  rows,
  data,
  className = "",
}: TableProps<T>) => {
  return (
    <div className={`${className} overflow-x-auto custom_table`}>
      <table>
        <Thead {...{ rows }} />
        <Tbody {...{ rows, data }} />
      </table>
    </div>
  );
};
