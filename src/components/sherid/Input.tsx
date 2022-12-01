import React from "react";
import "./input.css";
interface InputProps {
  type: string;
  error?: string;
  placholder?: string;
  url: string;
  register?: {
    name: string;
    value?: string;
    error?: string;
  };
}
const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="form-group">
      <img src={props.url} />
      <input
        {...props?.register}
        type={props.type}
        placeholder={props.placholder}
        className={`form-control ${props?.error ? "is-invalid" : ""}`}
      />

      <div className="invalid-feedback">{props?.error}</div>
    </div>
  );
};

export default Input;
