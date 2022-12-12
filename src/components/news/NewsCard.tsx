import React from "react";
import "./news.css";
import arrow from "../../images/newsImages/vector.png";
export interface CardProps {
  title: string;
  text: string;
  date: string;
  delay?: number | undefined;
}
export const NewsCard: React.FC<CardProps> = ({ title, text, date, delay }) => {
  const delay1: number | undefined = delay && delay * 500;
  return (
    <div
      className="newsCard"
      data-aos="zoom-out-right"
      data-aos-duration={delay1 + ""}

    >
      <div className="newsCardChild">
        <p className="cardTitle">{title}</p>
        <div className="cardText">{text}</div>
        <div className="date-and-href">
          <div className="date">{date}</div>
          <a className="href" href="#">
            Ավելին
            <img src={arrow} className="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};
