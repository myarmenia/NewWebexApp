import React from "react";
import Input from "../../../sherid/Input";
import { CustomSelect } from "../../lesComponents/customSelect/CustomSelect";
import InputTime from "../../userComponents/InputTime";
import buttonImg from "../../../../images/createGraffic/buttonimg.svg";
import "./inputChild.css";
interface inputChildProps {
  isActive?: boolean;
}
export const InputChild: React.FC<inputChildProps> = ({ isActive }) => {
  return (
    <>
      <div className="infoName">Աշխատանքային փորձ</div>
      <input type="text" className="name" placeholder="Կազմակերպություն" />
      <CustomSelect
        regName="select"
        className="registration_select"
        select={{
          title: "sada",
          options: ["asdsad", "asdads", "adsd"],
        }}
      />
      <input type="text" className="name" placeholder="Պաշտոն" />
      <div className="dateValidation">
        <div className="checkbox">
          {isActive ? (
            <>
              <div className="checkboxText">Ժամանակահատված</div>
              <div className="checkboxChild">
                <input type="checkbox" />
                <div className="clickText">ներկայումս</div>
              </div>
            </>
          ) : (
            <div className="checkboxText">Ուսումնառության ժամանակահատված</div>
          )}
        </div>
        <div className="date">
          <input type="date" className="dateInp" />
          <div className="gic"></div>
          <input type="date" className="dateInp" />
        </div>
      </div>
      {isActive ? (
        <textarea
          className="textarea"
          placeholder="Աշխատանքի նկարագրություն"
        ></textarea>
      ) : null}
      <div className="buttonContainer">
        <button className="add">
          <img src={buttonImg} />
        </button>
        <div className="addText">Ավելացնել</div>
      </div>
    </>
  );
};
