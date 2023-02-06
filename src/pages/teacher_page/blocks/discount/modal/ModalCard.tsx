import { FC } from "react";
import deleteImg from "../../../../../assets/teacher_images/discount/delete.svg";
import cardImg from "../../../../../assets/teacher_images/discount/discountCard.svg";
import styles from "./discountModal.module.css";

interface ModalCardProps {
  removeCard: () => void;
}

const ModalCard: FC<ModalCardProps> = ({ removeCard }) => {
  return (
    <div className={styles.modalCardChild}>
      <div className={styles.firstCardSection}>
        <img src={cardImg} alt="" />
        <div className={styles.firstCardText}>
          <div>Դասընթացի վերնագիրը կարող է լինել 2 տողով</div>
          <div>Գրաֆիկ դիզայնի դասընթաց սկսնակների համար</div>
        </div>
      </div>
      <div className={styles.secondCardSection}>
        <div>65 000դրամ</div>
        <img src={deleteImg} onClick={removeCard} className="cursor-pointer" alt="" />
      </div>
    </div>
  );
};

export default ModalCard;
