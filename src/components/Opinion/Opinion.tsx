import React from "react";
import imgStudent from "../../images/opinionImages/student.png";
import "./opinion.css";
export const Opinion: React.FC = () => {
  return (
    <div className="opinionContainer">
      <div className="opinionTitle">Ուսանողի կարծիքը</div>
      <div className="opinionContainerChild">
        <div className="studentQuotes">
          <img src={imgStudent} className="studentImg" />
          <div className="studentQuotesChild">
            <div className="symbol">66</div>
            <p className="opinionText">
              Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական
              հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ.
              դասական լատինական գրականություն. այն 2000 տարեկան է։
            </p>
            <p className="opinionText">
              Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի
              մի դասախոս՝ ուսումնասիրելով ։
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
