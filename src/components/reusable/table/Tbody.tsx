import { FC } from "react";
import { TableProps } from "./Table";

interface TbodyProps extends TableProps<any> {}

export const Tbody: FC<TbodyProps> = ({ rows, tbodyItems }) => {
  return (
    <tbody>
      {tbodyItems?.map((el, index) => (
        <tr key={index}>
          {rows.map(({ render, tdClassName }, i) => (
            <td className={tdClassName} key={i}>
              {render(el)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
