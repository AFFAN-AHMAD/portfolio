import styled from "styled-components";

export const MainDIv = styled.div`
  width: 100%;
  height: 230px;
  background: ${(props) => (props.theme == "light" ? "#10101a" : "whitesmoke")};
  color: ${(props) => (props.theme == "dark" ? "#10101a" : "whitesmoke")};
  padding: 30px 0px 0px 0px ;
  box-shadow: 2px 2px 5px 10px darkgray;
  align-items: center;
  text-align: center;
`;
export const PhotoDiv = styled.div`
  width: 200px;
  height: 200px;
  margin: auto;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
 
`;
