import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Teacher } from "../../components/teacher/Teacher";

export const TeacherRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="teacher" element={<Teacher />} />)
  );
  return <div>TeacherRoutes</div>;
};
