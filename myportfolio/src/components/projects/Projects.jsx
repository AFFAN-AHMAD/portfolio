import React, { useContext, useEffect, useRef, video } from "react";
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
import { HoverContext } from "../../context/hoverContext";

function Projects({ ref }) {
  const { theme } = useContext(ThemeContext);
  const {
    home,
    onHome,
    about,
    onAbout,
    projects,
    onProjects,
    skills,
    onSkills,
    contacts,
    onContacts,
  } = useContext(HoverContext);

  const {
    toshow,
    toshow1,
    toshow2,
    toshow3,
    handleHover,
    handleHover1,
    handleHover2,
    handleHover3,
  } = useContext(LinkContext);
  // useEffect(()=>{onProjects();},[])

  return (
    <ProjectsDiv theme={theme} id="projects" class="App-section" useRef={ref}>
      <div style={{ padding: "30px" }}></div>
      <H1tag style={{ letterSpacing: "5px" }}>Projects</H1tag>
      {/* 1st project */}

      <ProDiv onMouseEnter={handleHover1} onMouseLeave={handleHover1}>
        <ImgDiv>
          <ImgFrame src={require("./carRental.gif")} alt="abcd"></ImgFrame>
        </ImgDiv>
        <DetailsDiv>
          <NameDiv theme={theme}>
            <h5 style={{ margin: "5px 0px 0px 0px", fontStyle: "italic" }}>
              {" "}
              Car Rental
            </h5>
          </NameDiv>
          <DescDiv show={toshow1}>
            <p>
              CarRental is a car booking app where you can list your cars for
              booking
            </p>
            <ul>
              {" "}
              <h5 style={{ fontStyle: "italic", marginBottom: "5px" }}>
                Features:
              </h5>
              <li>Sign-in/Sign-up</li>
              <li>Dashboard</li>
              <li>Manage cars, Manage bookings</li>
              <li>List cars</li>
              <li>User authentication</li>
              {/* <li></li> */}
            </ul>

            <ul>
              {" "}
              <h5 style={{ fontStyle: "italic", marginBottom: "5px" }}>
                Areas of responsibility:
              </h5>
              <li>Created a solo project </li>
            </ul>
            <h5>Inspired by Zoom Cars</h5>
          </DescDiv>
          <LinkDiv show={toshow1} theme={theme}>
            {" "}
            <p style={{ textAlign: "center", color: "whitesmoke" }}>
              <Atag
                theme={theme}
                href="https://car-rental-project-by-affan.netlify.app/"
                target="_blank"
              >
                <p> Live </p>
                <p>
                  {" "}
                  <OpenInNewIcon style={{ fontSize: "medium" }} />
                </p>
              </Atag>{" "}
            </p>
            <p style={{ textAlign: "center", color: "whitesmoke" }}>
              {" "}
              <Atag
                theme={theme}
                href="https://github.com/AFFAN-AHMAD/carRental-client"
                target="_blank"
              >
                <p> frontend</p>
                <p>
                  {" "}
                  <GitHubIcon style={{ fontSize: "medium" }} />
                </p>{" "}
              </Atag>
            </p>
            <p style={{ textAlign: "center", color: "whitesmoke" }}>
              {" "}
              <Atag
                theme={theme}
                href="https://github.com/AFFAN-AHMAD/carRental-server"
                target="_blank"
              >
                <p> backend</p>
                <p>
                  {" "}
                  <GitHubIcon style={{ fontSize: "medium" }} />
                </p>{" "}
              </Atag>
            </p>
          </LinkDiv>
        </DetailsDiv>
      </ProDiv>
      <ProDiv onMouseEnter={handleHover3} onMouseLeave={handleHover3}>
        <ImgDiv>
          <ImgFrame src={require("./realEstate.gif")} alt="abcd"></ImgFrame>
        </ImgDiv>
        <DetailsDiv>
          <NameDiv theme={theme}>
            <h5 style={{ margin: "5px 0px 0px 0px", fontStyle: "italic" }}>
              {" "}
              Real Estate Website
            </h5>
          </NameDiv>
          <DescDiv show={toshow3}>
            <p>A place to find your destination</p>
            <ul>
              {" "}
              <h5 style={{ fontStyle: "italic", marginBottom: "5px" }}>
                Features:
              </h5>
              <li>Slider for Projects list</li>
              <li>Contact form</li>
              <li>Animation</li>
              <li>A solo project to showcase frontend skills</li>
            </ul>
          </DescDiv>
          <LinkDiv show={toshow3} theme={theme}>
            {" "}
            <p style={{ textAlign: "center", color: "whitesmoke" }}>
              <Atag
                theme={theme}
                href="https://real-estate-project-by-affan.netlify.app/"
                target="_blank"
              >
                <p> Live </p>
                <p>
                  {" "}
                  <OpenInNewIcon style={{ fontSize: "medium" }} />
                </p>
              </Atag>{" "}
            </p>
            <p style={{ textAlign: "center", color: "whitesmoke" }}>
              {" "}
              <Atag
                theme={theme}
                href="https://github.com/AFFAN-AHMAD/real-estate"
                target="_blank"
              >
                <p> Github</p>
                <p>
                  {" "}
                  <GitHubIcon style={{ fontSize: "medium" }} />
                </p>{" "}
              </Atag>
            </p>
          </LinkDiv>
        </DetailsDiv>
      </ProDiv>

      {/* <ProDiv onMouseEnter={handleHover1} onMouseLeave={handleHover1}>
        <ImgDiv>
          <ImgFrame src={require("./myntra.gif")} alt="abcd"></ImgFrame>
        </ImgDiv>
        <DetailsDiv>
          <NameDiv theme={theme}>
            <h5 style={{ margin: "5px 0px 0px 0px", fontStyle: "italic" }}>
              {" "}
              Myntra
            </h5>
          </NameDiv>
          <DescDiv show={toshow1}>
            <p>Myntra is a leading e-commerce website of India.</p>
            <ul>
              {" "}
              <h5 style={{ fontStyle: "italic", marginBottom: "5px" }}>
                Features:
              </h5>
              <li>Sign-in/Sign-up</li>
              <li>Cart | Products page | Products details page</li>
              <li>User authentication</li>
            </ul>

            <ul>
              {" "}
              <h5 style={{ fontStyle: "italic", marginBottom: "5px" }}>
                Areas of responsibility:
              </h5>
              <li>Created Men's Product Page</li>
              <li>Created Men's Product Details Page</li>
              <li>Created Women's Product Page</li>
              <li>Created Women's Product Detail's page</li>
            </ul>
            <p> Team of 3 members, executed it in 6 days.</p>
            <h5>inspired by Myntra</h5>
          </DescDiv>
          <LinkDiv show={toshow1} theme={theme}>
            {" "}
            <p style={{ textAlign: "center", color: "whitesmoke" }}>
              <Atag
                theme={theme}
                href="https://myntra-clone-unitfour.herokuapp.com/"
                target="_blank"
              >
                <p> Live </p>
                <p>
                  {" "}
                  <OpenInNewIcon style={{ fontSize: "medium" }} />
                </p>
              </Atag>{" "}
            </p>
            <p style={{ textAlign: "center", color: "whitesmoke" }}>
              {" "}
              <Atag
                theme={theme}
                href="https://github.com/AdarshKhandare/Myntra_Clone_U4"
                target="_blank"
              >
                <p> Github</p>
                <p>
                  {" "}
                  <GitHubIcon style={{ fontSize: "medium" }} />
                </p>{" "}
              </Atag>
            </p>
          </LinkDiv>
        </DetailsDiv>
      </ProDiv>

      <ProDiv onMouseEnter={handleHover2} onMouseLeave={handleHover2}>
        <ImgDiv>
          <ImgFrame src={require("./nykaa.gif")} alt="abcd"></ImgFrame>
        </ImgDiv>
        <DetailsDiv>
          <NameDiv theme={theme}>
            <h5 style={{ margin: "5px 0px 0px 0px", fontStyle: "italic" }}>
              {" "}
              NykaaMan
            </h5>
          </NameDiv>
          <DescDiv show={toshow2}>
            <p>
              NykaaMan is an e-commerce website that deals in grooming and
              makeup products exclusively for men. Our team has cloned this
              website within a period of 5 days.
            </p>
            <ul>
              {" "}
              <h5 style={{ fontStyle: "italic", marginBottom: "5px" }}>
                Features:
              </h5>
              <li>Sign-in/Sign-up</li>
              <li>Cart | Products page | Products details page</li>
              <li>User authentication</li>
            </ul>
            <ul>
              {" "}
              <h5 style={{ fontStyle: "italic", marginBottom: "5px" }}>
                Areas of responsibility:
              </h5>
              <li>Responsible for the UI of the website</li>
              <li>
                Created a sticky Navbar and imported it into all the pages
              </li>
              <li>Created Cart page</li>
            </ul>
            <p> Team of 5 members, executed it in 6 days.</p>
            <h5>inspired by NykaaMan</h5>
          </DescDiv>
          <LinkDiv show={toshow2} theme={theme}>
            <p style={{ textAlign: "center", color: "whitesmoke" }}>
              {" "}
              <Atag
                theme={theme}
                href="https://velvety-babka-6c5c6d.netlify.app/"
                target="_blank"
              >
                {" "}
                <p>Live</p>
                <p>
                  {" "}
                  <OpenInNewIcon style={{ fontSize: "medium" }} />
                </p>
              </Atag>
            </p>
            <p style={{ textAlign: "center", color: "whitesmoke" }}>
              {" "}
              <Atag
                theme={theme}
                href="https://github.com/AFFAN-AHMAD/Nyka-man-clone"
                target="_blank"
              >
                <p> Github</p>
                <p>
                  <GitHubIcon style={{ fontSize: "medium" }} />
                </p>{" "}
              </Atag>
            </p>
          </LinkDiv>
        </DetailsDiv>
      </ProDiv>
      <ProDiv onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <ImgDiv>
          <ImgFrame src={require("./tata.gif")} alt="abcd"></ImgFrame>
        </ImgDiv>
        <DetailsDiv>
          <NameDiv theme={theme}>
            <h5 style={{ margin: "5px 0px 0px 0px", fontStyle: "italic" }}>
              {" "}
              Tata 1mg
            </h5>
          </NameDiv>
          <DescDiv show={toshow}>
            <p>
              It is a web application for medicinal and other health products.
            </p>
            <ul>
              {" "}
              <h5 style={{ fontStyle: "italic", marginBottom: "5px" }}>
                Features:
              </h5>
              <li>Sign-in/Sign-up</li>
              <li>Cart | Products page | Products details page</li>
              <li>User authentication</li>
            </ul>
            <ul>
              {" "}
              <h5 style={{ fontStyle: "italic", marginBottom: "5px" }}>
                Areas of responsibility:
              </h5>
              <li>
                Laid out the plan for the team members and distributed the work
                among us
              </li>
              <li>Created Home page</li>
              <li>Collected the data and created the stack of the data</li>
              <li>Provided assistance to teammates</li>
              <li>
                Developed product page functionalities for the sorting of
                products
              </li>
            </ul>
            <p> Team of 6 members, executed it in 5 days.</p>
            <h5>inspired by Tata1mg</h5>
          </DescDiv>
          <LinkDiv show={toshow} theme={theme}>
            <p style={{ textAlign: "center", color: "whitesmoke" }}>
              {" "}
              <Atag
                theme={theme}
                href="https://tata1mgcloned.netlify.app/"
                target="_blank"
              >
                {" "}
                <p>Live</p>
                <p>
                  <OpenInNewIcon style={{ fontSize: "medium" }} />
                </p>
              </Atag>
            </p>
            <p style={{ textAlign: "center", color: "whitesmoke" }}>
              {" "}
              <Atag
                theme={theme}
                href="https://github.com/AFFAN-AHMAD/project-1mg"
                target="_blank"
              >
                {" "}
                <p>Github</p>
                <p>
                  {" "}
                  <GitHubIcon style={{ fontSize: "medium" }} />
                </p>
              </Atag>
            </p>
          </LinkDiv>
        </DetailsDiv>
      </ProDiv> */}
    </ProjectsDiv>
  );
}

export default Projects;
