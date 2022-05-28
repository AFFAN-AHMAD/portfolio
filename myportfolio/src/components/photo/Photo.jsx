import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { PhotoDiv, MainDIv,Image } from "./photo.styled";
function Photo() {
  const { theme } = useContext(ThemeContext);
  return (
    <MainDIv  theme={theme}>
      <PhotoDiv>
        {" "}
        <Image src={require("./affan.png")}/>
      </PhotoDiv>
    </MainDIv>
  );
}

export default Photo;
