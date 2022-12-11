import React, { FC } from "react";
import "./extraMaterial.css";
import fileImg from "../../../../../../images/Teacher/UserLessons/Group 1701.svg";

interface ExtraMaterialsProps {
  items: string[];
}

export const ExtraMaterials: FC<ExtraMaterialsProps> = ({ items }) => {
  return (
    <div className="extraMaterials">
      <p className="text-xs font-semibold">Հավելյալ նյութերը</p>
      <div className="extMatItems">
        {items.map((item, i) => (
          <div className="extraMat" key={Math.random()}>
            <img src={fileImg} alt="" />
            <span>
              {i+1}.{item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
