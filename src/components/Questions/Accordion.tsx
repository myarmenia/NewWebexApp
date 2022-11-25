import React from "react";
import "./questions.css";
interface AccordionProps {
  title: string;
  text: string;
}
export const Accordion: React.FC<AccordionProps> = ({ title, text }) => {
  return (
    <section className="accordion">
      <article className="accordionChild">
        <div className="toggle">
          <div className="accordionTitle">{title}</div>
          <input className="expand-btn" type="checkbox" />
        </div>
        <p className="text">{text}</p>
      </article>
    </section>
  );
};
