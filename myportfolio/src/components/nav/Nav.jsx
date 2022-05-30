import React, { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "../../context/themeContext";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import {
  Navbar,
  NameDiv,
  TagsDiv,
  ResDiv,
  LightDiv,
  DarkDiv,
  Atag,
  BorderToNavDiv,
} from "./nav.styled";
function Nav() {
  const { handleClick, theme } = useContext(ThemeContext);
  return (
    <>
      <Navbar theme={theme}>
        <NameDiv>Affan Ahmad</NameDiv>
        <ResDiv>
          <h5>
            <Atag
              theme={theme}
              href="https://drive.google.com/file/d/1LG4uS-jFIUFDUm34wsjZeWmdb-O_F-Ov/view?usp=sharing"
              target="_blank"
            >
              View CV
            </Atag>
          </h5>{" "}
        </ResDiv>
        <TagsDiv>
          <a>
            <div onClick={() => scroll.scrollToTop()}>
              {" "}
              <BorderToNavDiv>home</BorderToNavDiv>
            </div>
          </a>
          <Link
            to="about"
            smooth={"easeInQuint"}
            duration={1000}
            spy={true}
            style={{ cursor: "pointer" }}
          >
            {" "}
            <BorderToNavDiv>about</BorderToNavDiv>
          </Link>
          <Link
            to="skills"
            smooth={"easeInQuint"}
            duration={1500}
            style={{ cursor: "pointer" }}
          >
            {" "}
            <BorderToNavDiv>skills</BorderToNavDiv>
          </Link>
          <Link
            to="projects"
            smooth={"easeInQuint"}
            duration={2000}
            style={{ cursor: "pointer" }}
          >
            {" "}
            <BorderToNavDiv>projects</BorderToNavDiv>
          </Link>
          <Link
            to="contact"
            smooth={"easeInQuint"}
            duration={2200}
            style={{ cursor: "pointer" }}
          >
            {" "}
            <BorderToNavDiv>contact</BorderToNavDiv>
          </Link>
        </TagsDiv>
        <div>
          <LightDiv
            onClick={handleClick}
            theme={theme}
            style={{ cursor: "pointer" }}
          >
            <LightModeIcon></LightModeIcon>
          </LightDiv>
          <DarkDiv
            onClick={handleClick}
            theme={theme}
            style={{ cursor: "pointer" }}
          >
            <DarkModeIcon></DarkModeIcon>
          </DarkDiv>
        </div>
      </Navbar>
    </>
  );
}

export default Nav;
