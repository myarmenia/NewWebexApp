import { FC } from "react";
import "./table.css";
import { Tbody } from "./Tbody";
import { Thead } from "./thead/Thead";
import { TrProps } from "./tr/Tr";

interface TableProps {
  theadItems: { items: string[]; thClassName?: string };
  tbodyItems: TrProps[];
}

export const Table: FC<TableProps> = ({ theadItems, tbodyItems }) => {
  return (
    <div className="custom_table_container">
      <table className="custom_table">
        <Thead {...theadItems} />
        <Tbody {...{ tbodyItems }} />
      </table>
    </div>
  );
};
