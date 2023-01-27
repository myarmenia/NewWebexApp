import { FC } from "react";
import { weekDays_long_short } from "../../../../../../helper";

export const NmThead: FC = () => {
  return (
    <thead>
      <tr>
        {weekDays_long_short.map((weeekName, i) => (
          <th
            key={i}
            className="text-[8px] text-gray font-semibold med-850:text-xl"
          >
            {weeekName}
          </th>
        ))}
      </tr>
    </thead>
  );
};
