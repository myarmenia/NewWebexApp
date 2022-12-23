import React, { FC } from "react";
import { IStudentTd } from "../../../../../../models/interfaces";
import { StdTbodyTr } from "../stdTbodyTr/StdTbodyTr";
import { TdDate } from "../stdTbodyTr/tds/TdDate";
import { TdFeedBack } from "../stdTbodyTr/tds/TdFeedBack";
import { TdLes } from "../stdTbodyTr/tds/TdLes";
import { TdName } from "../stdTbodyTr/tds/TdName";
import { TdProgres } from "../stdTbodyTr/tds/TdProgres";

export const StdTbody: FC = () => {
  return (
    <tbody className="stdTbody">
      {Array.from({ length: 8 })
        .map(
          () =>
            ({
              image: "smile.png",
              name: "Անուն Ազգանուն",
              phoneNumber: "+374 90 888 888",
              lessons: Array.from({
                length: Math.min(Math.random() * 3 + 1),
              }).map(() => ({
                title: "Գրաֆիկ դիզայնի դասընթաց",
                date: new Date().toLocaleDateString().replaceAll("/", "."),
                // date: "10․08․2021",
                progres: (() => Math.floor(Math.random() * 100))(),
                homework: "",
              })),
            } as IStudentTd)
        )
        .map(({ name, lessons, phoneNumber, image }) => (
          <StdTbodyTr key={Math.random()}>
            <TdName {...{ name, image }} />
            <TdLes lessons={[{ ...lessons[0], title: phoneNumber }]} />
            <TdLes {...{ lessons }} />
            <TdDate {...{ lessons }} />
            <TdProgres {...{ lessons }} />
            <TdFeedBack {...{ lessons }} />
          </StdTbodyTr>
        ))}
    </tbody>
  );
};
