import React, { useContext } from "react";
import { AboutDiv, H1tag } from "./about.styled";
import { ThemeContext } from "../../context/themeContext";

function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <AboutDiv theme={theme}>
        <H1tag theme={theme}>About</H1tag>
        <p>
          {" "}
          hi!{" "}
          <img
            src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
            width="30px"
          ></img>
          this is <b><i>Affan Ahmad</i></b>, an aspiring <b><i>Full Stack Web Developer</i></b>.
          
        </p>
        <p>I am a quick learner, enthusiastic person 
          and passionate about coding. I am a good listener and very careful about the details.</p>
        <p>Currently I am learning MERN Stack at Masai School.</p>
        <p>I have worked on various collaborative projects at Masai School.</p>
      </AboutDiv>
    </>
  );
}

export default About;
