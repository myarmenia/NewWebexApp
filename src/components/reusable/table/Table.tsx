import React, { FC, ReactNode } from "react";
import { Tbody } from "./Tbody";
import { Thead } from "./Thead";

export interface TableProps<T> {
  rows: {
    name: string;
    selector: (obj: T) => string | number | ReactNode | JSX.Element;
    tdClassName?: string;
    thClassName?: string;
  }[];
  tbodyItems: T[];
  className?: string;
}

export const Table: FC<TableProps<any>> = ({ rows, tbodyItems, className }) => {
  return (
    <div className={"overflow-x-auto " + className}>
      <table>
        <Thead {...{ rows }} />
        <Tbody {...{ rows, tbodyItems }} />
      </table>
    </div>
  );
};

// export const Table: FC<TableProps> = ({ rows, tbodyItems, className }) => {
//   return (
//     <div className={"overflow-x-auto drop-shadow-normal " + className}>
//       <table>
//         <thead>
//           <tr>
//             {rows.map(({ name, thClassName }, i) => (
//               <th key={i} className={thClassName}>
//                 {name}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {tbodyItems?.map((el, index) => (
//             <tr key={index}>
//               {rows.map(({ selector, tdClassName }, i) => (
//                 <td className={tdClassName} key={i}>
//                   {selector(el)}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
