import React from "react";
import arrowImg from "./img/vector.png";
import "./news.css";
import img1 from "./img/vector.png";
interface CardProps {
  title: string;
  text: string;
  date: string;
}
export const NewsCard: React.FC<CardProps> = ({ title, text, date }) => {
  return (
    <div className="newsCard">
      <div className="newsCardChild">
        <p className="cardTitle">{title}</p>
        <div className="cardText">{text}</div>
        <div className="date-and-href">
          <div className="date">{date}</div>
          <a className="href" href="#">
            Ավելին
            {/* <img src={img1} /> */}
          </a>
        </div>
      </div>
    </div>
  );
};
