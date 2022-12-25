import React, { FC, useState } from "react";
import "./walletCont.css";
import fillBalanceImg from "../../../../../../assets/teacher_images/exam/Group 1552.svg";
import editPenImg from "../../../../../../assets/teacher_images/userLessons/editGray.svg";
import { AttachedCard } from "../attachedCard/AttachedCard";
import { WalTbody } from "../walTbody/WalTbody";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomBtn } from "../../../../../../components/teacherComponents/customBtn/CustomBtn";
import { ModalContainer } from "../../../../../../components/modalContainer/ModalContainer";
import { CustomSelect } from "../../../../../../components/teacherComponents/customSelect/CustomSelect";
import { CstmThead } from "../../../../../../components/teacherComponents/cstmThead/CstmThead";

interface WalletContProps {
  balance: number;
}

const walletModalFormSchema = yup.object().shape({
  planSelect: yup.string(),
});

export interface IWalletModalForm {
  planSelect: string;
}
export const WalletCont: FC<WalletContProps> = ({ balance }) => {
  const [transactionHistory, setTransactionHistory] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [tarifPlanName, setTarifPlanState] = useState<string>();

  const methods = useForm<IWalletModalForm>({
    resolver: yupResolver(walletModalFormSchema),
  });
  return (
    <>
      <div className="walletCont">
        <div className="walletCont_header">
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
            <div className="tariffPlanBox">
              <div className="flex items-center gap-4">
                <p className="font-semibold text-sm mb-1">Սակագնային պլան</p>
                <img
                  onClick={() => setIsModalOpen(true)}
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
            <CustomBtn type="button" title="Վճարել" className="payBtn" />
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
        <div className="transactionHistory">
          <div>
            <p className="font-semibold text-sm mb-1">
              Գործարքների պատմություն
            </p>
            <div className="table_history">
              {transactionHistory ? (
                <table className="w-full">
                  {/* <WalThead /> */}
                  <CstmThead
                    thClassName="!text-center"
                    items={[
                      "Ամսաթիվ",
                      "Գումար",
                      "Գործարքի տեսակը",
                      "Հաշվի մնացորդը",
                    ]}
                  />
                  <WalTbody />
                </table>
              ) : (
                <span className="text-xs">Դուք դեռ չունեք կատարած գործարք</span>
              )}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ModalContainer
          onClick={() => setIsModalOpen(false)}
          className={{ modal: "!pt-[14px] !h-[390px] !w-[600px] !px-5" }}
        >
          <div className="h-full flex items-center justify-center relative box-border">
            <div className="absolute top-0 left-0 w-full pb-4  border-b border-[#BEBFE4] text-[#7A64FA]">
              Սակագնային պլան
            </div>
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit((data) => console.log(data))}
                className="w-[75%] flex flex-col gap-12"
              >
                <div className="flex flex-col gap-4">
                  <span className="text-gray text-sm font-semibold">
                    Ընտրել սակագնային պլանը
                  </span>
                  <CustomSelect
                    options={["Սակագնային պլանի անվանումը", "asdfghjkl"]}
                    regName="planSelect"
                    placeholder="Սակագնային պլանի անվանումը"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <CustomBtn
                    type="submit"
                    title="Չեղարկել"
                    className="payBtn"
                  />
                  <CustomBtn type="submit" title="Հաստատել" />
                </div>
              </form>
            </FormProvider>
          </div>
        </ModalContainer>
      )}
    </>
  );
};
