import React from "react";
import "./features.css";
import { FeatureBoxProps } from "../../models/interfaces";
import img1 from "../../images/Features/Frame1.svg";
import img2 from "../../images/Features/Frame2.svg";
import img3 from "../../images/Features/Frame3.svg";
import img4 from "../../images/Features/Frame4.svg";
import img5 from "../../images/Features/Frame5.svg";
import divImg1 from "../../images/Features/Group 1572.svg";
import divImg2 from "../../images/Features/Group 1573.svg";
import divImg3 from "../../images/Features/Group 1574.svg";
import divImg4 from "../../images/Features/Group 1575.svg";
import divImg5 from "../../images/Features/Group 1576.svg";
import { FeatureBox } from "./featureBox/FeatureBox";

const featureArr: FeatureBoxProps[] = [
  {
    title: "Վիդեո դասեր",
    url: img1,
    divUrl: divImg1,
  },
  {
    title: "Ուսումնական նյութեր",
    url: img2,
    divUrl: divImg2,
  },
  {
    title: "Հավաստագիր",
    url: img3,
    divUrl: divImg3,
  },
  {
    title: "Հավաստագիր",
    url: img4,
    divUrl: divImg4,
  },
  {
    title: "Պրեզենտացիաներ",
    url: img5,
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
