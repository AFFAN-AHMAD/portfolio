import styled from "styled-components";

export const MainDIv = styled.div`
  width: 100%;
  height: auto;
  background: ${(props) => (props.theme == "light" ? "#10101a" : "whitesmoke")};
  color: ${(props) => (props.theme == "dark" ? "#10101a" : "whitesmoke")};
  padding: 60px 0px 40px 0px;
  box-shadow: 2px 2px 5px 10px darkgray;
  align-items: center;
  text-align: center;
`;
export const PhotoDiv = styled.div`
  width: 420px;
  height: 400px;
  margin: auto;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
 
`;
