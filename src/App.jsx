import { useEffect, useState } from "react";
import "./App.css";

/** COMPONENTS */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollButton from "./components/ScrollButton";

function App() {  
  return (
    <div className="App container">
      <Navbar />
      <main>
        <Header />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
