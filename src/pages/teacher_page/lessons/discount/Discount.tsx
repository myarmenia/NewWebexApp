import { FC } from "react";
import { CustomBtn } from "../../../../components/forms";
import { LessonTitle } from "../../../../components/reusable";
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
              rows={[
                {
                  name: "Ժամանակահատված",
                  selector: (obj: any) => "11/22/2022 - 12/22/2022",
                  tdClassName: "text-center",
                },
                {
                  name: "Դասընթաց",
                  selector: (obj: any) => "Դասընթացի վերնագիրը",
                  tdClassName: "text-center",
                },
                {
                  name: "Տեսակ",
                  selector: (obj: any) => "Զեղչ",
                  tdClassName: "text-center",
                },
                {
                  name: "Արժեք",
                  selector: (obj: any) => "20%",
                  tdClassName: "text-center",
                },
                {
                  name: "Ապակտիվացնել",
                  selector: (obj: any) => (
                    <CustomBtn
                      className="!w-fit !min-w-min"
                      title="Դադարեցնել"
                    />
                  ),
                  tdClassName: "text-center",
                },
              ]}
              tbodyItems={[{}, {}]}
              className="custom_table"
            />
          </div>
          <div className="discount_promos">
            <p className="font-semibold text-sm mb-3">Պրոմոներ </p>
            <Table
              rows={[
                {
                  name: "Ժամանակահատված",
                  selector: (obj: any) => "11/22/2022 - 12/22/2022",
                  tdClassName: "text-center",
                },
                {
                  name: "Դասընթաց",
                  selector: (obj: any) => "Դասընթացի վերնագիրը",
                  tdClassName: "text-center",
                },
                {
                  name: "Տեսակ",
                  selector: (obj: any) => "Պրոմո",
                  tdClassName: "text-center",
                },
                {
                  name: "Արժեք",
                  selector: (obj: any) => "",
                  tdClassName: "text-center",
                },
                {
                  name: "Ապակտիվացնել",
                  selector: (obj: any) => (
                    <CustomBtn
                      className="!w-fit !min-w-min"
                      title="Հանել պրոմոյից"
                    />
                  ),
                  tdClassName: "text-center",
                },
              ]}
              tbodyItems={[{}]}
              className="custom_table"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
