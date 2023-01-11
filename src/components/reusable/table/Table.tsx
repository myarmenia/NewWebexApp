import { FC, ReactNode } from "react";
import { Tbody } from "./Tbody";
import { Thead } from "./Thead";

export interface TableProps<T extends object> {
  rows: {
    name: string;
    selector: (obj: T) => string | number | ReactNode | JSX.Element;
    tdClassName?: string;
    thClassName?: string;
  }[];
  tbodyItems: T[];
  className?: string;
}

export const Table: FC<TableProps<any>> = ({
  rows,
  tbodyItems,
  className = "",
}) => {
  return (
    <div className={"overflow-x-auto " + className}>
      <table>
        <Thead {...{ rows }} />
        <Tbody {...{ rows, tbodyItems }} />
      </table>
    </div>
  );
};
