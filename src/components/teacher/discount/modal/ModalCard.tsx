import React from "react";
import cardImg from "../../../../images/discount/discountCard.svg";
import deleteImg from "../../../../images/discount/delete.svg";
const ModalCard = () => {
  return (
    <div className="modalCardChild">
      <div className="firstCardSection">
        <img src={cardImg} />
        <div className="firstCardText">
          <div>Դասընթացի վերնագիրը կարող է լինել 2 տողով</div>
          <div>Գրաֆիկ դիզայնի դասընթաց սկսնակների համար</div>
        </div>
      </div>
      <div className="secondCardSection">
        <div>65 000դրամ</div>
        <button type="button">
          <img src={deleteImg} />
        </button>
      </div>
    </div>
  );
};

export default ModalCard;
