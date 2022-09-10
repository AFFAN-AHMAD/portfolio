import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { PhotoDiv, MainDIv, Image } from "./photo.styled";
function Photo() {
	const { theme } = useContext(ThemeContext);
	return (
		<>
			<PhotoDiv>
				{" "}
				<Image src={require("./new.jpg")} />
			</PhotoDiv>
		</>
	);
}

export default Photo;
