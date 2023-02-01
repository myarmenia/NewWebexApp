import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  CstmDateInput,
  CstmInput,
  CustomBtn,
  CustomCheckbox,
  CustomSelect,
} from "../../../../../components/forms";
import { ModalContainer } from "../../../../../components/modalContainer/ModalContainer";
import { generateArray } from "../../../../../helper";
import {
  discountModal_schema,
  IDiscountModal,
} from "../../../../../validations/modalDiscount_schema";
import styles from "./discountModal.module.css";
import ModalCard from "./ModalCard";

interface IModalDiscount {
  modalActive: () => void;
}
export const ModalDiscount: FC<IModalDiscount> = ({ modalActive }) => {
  const methods = useForm<IDiscountModal>({
    resolver: yupResolver(discountModal_schema),
  });
  const { handleSubmit } = methods;
  const [arr, setArr] = useState<{}[]>(generateArray(4, {}));
  const removeCard = (myId: number) => {
    setArr((prev) => prev.filter((_, id) => id !== myId));
  };

  const onSubmit = (data: IDiscountModal) => {
    let values = JSON.parse(JSON.stringify(data)) as IDiscountModal;
    if (values.isTimeLimit) {
      delete values.date;
    }
    console.log(values, "data");
  };

  return (
    <FormProvider {...methods}>
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
                <CstmDateInput regName="date.start" />
                <div className={styles.gic} />
                <CstmDateInput regName="date.end" />
              </div>
              <CustomCheckbox regName="isTimeLimit" label="Անժամկետ" />
            </div>
          </div>
          <div className={styles.modalCard}>
            {arr.map((_, id) => {
              return <ModalCard key={id} removeCard={() => removeCard(id)} />;
            })}
          </div>

          <div className={styles.modalButton}>
            <CustomBtn
              title="Չեղարկել"
              className="gray"
              onClick={modalActive}
            />
            <CustomBtn title="Հաստատել" type="submit" />
          </div>
        </form>
      </ModalContainer>
    </FormProvider>
  );
};
