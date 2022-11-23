import React from "react";
import "./Questions.css";
export const Accordion = () => {
  return (
    <section className="accordion">
      <article className="accordionChild">
        <div className="toggle">
          <div className="accordionTitle">Հաճախ տրվող հարցեր</div>
          <input className="expand-btn" type="checkbox" />
        </div>
        <p className="text">
          Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական
          հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ.
          դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ
          ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝
          ուսումնասիրելով Lorem Ipsum տեքստի ամենատարօրինակ բառերից մեկը՝
          «consectetur»-ը, և այն որոնելով դասական գրականության մեջ՝ բացահայտեց
          դրա իսկական աղբյուրը։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ
          քոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով Lorem Ipsum տեքստի
          ամենատարօրինակ բառերից մեկը՝ «consectetur»-ը, և այն որոնելով դասական
          գրականության մեջ՝ բացահայտեց դրա իսկական աղբյուրը։
        </p>
      </article>
    </section>
  );
};
