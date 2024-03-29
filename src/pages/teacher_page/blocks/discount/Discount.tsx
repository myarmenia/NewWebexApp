import { FC } from "react";
import styles from "./discount.module.css";
import { CustomBtn } from "../../../../components/forms";
import { LessonTitle, Table } from "../../../../components/reusable";
import { DiscountCard } from "./DiscountCard";

export const Discount: FC = () => {
  return (
    <div
    //  className="discount_mainCont"
    >
      <LessonTitle title="Զեղչ և պրոմո" />
      <div className={styles.discount_cont}>
        <div className={styles.discount}>
          <DiscountCard isActive={true} />
          <DiscountCard isActive={false} />
        </div>
        <div className={styles.discount_tableCont}>
          <div
          // className="activeDiscount"
          >
            <p className="font-semibold text-sm mb-3">Ակտիվ զեղչեր </p>
            <Table
              rows={[
                {
                  name: "Ժամանակահատված",
                  render: () => "11/22/2022 - 12/22/2022",
                  tdClassName: "text-center",
                },
                {
                  name: "Դասընթաց",
                  render: () => "Դասընթացի վերնագիրը",
                  tdClassName: "text-center",
                },
                {
                  name: "Տեսակ",
                  render: () => "Զեղչ",
                  tdClassName: "text-center",
                },
                {
                  name: "Արժեք",
                  render: () => "20%",
                  tdClassName: "text-center",
                },
                {
                  name: "Ապակտիվացնել",
                  render: () => (
                    <CustomBtn
                      className="!w-fit !min-w-min"
                      title="Դադարեցնել"
                    />
                  ),
                  tdClassName: "text-center",
                },
              ]}
              data={[{}, {}]}
            />
          </div>
          <div className={styles.discount_promos}>
            <p className="font-semibold text-sm mb-3">Պրոմոներ </p>
            <Table
              rows={[
                {
                  name: "Ժամանակահատված",
                  render: () => "11/22/2022 - 12/22/2022",
                  tdClassName: "text-center",
                },
                {
                  name: "Դասընթաց",
                  render: () => "Դասընթացի վերնագիրը",
                  tdClassName: "text-center",
                },
                {
                  name: "Տեսակ",
                  render: () => "Պրոմո",
                  tdClassName: "text-center",
                },
                {
                  name: "Արժեք",
                  render: () => "",
                  tdClassName: "text-center",
                },
                {
                  name: "Ապակտիվացնել",
                  render: () => (
                    <CustomBtn
                      className="!w-fit !min-w-min"
                      title="Հանել պրոմոյից"
                    />
                  ),
                  tdClassName: "text-center",
                },
              ]}
              data={[{}]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
