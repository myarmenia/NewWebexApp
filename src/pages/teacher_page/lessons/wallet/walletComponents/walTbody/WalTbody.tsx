import React, { FC } from "react";
import "./walTbody.css";

export const WalTbody: FC = () => {
  return (
    <tbody>
      {Array.from({ length: 3 }).map((el, i) => (
        <tr className="transactionHistory_tr" key={Math.random()}>
          <td>11/22/2022</td>
          <td>1000 դրամ</td>
          <td>Հաշվի համալրում</td>
          <td>1000 դրամ</td>
        </tr>
      ))}
    </tbody>
  );
};
