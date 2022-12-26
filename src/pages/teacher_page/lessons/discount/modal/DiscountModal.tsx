import { yupResolver } from "@hookform/resolvers/yup";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./discountModal.css";
import ModalCard from "./ModalCard";

import * as Yup from "yup";
import { ModalContainer } from "../../../../../components/modalContainer/ModalContainer";
import { CustomSelect } from "../../../../../components/teacherComponents/customSelect/CustomSelect";

// Yup
export const discountModal = Yup.object().shape({
  price: Yup.string().required(),
  select: Yup.string().default("Տեսակ"),
  titleSelect: Yup.string().default("title"),
  date: Yup.object()
    .shape({
      start: Yup.date()

        .max(new Date(), "Future date not allowed")
        .typeError("Invalid Started date"),
      end: Yup.date().when(
        "start",
        (start, Yup) =>
          start && Yup.min(start, "End time cannot be before start time")
      ),
    })
    .typeError("Invalid Ended date"),
  timeCheck: Yup.bool().oneOf([true], "Պայմաններ ընդունելը  պարտադիր է"),
});
interface IDiscountModal {
  price: string;
  select: string;
  titleSelect: string;
  date: { start: Date | string; end: Date | string };
  timeCheck: boolean;
}

export const ModalDiscount: FC = () => {
  const methods = useForm<IDiscountModal>({
    resolver: yupResolver(discountModal),
  });
  const { handleSubmit, register } = methods;

  const onSubmit = (data: IDiscountModal) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      {/* <div className="modal">
        <form className="modalChild" onSubmit={handleSubmit(onSubmit)}> */}
      <ModalContainer>
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div className="modalTitle">Ակտիվացնել Զեղչ</div>
          <div className="modalInput">
            <div className="modalInputChild">
              <div className="modalInpTitle">Զեղչի քանակ</div>
              <div className="modalInp">
                <input
                  className="modal-inp1"
                  placeholder="Արժեք"
                  {...register("price")}
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
            <button>Չեղարկել</button>
            <button>Հաստատել</button>
          </div>
        </form>
      </ModalContainer>
      {/* </div> */}
    </FormProvider>
  );
};