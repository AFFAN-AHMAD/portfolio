import React, { useContext } from "react";
import { AboutDiv, H1tag, AboutSecDv, ContentDiv } from "./about.styled";
import { ThemeContext } from "../../context/themeContext";
import Photo from "../photo/Photo";
function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <AboutDiv theme={theme} >
      <div style={{ padding: "30px" }}></div>
      <H1tag theme={theme}>About</H1tag>

      <AboutSecDv>
        <Photo />
        <ContentDiv>
          <p>
            {" "}
            hi!{" "}
            <img
              src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
              width="30px"
            ></img>
            this is{" "}
            <b>
              <i>Affan Ahmad</i>
            </b>
            , an aspiring{" "}
            <b>
              <i>Full Stack Web Developer</i>
            </b>
            . Affan is a quick learner, enthusiastic person ,a team player and
            passionate about coding. He is having 100+days hands on coding. He
            has worked on various projects some of them you can check in the
            project section.
          </p>
          {/* <p>I am a quick learner, enthusiastic person 
            and passionate about coding.</p>
          <p> I am a good listener and very careful about the details.</p>
        <p>Currently I am learning MERN Stack at Masai School.</p>
        <p>I have worked on various collaborative projects at Masai School.</p> */}
        </ContentDiv>
      </AboutSecDv>
    </AboutDiv>
  );
}

export default About;
