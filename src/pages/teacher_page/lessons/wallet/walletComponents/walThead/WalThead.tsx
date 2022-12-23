import React, { FC } from "react";
import "./walThead.css";

export const WalThead: FC = () => {
  return (
    <thead className="relative">
      <tr className="transactionHistory_theadTr">
        <th>Ամսաթիվ</th>
        <th>Գումար</th>
        <th>Գործարքի տեսակը</th>
        <th>Հաշվի մնացորդը</th>
      </tr>
    </thead>
  );
};
