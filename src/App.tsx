import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/header/Header";
import { News } from "./components/News/News";
import { Opinion } from "./components/Opinion/Opinion";
import { Questions } from "./components/Questions/Questions";

function App() {
  return (
    <>
      <Header />
      <News />
      <Opinion />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
