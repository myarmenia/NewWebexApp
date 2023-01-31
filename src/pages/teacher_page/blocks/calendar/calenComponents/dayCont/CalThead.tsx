import { FC } from "react";
import { weekDays_long } from "../../../../../../helper";

export const CalThead: FC = () => {
  return (
    <thead>
      <tr>
        {weekDays_long.map((el) => (
          <th
            className="text-gray font-semibold text-sm border-t-2 border-b-2 border-[#bebfe4] py-[3px] w-[135px]"
            key={Math.random()}
          >
            {el}
          </th>
        ))}
      </tr>
    </thead>
  );
};
