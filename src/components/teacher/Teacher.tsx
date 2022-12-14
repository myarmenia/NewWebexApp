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
import { Route, Routes, useLocation } from "react-router";
import { WeekSchedule } from "./lessons/calendar/weekSchedule/WeekSchedule";
import PersonalInfo from "./personalInfo/PersonalInfo";
import { UserLessons } from "./lessons/userLessons/UserLessons";
import { EditMyLessons } from "./lessons/userLessons/editMyLessons/EditMyLessons";
import { Students } from "./lessons/students/Students";
import { ControlPanel } from "./controlPanel/ControlPanel";
import { Discount } from "./discount/Discount";
import { Wallet } from "./lessons/wallet/Wallet";
import { Feedback } from "./lessons/feedback/Feedback";

export const Teacher: React.FC = () => {
  const location = useLocation();
  // console.log(location);

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

        {/* <PersonalInfo /> */}
        {/* <ControlPanel /> */}
        <Discount />
        {/* <WeekSchedule /> */}
        {/* <UserLessons /> */}
        {/* <Students /> */}

        {/* <WeekSchedule /> */}
        {/* <UserLessons /> */}
        {/* <Students /> */}
        {/* <Wallet /> */}
        <Feedback />

        {/* <CreateGraffic /> */}
        {/* <Route index path="/" element={<WeekSchedule />}></Route> */}

        {/* <Route index path="/" element={<FirstLesson />}></Route> */}
        {/* <Routes>
          <Route path="/">
            <Route index element={<UserLessons />}></Route>
            <Route path="/newLesson" element={<NewLesson />}></Route>
            <Route path="/createGraffic" element={<CreateGraffic />}></Route>
            <Route path="/calendar" element={<Calendar />}></Route>
          </Route>
        </Routes> */}
        {/* <Route path="firstLesson" element={<FirstLesson />}></Route> */}
        {/* <Route path="exam" element={<Exam />}></Route> */}
      </Content>
    </div>
  );
};
