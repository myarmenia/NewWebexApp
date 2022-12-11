import React, { useState } from "react";
import "./teacher.css";
import { UserHeader } from "./userHeader/UserHeader";
import { UserMenu } from "./userMenu/UserMenu";
import { Content } from "./content/Content";
import { AddLesson } from "./lessons/addLesson/AddLesson";
import { NewLesson } from "./lessons/newLesson/NewLesson";
import { LessonTitle } from "./lessonTitle/LessonTitle";
import { FirstLesson } from "./lessons/firstLesson/FirstLesson";
import CreateGraffic from "./userComponents/CreateGraffic";
import { Exam } from "./lessons/exam/Exam";
import EditGraffic from "./userComponents/editGraffic/EditGraffic";
import { Calendar } from "./lessons/calendar/Calendar";
import { Route, Routes } from "react-router";
import { WeekSchedule } from "./lessons/calendar/weekSchedule/WeekSchedule";
import { UserLessons } from "./lessons/userLessons/UserLessons";

export const Teacher: React.FC = () => {
  return (
    <div className="content">
      <UserHeader />
      <UserMenu />
      <Content>
        {/* <LessonTitle title="Նոր դասընթաց" /> */}

        {/* <AddLesson /> */}
        {/* <NewLesson /> */}
        {/* <FirstLesson /> */}
        {/* <CreateGraffic /> */}
        {/* <EditGraffic /> */}

        {/* <Exam /> */}
        {/* <Calendar /> */}
        {/* <WeekSchedule /> */}
        {/* <UserLessons /> */}

        {/* <CreateGraffic /> */}
        <Routes>
          {/* <Route index path="/" element={<FirstLesson />}></Route> */}
          {/* <Route index path="/" element={<WeekSchedule />}></Route> */}
          <Route index path="/" element={<UserLessons />}></Route>
          <Route path="newLesson" element={<NewLesson />}></Route>
          <Route path="createGraffic" element={<CreateGraffic />}></Route>
          <Route path="calendar" element={<Calendar />}></Route>
        </Routes>
        {/* <Route path="firstLesson" element={<FirstLesson />}></Route> */}
        {/* <Route path="exam" element={<Exam />}></Route> */}
      </Content>
    </div>
  );
};
