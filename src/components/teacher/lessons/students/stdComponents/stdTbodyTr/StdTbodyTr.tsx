import React, { FC } from "react";
import "./stdTbodyTr.css";
import { IStudentTd } from "../../../../../../models/interfaces";
import { TdName } from "./tds/TdName";
import { TdLes } from "./tds/TdLes";
import { TdDate } from "./tds/TdDate";
import { TdProgres } from "./tds/TdProgres";
import { TdFeedBack } from "./tds/TdFeedBack";

export const StdTbodyTr: FC<IStudentTd> = ({ name, phoneNumber, lessons }) => {
  return (
    <tr className="stdTbodyTr">
      <TdName {...{ name }} />
      <td className="stdTd">{phoneNumber}</td>
      <TdLes {...{ lessons }} />
      <TdDate {...{ lessons }} />
      <TdProgres {...{ lessons }} />
      <TdFeedBack {...{ lessons }} />
    </tr>
  );
};
