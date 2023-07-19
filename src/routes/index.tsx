// react-router-dom
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom';

// Pages for TEACHER section
import { Teacher } from '../pages/teacher_page/Teacher';
import {
  AddLesson,
  WeekSchedule,
  ControlPanel,
  Discount,
  Exam,
  Calendar,
  CreateGraffic,
  EditGraffic,
  EditMyLessons,
  FirstLesson,
  NewLesson,
  PersonalInfo,
  Students,
  UserLessons,
  extItems,
  Wallet,
  calendarLoader,
  LesPage,
  LesTask,
  Lessons,
  MesHomeWork,
  MesMessages,
  lessonPageLoader,
  lessonsLoader,
  StageLesPage,
  Feedback,
  Phase,
  StageLessons,
} from '../pages/teacher_page/blocks';

// Pages for STUDENT section
import { Student } from '../pages/student_page/Student';
import {
  StudentLessons,
  StudentData,
  StudentProgress,
  StdLesPage,
  stdLessonPageLoader,
  StdLessons,
} from '../pages/student_page/student_sections';

import { HelpCenter } from '../pages/help_center/HelpCenter';

import { Regsitration } from '../pages/registration/Regsitration';
import { Entry } from '../pages/registration/entry/Entry';

import { UserHeader } from '../components/screenComponents/userHeader/UserHeader';
import { Header } from '../pages/home_page/header/Header';

import { MainRoute } from './MainRoute';
import { ErrorElement } from '../components/ErrorElement';
import { RegisterTeacher } from '../pages/company_page/blocks/register_teacher/Register_teacher';
import Company from '../pages/company_page/Company';
import { ProfilesTeacher } from '../pages/company_page/blocks/profiles_teacher/Profiles_teacher';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainRoute />} errorElement={<ErrorElement />}>
      <Route
        path="registration"
        element={
          <>
            {/* <UserHeader /> */}
            {/* <Header /> */}
            <Regsitration />
          </>
        }
        action={Regsitration.action}
      />
      <Route
        path="login"
        element={
          <>
            {/* <UserHeader /> */}
            {/* <Header /> */}
            <Entry />
          </>
        }
        action={Entry.action}
      />
      <Route path="teacher" element={<Teacher />}>
        {/* <Route index element={<Exam />} /> */}
        <Route index element={<AddLesson />} />
        <Route path="new_lesson">
          <Route
            index
            element={<NewLesson />}
            loader={NewLesson.loader}
            action={NewLesson.action}
          />
          <Route path="lesson_graffic" element={<FirstLesson />}>
            <Route index element={<Phase />} />
            <Route path="phase_lessons" element={<StageLessons />} />
          </Route>
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
                  keys={['Արվեստ և դիզայն', 'Սկսնակների համար', 'Հավաստագիր', '16+']}
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
        <Route path="personal_info" element={<PersonalInfo />} action={PersonalInfo.action} />
        <Route path="students" element={<Students />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="panel" element={<ControlPanel />} />
        <Route path="discount" element={<Discount />} />
        <Route path="feedback">
          <Route
            path="student/:stdId"
            element={<Feedback />}
            loader={Feedback.loader}
            id="student-feedback">
            <Route path="lesson/:id">
              <Route path="task" element={<LesTask />} />
              <Route path="homework" element={<MesHomeWork />} />
              <Route path="chat" element={<MesMessages />} />
            </Route>
          </Route>
        </Route>
        <Route path="help_center" element={<HelpCenter />} action={HelpCenter.action} />
      </Route>
      <Route path="student" element={<Student />}>
        <Route path="perosnal_info" element={<StudentData />} />
        <Route path="my_lesson" element={<StudentLessons />} />
        <Route path="help_center" element={<HelpCenter />} action={HelpCenter.action} />
        <Route path="my_lesson" element={<StudentLessons />}>
          <Route index element={<StdLessons />} />
          <Route
            path="student_courses"
            element={
              <StdLesPage
                title="Գրաֆիկ դիզայնի դասընթաց սկսնակների համար"
                isCourseActive={true}
                stageCount={3}
                stageLessons={12}
                lessonTime={2}
                studentsCount={3}
                keys={['Արվեստ և դիզայն', 'Սկսնակների համար', 'Հավաստագիր', '16+']}
                price="65 000"
              />
            }
            loader={stdLessonPageLoader}
          />
        </Route>
        <Route path="feedback">
          <Route path="student/:stdId" element={<Feedback />} loader={Feedback.loader}>
            <Route path="lesson/:id">
              <Route path="task" element={<LesTask />} />
              <Route path="homework" element={<MesHomeWork />} />
              <Route path="chat" element={<MesMessages />} />
            </Route>
          </Route>
        </Route>
        <Route path="progress" element={<StudentProgress />} />
      </Route>
      <Route path="company" element={<Company />}>
        <Route
          path="register-teacher"
          element={<RegisterTeacher />}
          action={RegisterTeacher.action}/>
        <Route path="teachers" element={<ProfilesTeacher/>}/>
      </Route>
    </Route>,
  ),
);
