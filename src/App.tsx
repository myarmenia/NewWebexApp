import React from "react";
import "./App.css";
import { BodyContent } from "./components/bodyContent/BodyContent";
import Container from "./components/bodyContent/container/Container";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/header/Header";
import { News } from "./components/News/News";
import { Opinion } from "./components/Opinion/Opinion";
import { Questions } from "./components/Questions/Questions";

function App() {
  return (
    <>
      <Header />
      <BodyContent />
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
