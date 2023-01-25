import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import styles from "./discountModal.module.css";
import ModalCard from "./ModalCard";
import {
  CstmInput,
  CustomCheckbox,
  CustomSelect,
} from "../../../../../components/forms";
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
          <div className={styles.modalTitle}>Ակտիվացնել Զեղչ</div>
          <div className={styles.modalInput}>
            <div className={styles.modalInputChild}>
              <div className={styles.modalInpTitle}>Զեղչի քանակ</div>
              <div className={styles.modalInp}>
                <CstmInput
                  className={styles["modal-inp1"]}
                  placeholder="Արժեք"
                  regName="price"
                />
                <CustomSelect
                  placeholder="Տեսակ"
                  regName="select"
                  // className="registration_select"

                  options={["Տոկոս %", "Դրամ"]}
                />
              </div>
              <div className={styles.modalInpTitle}>Դասընթացներ</div>
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
            <div className={styles.modalInputChild2}>
              <div className={styles.modalInpTitle}>Ժամանակահատված</div>
              <div className={styles.date}>
                <input
                  type="date"
                  className={styles.dateInp}
                  {...register("date.start", { value: new Date() })}
                />
                <div className={styles.gic}></div>
                <input
                  type="date"
                  className={styles.dateInp}
                  {...register("date.end", { value: new Date() })}
                />
              </div>
              <div className={styles.dateError}>
                {errors.date?.end?.message}
              </div>
              <CustomCheckbox regName="timeCheck" label="Անժամկետ" />
            </div>
          </div>
          <div className={styles.modalCard}>
            <ModalCard />
            <ModalCard />
            <ModalCard />
            <ModalCard />
          </div>

          <div className={styles.modalButton}>
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
