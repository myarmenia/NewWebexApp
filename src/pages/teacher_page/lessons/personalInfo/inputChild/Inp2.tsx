import React from "react";
import buttonImg from "../../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import { useFormContext } from "react-hook-form";
import { CustomSelect } from "../../../../../components/forms/customSelect/CustomSelect";

import "./inputChild.css";
import { inputChildProps, PersonalSubmitForm } from "../InterfacePerson";
import { CstmInput } from "../../../../../components/forms/cstmInput/CstmInput";
export const Inp2: React.FC<inputChildProps> = ({
  option,
  selectName,
  regName,
  // fieldArray,
}) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<PersonalSubmitForm>();
  return (
    <div></div>
    // <div className="inputChild">
    //   <div className="font-semibold text-gray text-sm">Աշխատանքային փորձ</div>
    //    {fieldArray.fields.map(({ id }, index) => {
    //     // const myError =
    //     //   errors?.workattempt && errors?.workattempt[index!]?.position?.message;

    //     return (
    //       <div className="inputChild2" key={id}>
    //         {/* <input
    //           type="text"
    //           className="name"
    //           placeholder="Կազմակերպություն"
    //           {...register(`${regName}.${index}.company`)}
    //         /> */}
    //         {/* <CustomSelect
    //           placeholder="adfsd"
    //           regName={selectName}
    //           className="registration_select"
    //           options={option}
    //         /> */}
    //         {/* <input
    //           type="text"
    //           className="name"
    //           placeholder="Պաշտոն"
    //           {...register(`${regName}.${index}.position`)}
    //         /> */}
    //         {/* <CstmInput
    //           error={myError}
    //           placeholder="Պաշտոն"
    //           regName={`${regName}.${index}.position`}
    //           type="text"
    //         /> */}

    //         <div className="dateValidation">
    //           <div className="checkbox">
    //             <div className="checkboxText">Ժամանակահատված</div>
    //             <div className="checkboxChild">
    //               {/* <input
    //                 type="checkbox"
    //                 {...register(`${regName}.${index}.acceptTerms`)}
    //               /> */}
    //               <div className="clickText">ներկայումս</div>
    //             </div>
    //           </div>
    //           <div className="date">
    //             {/* <input
    //               type="date"
    //               className="dateInp"
    //               {...register(`${regName}.${index}.start`)}
    //             /> */}
    //             <div className="gic"></div>
    //             {/* <input
    //               type="date"
    //               className="dateInp"
    //               {...register(`${regName}.${index}.end`)}
    //             /> */}
    //           </div>
    //         </div>

    //         {/* <textarea
    //           className="textarea"
    //           placeholder="Աշխատանքի նկարագրություն"
    //           {...register(`${regName}.${index}.description`)}
    //         ></textarea> */}
    //       </div>
    //     );
    //   })}
    //   <div className="buttonContainer">
    //     <button
    //       className="add"
    //       type="button"
    //       onClick={() => {
    //         fieldArray.append({
    //           select: "",
    //           company: "",
    //           position: "",
    //           acceptTerms: false,
    //           start: "",
    //           end: "",
    //           description: "",
    //         });
    //       }}
    //     >
    //       <img src={buttonImg} />
    //     </button>
    //     <div className="addText">Ավելացնել</div>
    //   </div>
    // </div>
  );
};
