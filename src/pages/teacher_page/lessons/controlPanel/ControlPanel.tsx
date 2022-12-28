import React from "react";
import PersonalInfo from "../personalInfo/PersonalInfo";
import "./controlPanel.css";
import { PanelChild } from "./panelChild/PanelChild";
import PersonalData from "./panelChild/PersonalData";
import lessons from "../../../../assets/teacher_images/controlPanel/lessons.svg";
import book from "../../../../assets/teacher_images/controlPanel/book.svg";
import student from "../../../../assets/teacher_images/controlPanel/student.svg";
import opinion from "../../../../assets/teacher_images/controlPanel/opinion.svg";
import discount from "../../../../assets/teacher_images/controlPanel/discount.svg";
import notification from "../../../../assets/teacher_images/controlPanel/notification.svg";
import help from "../../../../assets/teacher_images/controlPanel/help.svg";
import { LessonTitle } from "../../../../components/reusable/lessonTitle/LessonTitle";

export const ControlPanel = () => {
  return (
    <>
      <LessonTitle title="Ղեկավարման վահանակ" />
      <div className="controlPanel">
        <PersonalData title="Անձնական տվյալներ" />
        <PanelChild
          title="Իմ դասընթացները"
          isActiv={true}
          url={lessons}
          num="5"
          count="10"
          text="Պահանջված"
        />
        <PanelChild
          title="Տնայիններ"
          isActiv={true}
          url={book}
          num="4"
          count="3"
          text="Չստուգված "
        />
        <PanelChild
          title="Ուսանողներ"
          isActiv={true}
          url={student}
          num="2"
          count="4"
          text="Ներկայումս սովորող"
        />
        <PanelChild
          title="Ուսանողների կարծիքներ"
          isActiv={true}
          url={opinion}
          num="8"
          text="Զեղչված դաս"
        />
        <PanelChild
          title="Զեղչեր պրոմո"
          isActiv={true}
          url={discount}
          num="10"
          text="Զեղչված դաս"
        />
        <PanelChild
          title="Ծանուցումներ"
          isActiv={true}
          url={notification}
          num="8"
          count="10"
          text="Ներկայումս սովորող"
        />

        <PanelChild
          title="Աջակցություն"
          isActiv={true}
          url={help}
          num="8"
          count="10"
          text="Զեղչված դաս"
        />
      </div>
      <div className="grafficLesson">Դասավանդման գրաֆիկ</div>
      <div className="controlPanel2">
        <PanelChild title="Երկուշաբթի" isActiv={false} />
        <PanelChild title="Երեքշաբթի" isActiv={false} />
        <PanelChild title="Չորեքշաբթի" isActiv={false} />
        <PanelChild title="Հինգշաբթի" isActiv={false} />
        <PanelChild title="Ուրբաթ" isActiv={false} />
        <PanelChild title="Շաբաթ" isActiv={false} />
        <PanelChild title="Կիրակի" isActiv={false} />
      </div>
    </>
  );
};
