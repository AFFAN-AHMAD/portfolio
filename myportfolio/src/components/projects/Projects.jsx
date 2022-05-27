import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { LinkContext } from "../../context/linkContext";

import {
  ProjectsDiv,
  H1tag,
  ProDiv,
  ImgDiv,
  DetailsDiv,
  LinkDiv,
} from "./projects.styled";
function Projects() {
  const { theme } = useContext(ThemeContext);
  const { toshow,toshow1,toshow2 ,handleHover,handleHover1,handleHover2} = useContext(LinkContext);

  return (
    <ProjectsDiv theme={theme}>
      <H1tag>Projects</H1tag>
      {/* 1st project */}
      <ProDiv onMouseEnter={handleHover1}  onMouseLeave={handleHover1}>
        <ImgDiv></ImgDiv>
        <DetailsDiv>
          <LinkDiv show={toshow1}></LinkDiv>
        </DetailsDiv>
      </ProDiv>
      {/* 2nd project */}
      <ProDiv onMouseEnter={handleHover2}  onMouseLeave={handleHover2}>
        <ImgDiv></ImgDiv>
        <DetailsDiv>
          <LinkDiv show={toshow2}></LinkDiv>
        </DetailsDiv>
      </ProDiv>
      {/* 3rd project */}
      <ProDiv onMouseEnter={handleHover}  onMouseLeave={handleHover}>
        <ImgDiv></ImgDiv>
        <DetailsDiv>
          <LinkDiv show={toshow}></LinkDiv>
        </DetailsDiv>
      </ProDiv>
    </ProjectsDiv>
  );
}

export default Projects;
