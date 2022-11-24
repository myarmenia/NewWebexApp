import React from "react";
import "./App.css";
import Container from "./components/container/Container";
import { Features } from "./components/features/Features";
import { InfoCont } from "./components/infoCont/InfoCont";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { News } from "./components/News/News";
import { Opinion } from "./components/Opinion/Opinion";
import { Questions } from "./components/Questions/Questions";
import { SearchArea } from "./components/searchArea/SearchArea";

function App() {
  return (
    <>
      <Header />
      <Container>
        <SearchArea />
        <InfoCont />
        <Features />
      </Container>
      <News />
      <Container>
        <Opinion />
        <Questions />
      </Container>
      <Footer />
    </>
  );
}

export default App;
