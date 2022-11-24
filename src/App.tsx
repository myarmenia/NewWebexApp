import React from "react";
import "./App.css";
import { BodyContent } from "./components/bodyContent/BodyContent";
import Container from "./components/bodyContent/container/Container";
import Footer from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { News } from "./components/news/News";
import { Opinion } from "./components/opinion/Opinion";
import { Questions } from "./components/questions/Questions";

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
