import React from "react";
import "./input.css";
interface SelectProps {
  register?: {
    name: string;
    value?: string;
    error?: string;
  };
}
const Select: React.FC<SelectProps> = (props) => {
  return (
    <>
      <select {...props?.register}>
        <option value="asdasd">asdasd</option>
        <option value="va">barev</option>
        <option value="es">esim</option>
      </select>
      <div className="invalid-feedback"></div>
    </>
  );
};

export default Select;
