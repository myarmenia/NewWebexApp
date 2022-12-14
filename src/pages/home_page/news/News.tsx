import React from "react";
import "./news.css";
import { NewsCard } from "./NewsCard";
import { CardProps } from "./NewsCard";

const newsCard: CardProps[] = [
  {
    title: "Նորության վերնագիրը",
    text: " Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահականհավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ.դասական լատինական գրականություն. այն 2000 տարեկան է",
    date: "22/11/22",
  },
  {
    title: "Նորության վերնագիրը",
    text: " Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահականհավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ.դասական լատինական գրականություն. այն 2000 տարեկան է",
    date: "21/11/22",
  },
  {
    title: "Նորության վերնագիրը",
    text: " Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահականհավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ.դասական լատինական գրականություն. այն 2000 տարեկան է",
    date: "20/11/22",
  },
  {
    title: "Նորության վերնագիրը",
    text: " Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահականհավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ.դասական լատինական գրականություն. այն 2000 տարեկան է",
    date: "20/11/22",
  },
];
export const News: React.FC = () => {
  return (
    <div className="newsContainer">
      <div className="newsTitle">Նորություններ</div>
      <div className="newsContainerChild">
        {newsCard.map((props, index) => {
          return <NewsCard {...props} key={index} delay={index} />;
        })}
      </div>
    </div>
  );
};
