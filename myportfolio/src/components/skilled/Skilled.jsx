import React, { useContext } from "react";
import "./skilled.css";
import styled from "styled-components";
import { ThemeContext } from "../../context/themeContext";

function Skilled() {
  const MainDIv = styled.div`
    width: 100%;
    height: auto;
    background: ${(props) => (props.theme == "light" ? "#1a202c" : "#b7b6bb")};
    color: ${(props) => (props.theme == "dark" ? "black" : "white")};
    padding: 60px 0px 40px 0px;
    /* box-shadow: 2px 2px 5px 10px darkgray; */
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0;
    box-sizing:border-box

  `;
  const { theme } = useContext(ThemeContext);

  return (
    <MainDIv theme={theme} >
      {/* <h1>About</h1> */}
      <div class="card" style={{ width: "80%", margin: "auto" }} id="about">
        <img class="card-img" src={require("../photo/grayphoto.png")} />

        <div class="card-info">
          <h3 class="text-body">
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
          </h3>
          <p class="text-title">Affan Ahmad</p>
        </div>
      </div>
    </MainDIv>
  );
}

export default Skilled;
