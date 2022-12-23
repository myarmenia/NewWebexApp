import React from "react";
import "./App.css";
import Container from "./components/homeComponent/container/Container";
import { Features } from "./pages/home_page/features/Features";
import { InfoCont } from "./pages/home_page/infoCont/InfoCont";
import Footer from "./pages/home_page/footer/Footer";
import { Header } from "./pages/home_page/header/Header";
import { News } from "./pages/home_page/news/News";
import { Opinion } from "./pages/home_page/opinion/Opinion";
import { Questions } from "./pages/home_page/questions/Questions";
import { SearchArea } from "./pages/home_page/searchArea/SearchArea";
import { Lessons } from "./pages/home_page/lessons/Lessons";
import { Teacher } from "./pages/teacher_page/Teacher";
import Regsitration from "./pages/registration/Regsitration";
import Entry from "./pages/registration/entry/Entry";
import Tariffs from "./pages/home_page/tariffs/Tariffs";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Teacher />} />)
  );

  return (
    // <RouterProvider router={router} />
    // <Routes>
    // </Routes>
    <Teacher />
    // <Routes>
    //   <Route element={<Teacher />} />
    // </Routes>

    // <Teacher />
    // <Header />
    //  <Container>
    //     <SearchArea />
    //     <InfoCont />
    //     <Features />
    //   </Container>
    //   <News />
    //   <Container>
    //     <Opinion />
    //     <Lessons />
    //     <Questions />
    //   </Container>
    //   <Footer />
    //  <Tariffs />

    //   <Regsitration />
    //   <Entry />
  );
}

export default App;
