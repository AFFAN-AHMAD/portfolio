import React,{useContext} from "react";
import Typewriter from "typewriter-effect";
import { ThemeContext } from "../../context/themeContext";
import { TypeDiv } from "./typewriter.styled";
function Typewriters() {
    const { theme } = useContext(ThemeContext);

  return (
    <TypeDiv theme={theme} >
          <h1>
        I am 
        <i>
          <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("a Passionate Coder")
            .pauseFor(2500)
              .deleteAll()
              .typeString("a Quick Learner")
            .pauseFor(2500)
              .deleteAll()
              .typeString("a Tech Enthusiast")
            .pauseFor(2500)
            .deleteAll()
            .typeString("a Believer")
            .pauseFor(2500)
            .deleteAll()
            .start();
            // .callFunction(() => {
            //   console.log("String typed out!");
            // })
            // .deleteAll()
            // .callFunction(() => {
            //   console.log("All strings were deleted");
            // })
        }}
          />
          </i>
          </h1>
              
    </TypeDiv>
  );
}

export default Typewriters;
