import React, { useContext ,video} from "react";
import { ThemeContext } from "../../context/themeContext";
import { LinkContext } from "../../context/linkContext";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  ProjectsDiv,
  H1tag,
  ProDiv,
  ImgDiv,
  DetailsDiv,
  LinkDiv,
  ImgFrame,
  VidFrame,
 
} from "./projects.styled";
function Projects() {
  const { theme } = useContext(ThemeContext);
  const { toshow,toshow1,toshow2 ,handleHover,handleHover1,handleHover2} = useContext(LinkContext);

  return (
    <ProjectsDiv theme={theme}>
      <H1tag>Projects</H1tag>
      {/* 1st project */}
      <ProDiv onMouseEnter={handleHover1}  onMouseLeave={handleHover1}>
        <ImgDiv >
          <ImgFrame src={require('./rocket.gif')} alt="abcd">
            
      </ImgFrame>
        </ImgDiv>
        <DetailsDiv>
          <LinkDiv show={toshow1}>
            <p style={{textAlign:"center"}}>  <a>Github</a> <GitHubIcon style={{fontSize:"medium"}}/></p>
            <p style={{textAlign:"center"}}>  <a>Live</a> <OpenInNewIcon style={{fontSize:"medium"}}/></p>

          </LinkDiv>
        </DetailsDiv>
      </ProDiv>
      {/* 2nd project */}
      <ProDiv onMouseEnter={handleHover2}  onMouseLeave={handleHover2}>
        <ImgDiv></ImgDiv>
        <DetailsDiv>
          <LinkDiv show={toshow2}>
          <p style={{textAlign:"center"}}>  <a>Github</a> <GitHubIcon style={{fontSize:"medium"}}/></p>
            <p style={{textAlign:"center"}}>  <a>Live</a> <OpenInNewIcon style={{fontSize:"medium"}}/></p>
          </LinkDiv>
        </DetailsDiv>
      </ProDiv>
      {/* 3rd project */}
      <ProDiv onMouseEnter={handleHover}  onMouseLeave={handleHover}>
        <ImgDiv></ImgDiv>
        <DetailsDiv>
          <LinkDiv show={toshow}>
          <p style={{textAlign:"center"}}>  <a>Github</a> <GitHubIcon style={{fontSize:"medium"}}/></p>
            <p style={{textAlign:"center"}}>  <a>Live</a> <OpenInNewIcon style={{fontSize:"medium"}}/></p>
          </LinkDiv>
        </DetailsDiv>
      </ProDiv>
    </ProjectsDiv>
  );
}

export default Projects;
