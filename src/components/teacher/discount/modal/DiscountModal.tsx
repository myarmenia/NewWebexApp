import React from "react";
import { CustomSelect } from "../../lesComponents/customSelect/CustomSelect";
import "./discountModal.css";
import ModalCard from "./ModalCard";
interface ModalProps {
  modalActiveClick: React.MouseEventHandler<HTMLButtonElement>;
}
export const ModalDiscount: React.FC<ModalProps> = ({ modalActiveClick }) => {
  return (
    <div className="modal">
      <div className="modalChild">
        <div className="modalTitle">Ակտիվացնել Զեղչ</div>
        <div className="modalInput">
          <div className="modalInputChild">
            <div className="modalInpTitle">Զեղչի քանակ</div>
            <div className="modalInp">
              <input className="modal-inp1" placeholder="Արժեք" />
              {/* <CustomSelect
                regName="select"
                className="registration_select"
                select={{
                  title: "sada",
                  options: ["asdsad", "asdads", "adsd"],
                }}
              /> */}
            </div>
            <div className="modalInpTitle">Դասընթացներ</div>
            <div className="modalInp">
              <input className="modal-inp1" placeholder="Արժեք" />
            </div>
          </div>
          <div className="modalInputChild2">
            <div className="modalInpTitle">Ժամանակահատված</div>
            <div className="date">
              <input type="date" className="dateInp" />
              <div className="gic"></div>
              <input type="date" className="dateInp" />
            </div>
            <div className="modalCheckbox">
              <input type="checkbox" className="modalCheck" />
              <div className="checkboxText">Անժամկետ</div>
            </div>
          </div>
        </div>
        <div className="modalCard">
          <ModalCard />
          <ModalCard />
          <ModalCard />
          <ModalCard />
        </div>
        <div className="modalButton">
          <button onClick={modalActiveClick}>Չեղարկել</button>
          <button>Հաստատել</button>
        </div>
      </div>
    </div>
  );
};
