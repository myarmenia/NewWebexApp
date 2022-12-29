import { FC } from "react";
import { CustomBtn } from "../../../../components/forms/customBtn/CustomBtn";
import { LessonTitle } from "../../../../components/reusable/lessonTitle/LessonTitle";
import { Table } from "../../../../components/reusable/table/Table";
import "./discount.css";
import { DiscountCard } from "./DiscountCard";

export const Discount: FC = () => {
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
            <Table
              theadItems={{
                items: [
                  "Ժամանակահատված",
                  "Դասընթաց",
                  "Տեսակ",
                  "Արժեք",
                  "Ապակտիվացնել",
                ],
              }}
              tbodyItems={Array.from({ length: 2 }).map(() => ({
                trData: [
                  { item: "11/22/2022 - 12/22/2022", className: "text-center" },
                  { item: "Դասընթացի վերնագիրը", className: "text-center" },
                  { item: "Զեղչ", className: "text-center" },
                  { item: "20%", className: "text-center" },
                  {
                    item: (
                      <CustomBtn
                        className="!w-fit !min-w-min"
                        title="Դադարեցնել"
                        type="button"
                      />
                    ),
                    className: "text-center",
                  },
                ],
              }))}
            />
          </div>
          <div className="discount_promos">
            <p className="font-semibold text-sm mb-3">Պրոմոներ </p>
            <Table
              theadItems={{
                items: [
                  "Ժամանակահատված",
                  "Դասընթաց",
                  "Տեսակ",
                  "Արժեք",
                  "Ապակտիվացնել",
                ],
              }}
              tbodyItems={[
                {
                  trData: [
                    {
                      item: "11/22/2022 - 12/22/2022",
                      className: "text-center",
                    },
                    { item: "Դասընթացի վերնագիրը", className: "text-center" },
                    { item: "Պրոմո", className: "text-center" },
                    { item: "", className: "text-center" },
                    {
                      item: (
                        <CustomBtn
                          className="!w-fit !min-w-min"
                          title="Հանել պրոմոյից"
                          type="button"
                        />
                      ),
                      className: "text-center",
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
