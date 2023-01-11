import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./discountModal.css";
import ModalCard from "./ModalCard";
import { CstmInput, CustomSelect } from "../../../../../components/forms";
import { ModalContainer } from "../../../../../components/modalContainer/ModalContainer";
import { discountModal_schema } from "../../../../../validations/modalDiscount_schema";

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
    resolver: yupResolver(discountModal_schema),
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
