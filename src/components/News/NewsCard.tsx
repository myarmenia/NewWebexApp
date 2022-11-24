import React from "react";
import arrowImg from "./img/vector.png";
import "./News.css";
import img1 from "./img/vector.png";

export const NewsCard: React.FC = () => {
  return (
    <div className="newsCard">
      <div className="newsCardChild">
        <p className="cardTitle">Նորության վերնագիրը</p>
        <div className="cardText">
          Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական
          հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ.
          դասական լատինական գրականություն. այն 2000 տարեկան է։
        </div>
        <div className="date-and-href">
          <div className="date">22/11/22</div>
          <a className="href" href="#">
            Ավելին
            {/* <img src={img1} /> */}
          </a>
        </div>
      </div>
    </div>
  );
};
