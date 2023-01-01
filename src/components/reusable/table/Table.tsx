import "./table.css";
import { FC, ReactNode } from "react";
import { Tbody } from "./Tbody";
import { Thead } from "./thead/Thead";

export interface TableProps {
  rows: {
    name: string;
    selector: (obj: any) => string | number | ReactNode | JSX.Element;
    tdClassName?: string;
    thClassName?: string;
  }[];
  tbodyItems: any[];
}

export const Table: FC<TableProps> = ({ rows, tbodyItems }) => {
  return (
    <div className="custom_table_container">
      <table className="custom_table">
        <Thead {...{ rows }} />
        <Tbody {...{ rows, tbodyItems }} />
      </table>
    </div>
  );
};
