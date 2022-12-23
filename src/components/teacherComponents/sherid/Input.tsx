import React from "react";
import "./input.css";
interface InputProps {
  type: string;
  error?: string;
  className?: string;
  placeholder?: string;
  url?: string;
  title?: string;
  register?: {
    name?: string;
    value?: string;
    error?: string;
  };
}
const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="form-group">
      {props.url && <img src={props.url} />}
      <input
        {...props?.register}
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
      />
      {props?.error && <div className="invalid-feedback">{props?.error}</div>}
    </div>
  );
};

export default Input;
