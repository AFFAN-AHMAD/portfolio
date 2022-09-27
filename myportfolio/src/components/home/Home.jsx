import Contact from "../contact/Contact";
import Projects from "../projects/Projects";
import Typewriter from "typewriter-effect";
import ScrollToTop from "react-scroll-to-top";
import ContactForm from "../contact/ContactForm";
import Typewriters from "../typewriter/Typewriter";
import Skilled from "../skilled/Skilled";
import Techs from "../techs/Techs";
import React, { useRef } from "react";
import useScrollSpy from "react-use-scrollspy";
function Home() {
 const sectionRefs = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
 ];
  const activeSection = useScrollSpy({
		sectionElementRefs: sectionRefs,
		offsetPx: -80,
  });
 
	return (
		<div
			style={{
				boxSizing: "borderBox",
				// border: "1px solid red",
				margin: "0",
				padding: "0",
				width: "100%",
			}}
		>
			<ScrollToTop
				smooth
				style={{
					backgroundColor: "gray",
					// borderRadius: "52%",
					fontSize: "10px",
					// fontWeight: "500",
					color: "white",
					// margin: "auto",
					padding: "0px",
					position: "none",
					zIndex: 3,
					// viewBox:"0 0 0 0"
				}}
				// fontSize="small"
			></ScrollToTop>
			<Typewriters />
			<Skilled
				class="App-section"
				ref={sectionRefs[0]}
			/>
			<Techs
				className="App-section"
				ref={sectionRefs[1]}
			/>
			<Projects
				className="App-section"
				ref={sectionRefs[3]}
			/>
			<Contact
				className="App-section"
				ref={sectionRefs[4]}
			/>
		</div>
	);
}

export default Home;
