import React from "react";
import { LessonTitle } from "../lessonTitle/LessonTitle";
import { DiscountCard } from "./DiscountCard";
import "./discount.css";
import { ModalDiscount } from "./ModalDiscount";
export const Discount = () => {
  return (
    <>
      <LessonTitle title="Զեղչ և պրոմո" />
      <div className="discount">
        <DiscountCard isActive={true} />
        <DiscountCard isActive={false} />
      </div>
    </>
  );
};
