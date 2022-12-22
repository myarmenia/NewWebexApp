import React, { FC, Fragment, useEffect, useState } from "react";
import "./teacher.css";
//  pages
import { AddLesson } from "./lessons/addLesson/AddLesson";
import { NewLesson } from "./lessons/newLesson/NewLesson";
import { FirstLesson } from "./lessons/firstLesson/FirstLesson";
import CreateGraffic from "./userComponents/CreateGraffic";
import { Exam } from "./lessons/exam/Exam";
import EditGraffic from "./userComponents/editGraffic/EditGraffic";
import { Calendar, calendarLoader } from "./lessons/calendar/Calendar";
import { WeekSchedule } from "./lessons/calendar/weekSchedule/WeekSchedule";
import PersonalInfo from "./personalInfo/PersonalInfo";
import { EditMyLessons } from "./lessons/userLessons/editMyLessons/EditMyLessons";
import { Students } from "./lessons/students/Students";
import { ControlPanel } from "./controlPanel/ControlPanel";
import { Discount } from "./discount/Discount";
import { Wallet } from "./lessons/wallet/Wallet";
import {
  Feedback,
  feedbackLessonLoader,
  feedback_studentsLoader,
  // feedbackLessonLoader,
  // feedback_studentsLoader,
} from "./lessons/feedback/Feedback";

// lessons for user
import { extItems, UserLessons } from "./lessons/userLessons/UserLessons";
import {
  Lessons,
  lessonsLoader,
  // lessonsLoader,
} from "./lessons/userLessons/lessonsPage/Lessons";
import {
  LesPage,
  lessonPageLoader,
  // lessonPageLoader,
} from "./lessons/userLessons/lesPage/LesPage";
import { StageLesPage } from "./lessons/userLessons/stageLesPage/StageLesPage";

// Router
import { Outlet } from "react-router";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Loyaut } from "./loyaut/Loyaut";
import { LesTask } from "./lessons/feedback/feedbackComponents/mesContent/lesTask/LesTask";
import { MesHomeWork } from "./lessons/feedback/feedbackComponents/mesContent/mesHomeWork/MesHomeWork";
import { MesMessages } from "./lessons/feedback/feedbackComponents/mesContent/mesMessages/MesMessages";
import { useDispatch, useSelector } from "react-redux";
import {
  getFeedbackMessages,
  getFeedbackStudents,
  getLessons,
  lessonsSelectorFN,
} from "../../redux/reducers/main";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Loyaut />}>
      {/* <Route index element={<Exam />} /> */}
      <Route index element={<AddLesson />} />
      <Route path="new_lesson/*">
        <Route index element={<NewLesson />} />
        <Route path="lesson_graffic/*" element={<FirstLesson />} />
      </Route>
      <Route path="my_lesson" element={<UserLessons />}>
        <Route index element={<Lessons />} loader={lessonsLoader} />
        <Route path="stage/:id">
          <Route
            index
            element={
              <LesPage
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
                price="65 000"
              />
            }
            loader={lessonPageLoader}
          />
          <Route path="lesson/:les">
            <Route index element={<StageLesPage />} loader={lessonPageLoader} />
            <Route
              path="edit"
              element={
                <EditMyLessons
                  inp1=""
                  inp2=""
                  inp3=""
                  inp4=""
                  lesItems={extItems}
                  homeItmes={extItems}
                />
              }
              loader={lessonPageLoader}
            />
          </Route>
        </Route>
      </Route>
      <Route path="exam" element={<Exam />} />
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
      <Route path="feedback">
        <Route
          path="student/:stdId"
          element={<Feedback />}
          loader={feedback_studentsLoader}
        >
          <Route path="lesson/:id" loader={feedbackLessonLoader}>
            <Route
              path="task"
              element={<LesTask />}
              loader={feedbackLessonLoader}
            />
            <Route
              path="homework"
              element={<MesHomeWork />}
              loader={feedbackLessonLoader}
            />
            <Route
              path="chat"
              element={<MesMessages />}
              loader={feedbackLessonLoader}
            />
          </Route>
        </Route>
      </Route>
    </Route>
  )
);
export const Teacher: FC = () => {
  // const mainSelector = useSelector(lessonsSelectorFN);
  // const { feedbackArr, lessonsArr } = mainSelector;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   getLessons("posts?userId=1")(dispatch);
  //   getFeedbackMessages("posts?userId=1")(dispatch);
  //   getFeedbackStudents("users")(dispatch);
  // }, []);
  return (
    // <Loading loadingState={mainSelector.feedbackArr.students}>
    <RouterProvider router={router} />
    //  </Loading>
  );
};
