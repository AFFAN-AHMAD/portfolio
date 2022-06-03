import styled from "styled-components"
export const TypeDiv = styled.div`
 width: 100%;
  height: auto;
  background: ${(props) => (props.theme == "light" ? "#10101a" : "#bc382e")};
  color: ${(props) => (props.theme == "dark" ? "#10101a" : "whitesmoke")};
  padding: 50px 0px;
`

export const H1tag = styled.h1`



`