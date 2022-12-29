import React from "react";
import { useFormContext } from "react-hook-form";
import buttonImg from "../../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import { CustomSelect } from "../../../../../components/teacherComponents/customSelect/CustomSelect";

import { CstmInput } from "../../../../../components/teacherComponents/cstmInput/CstmInput";
import { CstmTextarea } from "../../../../../components/teacherComponents/cstmTextarea/CstmTextarea";
import { inputChildProps, PersonalSubmitForm } from "../InterfacePerson";
import "./inputChild.css";
export const Inp2: React.FC<inputChildProps> = ({ regName, fieldArray }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<PersonalSubmitForm>();
  return (
    <div className="inputChild">
      <div className="font-semibold text-gray text-sm">Աշխատանքային փորձ</div>
      {fieldArray.fields.map(({ id }, index) => {
        const descriptionError =
          errors.workattempt && errors.workattempt[index]?.description?.message;
        const selectError =
          errors.workattempt && errors.workattempt[index]?.select?.message;
        const companyError =
          errors.workattempt && errors.workattempt[index]?.company?.message;
        const positionError =
          errors.workattempt && errors.workattempt[index]?.position?.message;
        return (
          <div className="inputChild2" key={id}>
            <CstmInput
              type="text"
              // className="name"
              placeholder="Կազմակերպություն"
              regName={`${regName}.${index}.company`}
              error={companyError}
            />
            <CustomSelect
              placeholder="adfsd"
              regName={`${regName}.${index}.select`}
              className="registration_select"
              options={["chka", "sadd", "asd", "klka"]}
              error={selectError}
            />
            <CstmInput
              type="text"
              className="name"
              placeholder="Պաշտոն"
              regName={`${regName}.${index}.position`}
              error={positionError}
            />
            <div className="dateValidation">
              <div className="checkbox">
                <div className="checkboxText">Ժամանակահատված</div>
                <div className="checkboxChild">
                  <input
                    type="checkbox"
                    {...register(`workattempt.${index}.acceptTerms`)}
                  />
                  <div className="clickText">ներկայումս</div>
                </div>
              </div>
              <div className="date">
                <input
                  type="date"
                  className="dateInp"
                  {...register(`workattempt.${index}.start`)}
                />
                <div className="gic"></div>
                <input
                  type="date"
                  className="dateInp"
                  {...register(`workattempt.${index}.end`)}
                />
              </div>
            </div>
            <CstmTextarea
              placeholder="Աշխատանքի նկարագրություն"
              error={descriptionError}
              regName={`workattempt.${index}.description`}
            />
          </div>
        );
      })}
      <div className="buttonContainer">
        <button
          className="add"
          type="button"
          onClick={() => {
            fieldArray.append({
              select: "",
              company: "",
              position: "",
              acceptTerms: false,
              start: "",
              end: "",
              description: "",
            });
          }}
        >
          <img src={buttonImg} />
        </button>
        <div className="addText">Ավելացնել</div>
      </div>
    </div>
  );
};
