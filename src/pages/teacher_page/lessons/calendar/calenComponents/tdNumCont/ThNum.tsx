import { FC } from "react";

interface ThNumProps {
  weeekName: string;
}
export const ThNum: FC<ThNumProps> = ({ weeekName }) => {
  return (
    <th className="text-[8px] text-gray font-semibold med-850:text-xl">
      {weeekName}
    </th>
  );
};
