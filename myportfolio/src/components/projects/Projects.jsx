import React, { useContext, video } from "react";
import { ThemeContext } from "../../context/themeContext";
import { LinkContext } from "../../context/linkContext";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  ProjectsDiv,
  H1tag,
  ProDiv,
  ImgDiv,
  DetailsDiv,
  LinkDiv,
  ImgFrame,
  DescDiv,
  Atag,
  NameDiv,
} from "./projects.styled";
function Projects() {
  const { theme } = useContext(ThemeContext);
  const { toshow, toshow1, toshow2, handleHover, handleHover1, handleHover2 } =
    useContext(LinkContext);

  return (
    <ProjectsDiv theme={theme}>
      <H1tag>Projects</H1tag>
      {/* 1st project */}
      <ProDiv onMouseEnter={handleHover1} onMouseLeave={handleHover1}>
        <ImgDiv>
          <ImgFrame src={require("./rocket.gif")} alt="abcd"></ImgFrame>
        </ImgDiv>
        <DetailsDiv>
          <NameDiv>
        Myntra
          </NameDiv>
          <DescDiv show={toshow1}>
          <p>Myntra is a leading e-commerce website of India.</p>
          <ul> <h5>Features:</h5>
            <li>Sign-in/Sign-up</li>
            <li>Cart | Products page | Products details page</li>
            <li>User authentication</li>
            {/* <li></li> */}
            </ul>
            
            <ul> <h5>Areas of responsibility:</h5>
              <li>Creation of Men's Product Page</li>
              <li>Creation of Men's Product Details Page</li>
              <li>Creation of Women's Product Page</li>
              <li>Creation of Women's Product Detail's page</li>
            </ul>
          </DescDiv>
          <LinkDiv show={toshow1}>
            <p style={{ textAlign: "center" }}>
              {" "}
              Live{" "}
              <Atag
                theme={theme}
                href="https://myntra-clone-unitfour.herokuapp.com/"
                target="_blank"
              >
                <OpenInNewIcon style={{ fontSize: "medium" }} />
              </Atag>{" "}
            </p>
            <p style={{ textAlign: "center" }}>
              {" "}
              Github{" "}
              <Atag
                theme={theme}
                href="https://github.com/AdarshKhandare/Myntra_Clone_U4"
                target="_blank"
              >
                {" "}
                <GitHubIcon style={{ fontSize: "medium" }} />
              </Atag>
            </p>
          </LinkDiv>
        </DetailsDiv>
      </ProDiv>
      {/* 2nd project */}
      <ProDiv onMouseEnter={handleHover2} onMouseLeave={handleHover2}>
        <ImgDiv></ImgDiv>
        <DetailsDiv>
          <NameDiv>
          Nykaa
          </NameDiv>
          <DescDiv show={toshow2}>
            <p>NykaMan is an e-commerce website that deals in grooming and makeup products exclusively for men. Our team has cloned this website within a period of 5 days.</p>
            <ul> <h5>Features:</h5>
            <li>Sign-in/Sign-up</li>
            <li>Cart | Products page | Products details page</li>
            <li>User authentication</li>
            </ul>
            <ul> <h5>Areas of responsibility:</h5>
            <li>Responsible for the UI of the website</li>
            <li>created a sticky Navbar and imported it into all the pages</li>
            <li>Created Cart page</li>
            </ul>
          </DescDiv>
          <LinkDiv show={toshow2}>
            <p style={{ textAlign: "center" }}>
              {" "}
              Live{" "}
              <Atag
                theme={theme}
                href="https://remarkable-klepon-8f9936.netlify.app/"
                target="_blank"
              >
                {" "}
                <OpenInNewIcon style={{ fontSize: "medium" }} />
              </Atag>
            </p>
            <p style={{ textAlign: "center" }}>
              {" "}
              Github{" "}
              <Atag
                theme={theme}
                href="https://github.com/AFFAN-AHMAD/Nyka-man-clone"
                target="_blank"
              >
                {" "}
                <GitHubIcon style={{ fontSize: "medium" }} />
              </Atag>
            </p>
          </LinkDiv>
        </DetailsDiv>
      </ProDiv>
      {/* 3rd project */}
      <ProDiv onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <ImgDiv></ImgDiv>
        <DetailsDiv>
          <NameDiv>
          <p >Tata 1mg</p>
          </NameDiv>
          <LinkDiv show={toshow}>
            <p style={{ textAlign: "center" }}>
              {" "}
              Live{" "}
              <Atag
                theme={theme}
                href="https://precious-biscotti-be61c5.netlify.app/feature.html"
                target="_blank"
              >
                {" "}
                <OpenInNewIcon style={{ fontSize: "medium" }} />
              </Atag>
            </p>
            <p style={{ textAlign: "center" }}>
              {" "}
              Github{" "}
              <Atag
                theme={theme}
                href="https://github.com/AFFAN-AHMAD/project-1mg"
                target="_blank"
              >
                {" "}
                <GitHubIcon style={{ fontSize: "medium" }} />
              </Atag>
            </p>
          </LinkDiv>
        </DetailsDiv>
      </ProDiv>
    </ProjectsDiv>
  );
}

export default Projects;
