import React from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Photo from "../photo/Photo";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Typewriter from "typewriter-effect";
import ScrollToTop from "react-scroll-to-top";
import ContactForm from "../contact/ContactForm";
import Typewriters from "../typewriter/Typewriter";
import Skilled from "../skilled/Skilled";
function Home() {
  return (
    <div
      style={{
        boxSizing: "borderBox",
        border: "1px solid red",
        margin: "0",
        padding: "0",
        width: "100%",
      }}
    >
      {/* <ScrollToTop
        smooth
        style={{
          backgroundColor: "gray",
          // borderRadius: "52%",
          fontSize: "10px",
          // fontWeight: "500",
          color: "white",
          // margin: "auto",
          padding: "0px",
          position: "none",
          zIndex: 3,
          // viewBox:"0 0 0 0"
        }}
        // fontSize="small"
      ></ScrollToTop> */}

      <Typewriters />
      <Skilled />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
