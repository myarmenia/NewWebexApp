import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { AddLesson } from "../pages/teacher_page/lessons/addLesson/AddLesson";
import { NewLesson } from "../pages/teacher_page/lessons/newLesson/NewLesson";
import { FirstLesson } from "../pages/teacher_page/lessons/firstLesson/FirstLesson";
import CreateGraffic from "../pages/teacher_page/lessons/userComponents/CreateGraffic";
import { Exam } from "../pages/teacher_page/lessons/exam/Exam";
import EditGraffic from "../pages/teacher_page/lessons/userComponents/editGraffic/EditGraffic";
import {
  Calendar,
  calendarLoader,
} from "../pages/teacher_page/lessons/calendar/Calendar";
import { WeekSchedule } from "../pages/teacher_page/lessons/calendar/weekSchedule/WeekSchedule";
import PersonalInfo from "../pages/teacher_page/lessons/personalInfo/PersonalInfo";
import { EditMyLessons } from "../pages/teacher_page/lessons/userLessons/editMyLessons/EditMyLessons";
import { Students } from "../pages/teacher_page/lessons/students/Students";
import { ControlPanel } from "../pages/teacher_page/lessons/controlPanel/ControlPanel";
import { Discount } from "../pages/teacher_page/lessons/discount/Discount";
import { Wallet } from "../pages/teacher_page/lessons/wallet/Wallet";
import {
  Feedback,
  feedbackLessonLoader,
  feedback_studentsLoader,
} from "../pages/teacher_page/lessons/feedback/Feedback";

import { Outlet } from "react-router";
import { TeacherLoyaut } from "../pages/teacher_page/teacher_loyaut/TeacherLoyaut";
import { LesTask } from "../pages/teacher_page/lessons/feedback/feedbackComponents/mesContent/lesTask/LesTask";
import { MesHomeWork } from "../pages/teacher_page/lessons/feedback/feedbackComponents/mesContent/mesHomeWork/MesHomeWork";
import { MesMessages } from "../pages/teacher_page/lessons/feedback/feedbackComponents/mesContent/mesMessages/MesMessages";
import StudentLessons from "../pages/student_page/student_sections/studentLessons/StudentLessons";
import {
  extItems,
  UserLessons,
} from "../pages/teacher_page/lessons/userLessons/UserLessons";
import {
  Lessons,
  lessonsLoader,
} from "../pages/teacher_page/lessons/userLessons/lessonsPage/Lessons";
import {
  LesPage,
  lessonPageLoader,
} from "../pages/teacher_page/lessons/userLessons/lesPage/LesPage";
import { StageLesPage } from "../pages/teacher_page/lessons/userLessons/stageLesPage/StageLesPage";
import { StudentData } from "../pages/student_page/student_sections/studentData/StudentData";
import { StudentLoyaut } from "../pages/student_page/student_loyaut/StudentLoyaut";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="teacher" element={<TeacherLoyaut />}>
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
                  isCourseActive={true}
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
              <Route
                index
                element={<StageLesPage />}
                loader={lessonPageLoader}
              />
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
      <Route path="student" element={<StudentLoyaut />}>
        <Route path="perosnal_info" element={<StudentData />} />
        <Route path="my_lesson" element={<StudentLessons />} />
      </Route>
    </Route>
  )
);
