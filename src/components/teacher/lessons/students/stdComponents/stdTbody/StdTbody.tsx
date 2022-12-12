import React, { FC } from "react";
import { IStudentTd } from "../../../../../../models/interfaces";
import { StdTbodyTr } from "../stdTbodyTr/StdTbodyTr";

export const StdTbody: FC = () => {
  return (
    <tbody className="stdTbody">
      {Array.from({ length: 8 })
        .map(
          () =>
            ({
              image: "",
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
        .map(({ name, lessons, phoneNumber }, i) => (
          <StdTbodyTr key={Math.random()} {...{ name, lessons, phoneNumber }} />
        ))}
    </tbody>
  );
};
