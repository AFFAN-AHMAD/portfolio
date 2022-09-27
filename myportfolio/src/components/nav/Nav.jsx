import React, { useContext, useRef } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "../../context/themeContext";
import { HoverContext } from "../../context/hoverContext";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import ScrollToTop from "react-scroll-to-top";
import useScrollSpy from "react-use-scrollspy";
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
	const sectionRefs = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
	];
	const { handleClick, theme } = useContext(ThemeContext);
	const activeSection = useScrollSpy({
		sectionElementRefs: sectionRefs,
		offsetPx: -80,
	});
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
	return (
		<>
			<Navbar theme={theme}>
				<AtagDiv>
					<NameDiv style={{ letterSpacing: "1px" }}>Affan Ahmad</NameDiv>
					<ResDiv>
						<Atag
							theme={theme}
							href="https://drive.google.com/file/d/1pRAYIZB1mopzG4qBcNSrIBzPn9W_U4qb/view"
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
							<BorderToNavDiv
								style={{ letterSpacing: "1px" }}
								className={
									activeSection === 0
										? "App-navigation-item App-navigation-item--active"
										: "App-navigation-item"
								}
							>
								home
							</BorderToNavDiv>
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
						<BorderToNavDiv
							
							style={{ letterSpacing: "1px" }}
							className={
								activeSection === 1
									? "App-navigation-item App-navigation-item--active"
									: "App-navigation-item"
							}
						>
							about
						</BorderToNavDiv>
					</Link>
					<Link
						to="skills"
						smooth={"easeInQuint"}
						duration={1500}
						style={{ cursor: "pointer" }}
					>
						{" "}
						<BorderToNavDiv
							
							style={{ letterSpacing: "1px" }}
							className={
								activeSection === 2
									? "App-navigation-item App-navigation-item--active"
									: "App-navigation-item"
							}
						>
							techs
						</BorderToNavDiv>
					</Link>
					<Link
						to="projects"
						smooth={"easeInQuint"}
						duration={1500}
						style={{ cursor: "pointer" }}
					>
						{" "}
						<BorderToNavDiv
							
							style={{ letterSpacing: "1px" }}
							className={
								activeSection === 3
									? "App-navigation-item App-navigation-item--active"
									: "App-navigation-item"
							}
						>
							projects
						</BorderToNavDiv>
					</Link>
					<Link
						to="contact"
						smooth={"easeInQuint"}
						duration={2000}
						style={{ cursor: "pointer" }}
					>
						{" "}
						<BorderToNavDiv
						
							style={{ letterSpacing: "1px" }}
							className={
								activeSection === 4
									? "App-navigation-item App-navigation-item--active"
									: "App-navigation-item"
							}
						>
							contact
						</BorderToNavDiv>
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
						style={{ cursor: "pointer", margin: "0px" }}
					>
						<DarkModeIcon fontSize="small"></DarkModeIcon>
					</DarkDiv>
				</div>
			</Navbar>
		</>
	);
}

export default Nav;
