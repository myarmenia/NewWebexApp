import React from "react";
import buttonImg from "../../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import { useFormContext } from "react-hook-form";
import { CustomSelect } from "../../../../../components/forms/customSelect/CustomSelect";
import { inputChildProps } from "../InterfacePerson";
import "./inputChild.css";

// export const Inp3: React.FC<inputChildProps> = ({
//   option,
//   selectName,
//   regName,
//   fieldArray,
// }) => {
//   const {
//     register,
//     watch,
//     formState: { errors },
//   } = useFormContext();

//   return (
//     <div className="inputChild">
//       <div className="font-semibold text-gray text-sm">Կրթություն</div>
//       {fieldArray.fields.map(({ id }, index) => {
//         return (
//           <div className="inputChild2" key={id}>
//             <CustomSelect
//               placeholder="adsfdsf"
//               regName={selectName}
//               className="registration_select"
//               options={option}
//             />

//             <input
//               type="text"
//               className="name "
//               placeholder="Ուսումնական հաստատություն"
//               {...register(`${regName}.${index}.statement`)}
//             />

//             <input
//               type="text"
//               className="name "
//               placeholder="Ֆակուլտետ"
//               {...register(`${regName}.${index}.faculty`)}
//             />

//             <input
//               type="text"
//               className="name "
//               placeholder="Մասնագիտություն"
//               {...register(`${regName}.${index}.proffesion`)}
//             />

//             <div className="dateValidation">
//               <div className="checkbox">
//                 <div className="checkboxText">
//                   Ուսումնառության ժամանակահատված
//                 </div>
//               </div>
//               <div className="date">
//                 <input
//                   type="date"
//                   className="dateInp"
//                   {...register(`${regName}.${index}.start`)}
//                 />
//                 <div className="gic"></div>
//                 <input
//                   type="date"
//                   className="dateInp"
//                   {...register(`${regName}.${index}.end`)}
//                 />
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       <div className="buttonContainer">
//         <button
//           className="add"
//           type="button"
//           onClick={() => {
//             fieldArray.append({
//               select2: "",
//               statement: "",
//               faculty: "",
//               profession: "",
//               start: "",
//               end: "",
//             });
//           }}
//         >
//           <img src={buttonImg} />
//         </button>
//         <div className="addText">Ավելացնել</div>
//       </div>
//     </div>
//   );
// };
