import { TableProps } from "./Table";

interface TbodyProps<T> extends TableProps<T> {}

export function Tbody<T>({ rows, data }: TbodyProps<T>) {
  return (
    <tbody>
      {data.length ? (
        data?.map((el, index) => (
          <tr key={index}>
            {rows.map(({ render, tdClassName = "" }, i) => (
              <td className={tdClassName} key={i}>
                {render(el)}
              </td>
            ))}
          </tr>
        ))
      ) : (
        <tr className="text-center w-full" style={{ background: "none" }}>
          <td colSpan={rows.length} className="!text-xl !font-semibold !py-3 !pb-8">
            There is no data!!!
          </td>
        </tr>
      )}
    </tbody>
  );
}
