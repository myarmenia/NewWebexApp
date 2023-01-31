import { FC, useCallback, useState } from "react";
import editPenImg from "../../../../../../assets/teacher_images/userLessons/editGray.svg";
import { CustomBtn, CustomSelect } from "../../../../../../components/forms";
import { ModalContainer } from "../../../../../../components/modalContainer/ModalContainer";
import { Table } from "../../../../../../components/reusable";
import { generateArray } from "../../../../../../helper";
import styles from "./walletCont.module.css";

export const WalletCont: FC = () => {
  const [transactionHistory, setTransactionHistory] = useState<boolean>(true);
  const [isModalOpened, setIsModalOpen] = useState<boolean>(false);
  const [tarifPlanName, setTarifPlanState] = useState<string>();
  const [selectValue, setSelectValue] = useState<string>("");
  const [selectError, setSelectError] = useState<string>("");

  const selectHandler = useCallback(() => {
    if (selectValue.length < 5) {
      setSelectError("Required");
    } else {
      setSelectError("");
      console.log(selectValue);
    }
  }, [selectValue]);
  const closeModalHandler = () => {
    setIsModalOpen(true);
    setSelectError("");
    setSelectValue("");
  };
  return (
    <>
      <div className={styles.walletCont}>
        <div className={styles.walletCont_header}>
          {/* <div className="balanceBox">
          <div>
            <p className="font-semibold text-sm mb-1">
              Անձնական հաշվի մնացորդը
            </p>
            <span className="text-xs">Հաշվին առկա գումարը՝</span>
          </div>
          <div className="balance">
            <p className="textPurple text-[40px] font-semibold mb-1">
              {balance} դր
            </p>
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={fillBalanceImg} className="w-8 h-8" alt="" />
              <span className="text-sm">Համալրել</span>
            </div>
          </div>
        </div> */}
          <div className="flex flex-col gap-9">
            <div className={styles.tariffPlanBox}>
              <div className="flex items-center gap-4">
                <p className="font-semibold text-sm mb-1">Սակագնային պլան</p>
                <img
                  onClick={closeModalHandler}
                  src={editPenImg}
                  alt=""
                  className="cursor-pointer"
                />
              </div>
              {tarifPlanName ? (
                <span className="text-xl font-semibold">{tarifPlanName}</span>
              ) : (
                <span className="text-xs">
                  Դուք դեռ չունեք ընտրած սակագնային պլան
                </span>
              )}
            </div>
            <CustomBtn type="button" title="Վճարել" className={styles.payBtn} />
          </div>
        </div>
        {/* <div className="attachedCards_cont">
        <p className="text-sm font-semibold">Կցված քարտեր</p>
        <div className="attachedCards">
        <div className="addCardBox">
        <div className="cursor-pointer flex flex-col items-center gap-3 w-fit p-2">
        <img src={fillBalanceImg} alt="" className="w-8 h-8" />
        <span className="text-xs">Կցել քարտ</span>
        </div>
        </div>
        <AttachedCard
            name="Master Card"
            cardNumbers={"4578 XXXX XXXX XX03"}
            userName={"Name"}
            userSurName={"Surname"}
            cardDate={"12 / 24"}
          />
          <AttachedCard
          name="Visa"
          cardNumbers={"4578 XXXX XXXX XX03"}
          userName={"Name"}
          userSurName={"Surname"}
          cardDate={"12 / 24"}
          />
          </div>
        </div> */}
        <div className={styles.transactionHistory}>
          <div>
            <p className="font-semibold text-sm mb-1">
              Գործարքների պատմություն
            </p>
            <div className={styles.table_history}>
              {transactionHistory ? (
                <Table
                  rows={[
                    {
                      name: "Ամսաթիվ",
                      render: () => "11/22/2022",
                      tdClassName: "!py-5 !px-5 text-center",
                    },
                    {
                      name: "Գումար",
                      render: () => "1000 դրամ",
                      tdClassName: "!py-5 !px-5 text-center",
                    },
                    {
                      name: "Գործարքի տեսակը",
                      render: () => "Հաշվի համալրում",
                      tdClassName: "!py-5 !px-5 text-center",
                    },
                    {
                      name: "Հաշվի մնացորդը",
                      render: () => "1000 դրամ",
                      tdClassName: "!py-5 !px-5 text-center",
                    },
                  ]}
                  data={generateArray(3, {})}
                />
              ) : (
                <span className="text-xs">Դուք դեռ չունեք կատարած գործարք</span>
              )}
            </div>
          </div>
        </div>
      </div>
      {isModalOpened && (
        <ModalContainer
          onClick={() => setIsModalOpen(false)}
          className={{ modal: "!pt-[14px] !h-[390px] !w-[600px] !px-5" }}
        >
          <div className="h-full flex items-center justify-center relative box-border">
            <div className="absolute top-0 left-0 w-full pb-4  border-b border-[#BEBFE4] text-[#7A64FA]">
              Սակագնային պլան
            </div>

            <div className="w-[75%] flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <span className="text-gray text-sm font-semibold">
                  Ընտրել սակագնային պլանը
                </span>
                <CustomSelect
                  options={["Սակագնային պլանի անվանումը", "asdfghjkl"]}
                  placeholder="Սակագնային պլանի անվանումը"
                  value={selectValue}
                  setValue={setSelectValue}
                  error={selectError}
                />
              </div>
              <div className="flex items-center justify-between">
                <CustomBtn
                  type="submit"
                  title="Չեղարկել"
                  className={styles.payBtn}
                />
                <CustomBtn onClick={selectHandler} title="Հաստատել" />
              </div>
            </div>
          </div>
        </ModalContainer>
      )}
    </>
  );
};