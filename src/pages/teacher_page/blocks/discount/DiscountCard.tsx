import React, { useState } from "react";
import styles from "./discount.module.css";
import discount from "../../../../assets/teacher_images/discount/discount.svg";
import promo from "../../../../assets/teacher_images/discount/promo.svg";
import { ModalDiscount } from "./modal/ModalDiscount";
interface DiscountCardProps {
  isActive: boolean;
}
export const DiscountCard: React.FC<DiscountCardProps> = ({ isActive }) => {
  const [modalActive, setIsModalActive] = useState(false);
  const modalActiveClick = () => {
    setIsModalActive((prev) => !prev);
  };
  return (
    <>
      {modalActive && <ModalDiscount modalActive={modalActiveClick} />}
      <div className={styles.discountCard}>
        <div className={styles.discountCardChild}>
          <img src={isActive ? discount : promo} />
        </div>
        <div className={styles.discountCardChild2}>
          <div className={styles.discountHeader}>
            {isActive ? "Ակտիվացնել Զեղչ" : "Դարձնել Պրոմո"}
          </div>
          <div className={styles.text}>
            {isActive
              ? "Դուք կարող եք միացնել զեղչ մի կամ մի քանի դասընթացների համար։"
              : "Դուք կարող եք տեսանյութերը դարձնել պրոմո, ինչը հնարավորություն կտա ուսանողներին ծանոթանալու դասընթացին:"}
          </div>
          <div className={styles.text}>
            {isActive
              ? "Ներգրավեք ավելի շատ ուսանողներ։"
              : "Գուցե ուսանողները ցակնական սովորել հենց ձեզ մոտ։"}
          </div>
          <button
            className={styles.discountButton}
            type="button"
            onClick={modalActiveClick}
          >
            Միացնել
          </button>
        </div>
      </div>
    </>
  );
};
