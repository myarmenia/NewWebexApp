import React from "react";
import "./opinion.css";
import imgStudent from "../../images/opinionImages/student.png";
export const OpinionCard: React.FC = () => {
  return (
    <>
      <div className="studentQuotes">
        <img src={imgStudent} className="studentImg" />
        <div className="studentQuotesChild">
          <div className="symbol">66</div>
          <div className="opinionText">
            <img src={imgStudent} className="studentImg1" />
            Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական
            հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ.
            դասական լատինական գրականություն. այն 2000 տարեկան է։Ռիչարդ
            ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի
            դասախոս՝ ուսումնասիրելով ։
          </div>
        </div>
      </div>
    </>
  );
};
