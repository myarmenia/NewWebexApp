import React, { FC } from "react";
import "./stdTbodyTr.css";
import { IStudentTd } from "../../../../../../models/interfaces";
import { TdName } from "./tds/TdName";
import { TdLes } from "./tds/TdLes";
import { TdDate } from "./tds/TdDate";
import { TdProgres } from "./tds/TdProgres";
import { TdFeedBack } from "./tds/TdFeedBack";

export const StdTbodyTr: FC<IStudentTd> = ({
  image,
  name,
  phoneNumber,
  lessons,
}) => {
  return (
    <tr className="stdTbodyTr">
      <TdName {...{ name, image }} />
      {/* ----- td for phoneNumber below */}
      <TdLes lessons={[{ ...lessons[0], title: phoneNumber }]} />
      <TdLes {...{ lessons }} />
      <TdDate {...{ lessons }} />
      <TdProgres {...{ lessons }} />
      <TdFeedBack {...{ lessons }} />
    </tr>
  );
};
