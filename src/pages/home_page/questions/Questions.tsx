import React from "react";
import { Accordion } from "./Accordion";
import "./questions.css";
interface AccordionProps {
  title: string;
  text: string;
}
const accordionCard: AccordionProps[] = [
  {
    title: "Սովորեք Ձեզ հարմար ժամերին և Ձեզ հարմար վայրից",
    text: " Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահականհավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ.դասական լատինական գրականություն. այն 2000 տարեկան է",
  },
  {
    title: "Հաճախ տրվող հարցեր",
    text: "   Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով Lorem Ipsum տեքստի ամենատարօրինակ բառերից մեկը՝ «consectetur»-ը, և այն որոնելով դասական գրականության մեջ՝ բացահայ դրա իսկական աղբյուրը։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյքոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով Lorem Ipsum տեքստի ամենատարօրինակ բառերից մեկը՝ «consectetur»-ը, և այն որոնելով դասականգրականության մեջ՝ բացահայտեց դրա իսկական աղբյուրը։",
  },
  {
    title: "Սովորեք Ձեզ հարմար ժամերին և Ձեզ հարմար վայրից",
    text: " Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահականհավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ.դասական լատինական գրականություն. այն 2000 տարեկան է",
  },
  {
    title: "Հաճախ տրվող հարցեր",
    text: "   Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով Lorem Ipsum տեքստի ամենատարօրինակ բառերից մեկը՝ «consectetur»-ը, և այն որոնելով դասական գրականության մեջ՝ բացահայ դրա իսկական աղբյուրը։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյքոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով Lorem Ipsum տեքստի ամենատարօրինակ բառերից մեկը՝ «consectetur»-ը, և այն որոնելով դասականգրականության մեջ՝ բացահայտեց դրա իսկական աղբյուրը։",
  },
];
export const Questions: React.FC = () => {
  return (
    <div className="questionsContainer">
      <div className="questionsTitle">Հաճախ տրվող հարցեր</div>
      <div className="questionsContainerChild">
        {accordionCard.map((props, index) => {
          return <Accordion {...props} key={index} />;
        })}
      </div>
    </div>
  );
};
