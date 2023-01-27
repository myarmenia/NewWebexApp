import { TableProps } from "./Table";

interface TbodyProps<T> extends TableProps<T> {}

export function Tbody<T>({ rows, data }: TbodyProps<T>) {
  return (
    <tbody>
      {data?.map((el, index) => (
        <tr key={index}>
          {rows.map(({ render, tdClassName = "" }, i) => (
            <td className={tdClassName} key={i}>
              {render(el)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
