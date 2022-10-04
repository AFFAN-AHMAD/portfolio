import React, { useContext,useRef } from "react";
import "./skilled.css";
import styled from "styled-components";
import { ThemeContext } from "../../context/themeContext";

function Skilled(props) {

	const MainDIv = styled.div`
  		// border:1px solid red;
		width: 100%;
		height: auto;
		background: ${(props) => (props.theme == "light" ? "#0a0a0a" : "#fcf3a6")};
		color: ${(props) => (props.theme == "dark" ? "black" : "white")};
		padding: 60px 0px 40px 0px;
		/* box-shadow: 2px 2px 5px 10px darkgray; */
		align-items: center;
		text-align: center;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	`;
  const Img = styled.img`
  // width: "350px", height: "300px", marginBottom: "-10px", paddingBottom: "" }}
    width:350px;
    height:300px;
    margin-bottom:-10px;
    border-radius:50%
  `
  const { theme } = useContext(ThemeContext);

  return (
		<MainDIv
			theme={theme}
			useRef={props.ref}
			class="App-section"
		>
			{/* <h1>About</h1> */}
			<div
				class="card"
				style={{ width: "80%", margin: "auto" }}
				id="about"
			>
				<img
					style={{
						marginBottom: "-10px",
						paddingBottom: "",
					}}
					class="card-img"
					src={require("../photo/new.jpg")}
				/>
				<div
					class="card-info"
					style={{ marginTop: "-80px" }}
				>
					<h3 class="text-body">
						{" "}
						hi{" "}
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
						. Affan is a quick learner, enthusiastic person, a team player and
						passionate about coding. He is having 3000+ hours of hands on
						coding. He has worked on various projects some of them you can check
						in the projects section.
					</h3>
				</div>
			</div>
		</MainDIv>
	);
}

export default Skilled;
