import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import "./addImg.css";
const AddImg: React.FC = () => {
  const [file, setFile] = useState<string | any>("");
  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(URL.createObjectURL(event.target.files![0]));
  };

  const { register } = useFormContext();
  return (
    <div className="addImgCustom">
      <div className="addImgChild">
        <div className="addImgInp" style={{ backgroundImage: `url(${file})` }}>
          {/* <img src={file} alt="imgUser" /> */}
          <input
            type="file"
            className={!file ? "imgDownload" : "imgDownload2"}
            {...register(`img`)}
            onChange={onFileUpload}
          />
          {!file && <div className="addImgText">Ավելացնել նկար</div>}
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
