import React, { Component } from "react";
import Plx from "react-plx";
import { ThemeContext } from "../../context/themeContext";
import {
	SkillsDiv,
	H1tag,
	TopSkillsDiv,
	BottomSkillsDiv,
	H5tag,
	ContentDiv,
} from "./techs.styled";
import react from "./frontend/react.svg";
import mui from "./frontend/materialui.svg";
import vite from "./frontend/vitejs.svg";
import npm from "./backend/npm.svg";
import redis from "./frontend/redis.svg";
import next from "./frontend/next.svg";
import socket from "./frontend/socket.svg";
import jwt from "./frontend/jwt.svg";
const parallaxData = [
	{
		start: 1000,
		end: 5000,
		properties: [
			{
				startValue: 1,
				endValue: 2,
				property: "scale",
			},
		],
		duration: 300,
		rotateZ: true,
		scale: 1.5,
	},
];

class Example extends Component {
	render() {
		return (
			<Plx
				className="MyAwesomeParallax"
				parallaxData={parallaxData}
			>
				<div>
					{" "}
					<img
						src={jwt}
						style={{ width: "40px", height: "40px" }}
					></img>
				</div>
				<div>
					{" "}
					<img
						src={jwt}
						style={{ width: "40px", height: "40px" }}
					></img>
				</div>
				<div>
					{" "}
					<img
						src={jwt}
						style={{ width: "40px", height: "40px" }}
					></img>
				</div>
				<div>
					{" "}
					<img
						src={jwt}
						style={{ width: "40px", height: "40px" }}
					></img>
				</div>
				<div>
					{" "}
					<img
						src={jwt}
						style={{ width: "40px", height: "40px" }}
					></img>
				</div>
				<div>
					{" "}
					<img
						src={jwt}
						style={{ width: "40px", height: "40px" }}
					></img>
				</div>
			</Plx>
		);
	}
}
export default Example;
