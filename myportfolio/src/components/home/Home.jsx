import React from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Photo from "../photo/Photo";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Typewriter from "typewriter-effect";
import ScrollToTop from "react-scroll-to-top";

import Typewriters from "../typewriter/Typewriter";
import Skilled from "../skilled/Skilled";
function Home() {
  return (
    <div>
      <ScrollToTop
        smooth
        // style={{
        //   backgroundColor: "green",
        //   borderRadius: "52%",
        //   fontSize: "10px",
        //   fontWeight: "500",
        //   color: "white",
        // }}
      />
      <Typewriters />
      <Skilled/>
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
