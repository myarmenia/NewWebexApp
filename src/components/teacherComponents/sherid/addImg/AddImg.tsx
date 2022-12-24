import React from "react";
import { useFormContext } from "react-hook-form";
import Input from "../Input";
import "./addImg.css";
const AddImg: React.FC = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="addImgCustom">
      <div className="addImgChild">
        <div className="addImgInp">
          <input type="file" className="imgDownload" {...register(`img`)} />
          <div className="addImgText">Ավելացնել նկար</div>
        </div>
        <div className="infoImg">
          <div className="infoName">Անուն Ազգանուն</div>
          <div className="infoTeacher">Դասախոս</div>
          <div className="infoMail">Էլ․ փոստ՝ studentexample@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default AddImg;
