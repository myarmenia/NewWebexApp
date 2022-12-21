import React, { useState } from "react";
import { LessonTitle } from "../lessonTitle/LessonTitle";
import { DiscountCard } from "./DiscountCard";
import "./discount.css";
import { CustomBtn } from "../lesComponents/customBtn/CustomBtn";
export const Discount: React.FC = () => {
  
  return (
    <div className="discount_mainCont">
      <LessonTitle title="Զեղչ և պրոմո" />
      <div className="discount_cont">
        <div className="discount">
          <DiscountCard isActive={true} />
          <DiscountCard isActive={false} />
        </div>
        <div className="discount_tableCont">
          <div className="activeDiscount">
            <p className="font-semibold text-sm mb-3">Ակտիվ զեղչեր </p>
            <div className="discount_activeTable">
              <table className="w-full">
                <thead>
                  <tr className="discount_theadTr">
                    <th>Ժամանակահատված</th>
                    <th className="w-full">Դասընթաց</th>
                    <th>Տեսակ</th>
                    <th>Արժեք</th>
                    <th className="!text-center">Ապակտիվացնել</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="discount_tbodyTr">
                    <td className="discount_tbodyTr_date">
                      11/22/2022 - 12/22/2022
                    </td>
                    <td>Դասընթացի վերնագիրը</td>
                    <td>Զեղչ</td>
                    <td>20%</td>
                    <td>
                      <CustomBtn
                        className="!w-fit !min-w-min"
                        title="Դադարեցնել"
                        type="button"
                      />
                    </td>
                  </tr>
                  <tr className="discount_tbodyTr">
                    <td>11/22/2022 - 12/22/2022</td>
                    <td>Դասընթացի վերնագիրը</td>
                    <td>Զեղչ</td>
                    <td>20%</td>
                    <td className="text-center">
                      <CustomBtn
                        className="!w-fit !min-w-min"
                        title="Դադարեցնել"
                        type="button"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="discount_promos">
            <p className="font-semibold text-sm mb-3">Պրոմոներ </p>
            <div className="discount_promosTable">
              <table className="w-full">
                <thead>
                  <tr className="discount_theadTr">
                    <th>Ժամանակահատված</th>
                    <th className="w-full">Դասի վերնագիրը</th>
                    <th>Տեսակ</th>
                    <th>Արժեք</th>
                    <th className="!text-center">Ապակտիվացնել</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="discount_tbodyTr">
                    <td className="discount_tbodyTr_date">
                      11/22/2022 - 12/22/2022
                    </td>
                    <td>Դասընթացի վերնագիրը</td>
                    <td>Պրոմո</td>
                    <td></td>
                    <td className="text-center">
                      <CustomBtn
                        className="!w-fit !min-w-min whitespace-nowrap"
                        title="Հանել պրոմոյից"
                        type="button"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
