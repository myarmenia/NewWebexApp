import { FC } from "react";
import { Tr, TrProps } from "./tr/Tr";

export interface TbodyProps {
  tbodyItems: TrProps[];
}

export const Tbody: FC<TbodyProps> = ({ tbodyItems }) => {
  return (
    <tbody className="border-spacing-y-3 border-separate">
      {tbodyItems.map(({ trData }, index) => (
        <Tr {...{ trData }} key={index} />
      ))}
    </tbody>
  );
};
