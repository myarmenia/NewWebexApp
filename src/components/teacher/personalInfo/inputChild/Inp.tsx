import React from "react";
import { useFormContext } from "react-hook-form";
import { inputChildProps } from "../InterfacePerson";

const Inp: React.FC = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="inputChild2">
      <div className="infoName">Անձնական տվյալներ</div>
      <input
        type="text"
        className="name"
        placeholder="Հասցե"
        {...register(`adress`)}
      />
      <input
        type="text"
        className="name"
        placeholder="Հեռախոս"
        {...register(`tel`)}
      />
    </div>
  );
};

export default Inp;
