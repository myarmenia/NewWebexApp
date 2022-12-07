import React, { useState } from "react";
import "./teacher.css";
import { UserHeader } from "./userHeader/UserHeader";
import { UserMenu } from "./userMenu/UserMenu";
import { Content } from "./content/Content";
import { AddLesson } from "./addLesson/AddLesson";
import { NewLesson } from "./lessons/newLesson/NewLesson";
import { LessonTitle } from "./lessonTitle/LessonTitle";
import { FirstLesson } from "./lessons/firstLesson/FirstLesson";

export const Teacher: React.FC = () => {
  return (
    <div className="content">
      <UserHeader />
      <UserMenu />
      <Content>
        {/* <LessonTitle title="Նոր դասընթաց" /> */}

        {/* <AddLesson /> */}
        {/* <NewLesson /> */}
        <FirstLesson />
      </Content>
    </div>
  );
};
