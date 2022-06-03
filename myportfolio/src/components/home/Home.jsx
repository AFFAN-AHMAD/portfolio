import React from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Photo from "../photo/Photo";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Typewriter from "typewriter-effect";
import Typewriters from "../typewriter/Typewriter";
function Home() {
  return (
    <div>
    <Typewriters/>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
