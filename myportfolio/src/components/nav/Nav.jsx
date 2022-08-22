import React, { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "../../context/themeContext";
import { HoverContext } from "../../context/hoverContext";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import ScrollToTop from "react-scroll-to-top";
import {
  Navbar,
  NameDiv,
  TagsDiv,
  ResDiv,
  AtagDiv,
  LightDiv,
  DarkDiv,
  Atag,
  BorderToNavDiv,
} from "./nav.styled";
function Nav() {
  const { handleClick, theme } = useContext(ThemeContext);
  const { home,onHome,about,onAbout,projects,onProjects,skills,onSkills,contacts,onContacts} = useContext(HoverContext);
  return (
    <>
      <Navbar theme={theme}>
        <AtagDiv>

    
        <NameDiv>Affan Ahmad</NameDiv>
        <ResDiv>
            <Atag
              theme={theme}
              href="https://drive.google.com/file/d/12GmmWoJA7iwHJjinqdyomGOSS8R0TQo1/view?usp=sharing"
              target="_blank"
            >
              View CV
            </Atag>
       
          </ResDiv>
          </AtagDiv>
        <TagsDiv>
          <a>
            <div onClick={() => scroll.scrollToTop()}>
              {" "}
              <BorderToNavDiv onClick={onHome} bord={home}>home</BorderToNavDiv>
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
            <BorderToNavDiv onClick={onAbout} bord={about}>about</BorderToNavDiv>
          </Link>
          <Link
            to="skills"
            smooth={"easeInQuint"}
            duration={1500}
            style={{ cursor: "pointer" }}
          >
            {" "}
            <BorderToNavDiv onClick={onSkills} bord={skills}>skills</BorderToNavDiv>
          </Link>
          <Link
            to="projects"
            smooth={"easeInQuint"}
            duration={1500}
            style={{ cursor: "pointer" }}
          >
            {" "}
            <BorderToNavDiv onClick={onProjects} bord={projects}>projects</BorderToNavDiv>
          </Link>
          <Link
            to="contact"
            smooth={"easeInQuint"}
            duration={2000}
            style={{ cursor: "pointer" }}
          >
            {" "}
            <BorderToNavDiv onClick={onContacts} bord={contacts}>contact</BorderToNavDiv>
          </Link>
        </TagsDiv>
        <div>
          <LightDiv
            onClick={handleClick}
            theme={theme}
            style={{ cursor: "pointer", margin: "0px" }}
          >
            <LightModeIcon fontSize="small"></LightModeIcon>
          </LightDiv>
          <DarkDiv
            onClick={handleClick}
            theme={theme}
            style={{ cursor: "pointer", margin:"0px" }}
           
          >
            <DarkModeIcon fontSize="small"></DarkModeIcon>
          </DarkDiv>
        </div>
        
      </Navbar>
    </>
  );
}

export default Nav;
