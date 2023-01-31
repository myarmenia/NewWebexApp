import React, { FC } from "react";
import styles from "./extraMaterial.module.css";
import fileImg from "../../../../../../assets/teacher_images/userLessons/Group 1701.svg";

interface ExtraMaterialsProps {
  items: string[];
}

export const ExtraMaterials: FC<ExtraMaterialsProps> = ({ items }) => {
  return (
    <div className={styles.extraMaterials}>
      <p className="text-xs font-semibold">Հավելյալ նյութերը</p>
      <div className={styles.extMatItems}>
        {items.map((item, i) => (
          <div className={styles.extraMat} key={Math.random()}>
            <img src={fileImg} alt="" />
            <span>
              {i + 1}.{item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
