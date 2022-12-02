import React from "react";
import "./features.css";
import { FeatureBoxProps } from "../../models/interfaces";
import img1 from "../../images/Features/Frame1.svg";
import img2 from "../../images/Features/Frame2.svg";
import img3 from "../../images/Features/Frame3.svg";
import img4 from "../../images/Features/Frame4.svg";
import img5 from "../../images/Features/Frame5.svg";
import divImg1 from "../../images/Features/Rectangle 322.svg";
import divImg2 from "../../images/Features/Rectangle 323.svg";
import divImg3 from "../../images/Features/Rectangle 324.svg";
import divImg4 from "../../images/Features/Rectangle 326.svg";
import divImg5 from "../../images/Features/Rectangle 328.svg";
import { FeatureBox } from "./featureBox/FeatureBox";

const featureArr: FeatureBoxProps[] = [
  {
    title: "Վիդեո դասեր",
    staticImg: img1,
    divUrl: divImg1,
  },
  {
    title: "Ուսումնական նյութեր",
    staticImg: img2,
    divUrl: divImg2,
  },
  {
    title: "Հավաստագիր",
    staticImg: img3,
    divUrl: divImg3,
  },
  {
    title: "Հավաստագիր",
    staticImg: img4,
    divUrl: divImg4,
  },
  {
    title: "Պրեզենտացիաներ",
    staticImg: img5,
    divUrl: divImg5,
  },
];

export const Features: React.FC = () => {
  return (
    <div className="features">
      <h4 className="featuresTitle">Մեզ հետ դու կարող ես (առանձնահատկություններ)</h4>
      <div className="featureBoxes">
        {featureArr.map((el, index) => (
          <FeatureBox {...el} key={index} />
        ))}
      </div>
    </div>
  );
};
