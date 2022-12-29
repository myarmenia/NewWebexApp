import { FC, ReactNode } from "react";
import "./tr.css";

export type TrProps = {
  trData: {
    item: string | ReactNode;
    className?: string;
  }[];
};

export const Tr: FC<TrProps> = ({ trData }) => {
  return (
    <tr className="custom_tr">
      {trData.map(({ item, className }, index) => (
        <td className={`custom_td ${className}`} key={index}>
          {item}
        </td>
      ))}
    </tr>
  );
};
