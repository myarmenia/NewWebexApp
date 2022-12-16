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
import { Calendar, calendarLoader } from "./lessons/calendar/Calendar";
import { json, Routes, useLocation } from "react-router";
import { WeekSchedule } from "./lessons/calendar/weekSchedule/WeekSchedule";
import PersonalInfo from "./personalInfo/PersonalInfo";
import { UserLessons } from "./lessons/userLessons/UserLessons";
import { EditMyLessons } from "./lessons/userLessons/editMyLessons/EditMyLessons";
import { Students } from "./lessons/students/Students";
import { ControlPanel } from "./controlPanel/ControlPanel";
import { Discount } from "./discount/Discount";
import { Wallet } from "./lessons/wallet/Wallet";
import { Feedback } from "./lessons/feedback/Feedback";

// Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Loyaut } from "./loyaut/Loyaut";
import {
  LesPage,
  lessonPageProvider,
} from "./lessons/userLessons/lesPage/LesPage";

export const Teacher: React.FC = () => {
  // console.log(location);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Loyaut />}>
        <Route index element={<AddLesson />} />
        <Route path="my_lesson" element={<UserLessons />}>
          <Route
            index
            element={
              <LesPage
                title="Գրաֆիկ դիզայնի դասընթաց սկսնակների համար"
                stageCount={3}
                stageLessons={12}
                lessonTime={2}
                studentsCount={3}
                keys={[
                  "Արվեստ և դիզայն",
                  "Սկսնակների համար",
                  "Հավաստագիր",
                  "16+",
                ]}
                description="Դասընթացի նկարագրությունը, Որպեսզի արդյունքի հասնելու համար, որն ավելի շատ համապատասխանի վերջնական արդյունքին, գրաֆիկական դիզայներները, Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով ։ "
                price="65 000"
              />
            }
            loader={lessonPageProvider}
          />
        </Route>
        {/* <Route path="new_lesson">
          <Route index element={<NewLesson />} />
          <Route path="lesson_graffic" element={<FirstLesson />} />
        </Route> */}
        <Route path="create_graffic">
          <Route index element={<CreateGraffic />} />
          <Route path="edit_graffic" element={<EditGraffic />} />
        </Route>
        <Route path="calendar">
          <Route index element={<Calendar />} loader={calendarLoader} />
          <Route path="week_schedule" element={<WeekSchedule />} />
        </Route>
        <Route path="personal_info" element={<PersonalInfo />} />
        <Route path="students" element={<Students />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="panel" element={<ControlPanel />} />
        <Route path="discount" element={<Discount />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
