import { yupResolver } from "@hookform/resolvers/yup";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CustomSelect } from "../../lesComponents/customSelect/CustomSelect";
import "./discountModal.css";
import ModalCard from "./ModalCard";

import * as Yup from "yup";
import { ModalContainer } from "../../../modalContainer/ModalContainer";

// Yup
interface ModalDiscountProps {
  modalActiveClick: () => void;
}
export const discountModal = Yup.object().shape({
  select: Yup.string().default("Տեսակ"),
  titleSelect: Yup.string().default("title"),
});
interface IDiscountModal {
  select: string;
  titleSelect: string;
}

export const ModalDiscount: FC<ModalDiscountProps> = () => {
  const methods = useForm<IDiscountModal>({
    resolver: yupResolver(discountModal),
  });
  const { handleSubmit } = methods;

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
                <input className="modal-inp1" placeholder="Արժեք" />
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
                <input type="date" className="dateInp" />
                <div className="gic"></div>
                <input type="date" className="dateInp" />
              </div>
              <div className="modalCheckbox">
                <input type="checkbox" className="modalCheck" />
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
