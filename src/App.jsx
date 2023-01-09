import { useState } from "react";
import "./App.css";

/** COMPONENTS */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Education from "./components/Education";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App container">
      <Navbar />
      <main>
        <Header />
        <section id="about">
          <Skills />
          <Education />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
