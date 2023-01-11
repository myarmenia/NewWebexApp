import React, { useState } from "react";
import "./discount.css";
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
      <div className="discountCard">
        <div className="discountCardChild">
          <img src={isActive ? discount : promo} />
        </div>
        <div className="discountCardChild2">
          <div className="discountHeader">
            {isActive ? "Ակտիվացնել Զեղչ" : "Դարձնել Պրոմո"}
          </div>
          <div className="text">
            {isActive
              ? "Դուք կարող եք միացնել զեղչ մի կամ մի քանի դասընթացների համար։"
              : "Դուք կարող եք տեսանյութերը դարձնել պրոմո, ինչը հնարավորություն կտա ուսանողներին ծանոթանալու դասընթացին:"}
          </div>
          <div className="text">
            {isActive
              ? "Ներգրավեք ավելի շատ ուսանողներ։"
              : "Գուցե ուսանողները ցակնական սովորել հենց ձեզ մոտ։"}
          </div>
          <button
            className="discountButton"
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
