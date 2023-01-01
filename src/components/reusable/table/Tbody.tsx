import { FC } from "react";
import { TableProps } from "./Table";

interface TbodyProps extends TableProps {}

export const Tbody: FC<TbodyProps> = ({ rows, tbodyItems }) => {
  return (
    <tbody>
      {tbodyItems?.map((el, index) => (
        <tr className="custom_tr" key={index}>
          {rows.map(({ selector, tdClassName }, i) => (
            <td className={`custom_td ${tdClassName}`} key={i}>
              {selector(el)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
