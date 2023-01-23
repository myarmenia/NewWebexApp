import React, { FC } from "react";
import cardImg from "../../../../../assets/teacher_images/discount/discountCard.svg";
import deleteImg from "../../../../../assets/teacher_images/discount/delete.svg";
import styles from "./discountModal.module.css";
const ModalCard: FC = () => {
  return (
    <div className={styles.modalCardChild}>
      <div className={styles.firstCardSection}>
        <img src={cardImg} />
        <div className={styles.firstCardText}>
          <div>Դասընթացի վերնագիրը կարող է լինել 2 տողով</div>
          <div>Գրաֆիկ դիզայնի դասընթաց սկսնակների համար</div>
        </div>
      </div>
      <div className={styles.secondCardSection}>
        <div>65 000դրամ</div>
        {/* <button type="button"> */}
        <img src={deleteImg} />
        {/* </button> */}
      </div>
    </div>
  );
};

export default ModalCard;
