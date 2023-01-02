import { yupResolver } from "@hookform/resolvers/yup";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./discountModal.css";
import ModalCard from "./ModalCard";

import * as Yup from "yup";
import { ModalContainer } from "../../../../../components/modalContainer/ModalContainer";
import { CstmInput } from "../../../../../components/forms";
import { ErrorResponse } from "@remix-run/router";
import { CustomSelect } from "../../../../../components/forms";

export const discountModal = Yup.object().shape({
  price: Yup.string().required(),
  select: Yup.string().required("partadir e"),
  titleSelect: Yup.string().required("partadir e"),
  date: Yup.object().shape({
    start: Yup.date().max(new Date(), "Future date not allowed"),
    end: Yup.string().when(
      "start",
      (start, Yup) =>
        start && Yup.min(start, "End time cannot be before start time")
    ),
  }),
  timeCheck: Yup.bool().oneOf([true], "Պայմաններ ընդունելը  պարտադիր է"),
});
interface IDiscountModal {
  price: string;
  select: string;
  titleSelect: string;
  date: { start: Date | string; end: Date | string };
  timeCheck: boolean;
}
interface IModalDiscount {
  modalActive: () => void;
}
export const ModalDiscount: FC<IModalDiscount> = ({ modalActive }) => {
  const methods = useForm<IDiscountModal>({
    resolver: yupResolver(discountModal),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data: IDiscountModal) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      {/* <div className="modal">
        <form className="modalChild" onSubmit={handleSubmit(onSubmit)}> */}
      <ModalContainer onClick={modalActive}>
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div className="modalTitle">Ակտիվացնել Զեղչ</div>
          <div className="modalInput">
            <div className="modalInputChild">
              <div className="modalInpTitle">Զեղչի քանակ</div>
              <div className="modalInp">
                <CstmInput
                  type="text"
                  className="modal-inp1"
                  placeholder="Արժեք"
                  regName="price"
                />
                <CustomSelect
                  placeholder="Տեսակ"
                  regName="select"
                  className="registration_select"
                  options={["Տոկոս %", "Դրամ"]}
                />
              </div>
              <div className="modalInpTitle">Դասընթացներ</div>
              <CustomSelect
                placeholder="Դասընթացի վերնագիրը"
                regName="titleSelect"
                options={[
                  "Դասընթացի վերնագիրը",
                  "Դասընթացի վերնագիրը",
                  "Դասընթացի վերնագիրը",
                  "Դասընթացի վերնագիրը",
                  "Դասընթացի վերնագիրը",
                ]}
              />
            </div>
            <div className="modalInputChild2">
              <div className="modalInpTitle">Ժամանակահատված</div>
              <div className="date">
                <input
                  type="date"
                  className="dateInp"
                  {...register("date.start", { value: new Date() })}
                />
                <div className="gic"></div>
                <input
                  type="date"
                  className="dateInp"
                  {...register("date.end", { value: new Date() })}
                />
              </div>
              <div className="dateError">{errors.date?.end?.message}</div>
              <div className="modalCheckbox">
                <input
                  type="checkbox"
                  className="modalCheck"
                  {...register("timeCheck")}
                />
                <div className="checkboxText">Անժամկետ</div>
              </div>
            </div>
          </div>
          <div className="modalCard">
            <ModalCard />
            <ModalCard />
            <ModalCard />
            <ModalCard />
          </div>

          <div className="modalButton">
            <button onClick={modalActive} type="button">
              Չեղարկել
            </button>
            <button type="submit">Հաստատել</button>
          </div>
        </form>
      </ModalContainer>
      {/* </div> */}
    </FormProvider>
  );
};
