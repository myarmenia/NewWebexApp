import React from "react";
import "./App.css";
import Container from "./components/container/Container";
import { Features } from "./components/features/Features";
import { InfoCont } from "./components/infoCont/InfoCont";
import Footer from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { News } from "./components/News/News";
import { Opinion } from "./components/opinion/Opinion";
import { Questions } from "./components/questions/Questions";
import { SearchArea } from "./components/searchArea/SearchArea";
import { Lessons } from "./components/lessons/Lessons";
import Regsitration from "./components/registration/Regsitration";
import Entry from "./components/entry/Entry";

function App() {
  return (
    <>
      <Header />
      {/*  <Container>
        <SearchArea />
        <InfoCont />
        <Features />
      </Container>
      <News />
      <Container>
        <Opinion />
        <Lessons />
        <Questions />
      </Container>
      <Footer /> */}
      <Regsitration />
      {/* <Entry /> */}
    </>
  );
}

export default App;
