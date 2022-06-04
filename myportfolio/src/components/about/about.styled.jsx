
import styled from "styled-components";

export const AboutDiv = styled.div`
width:100%;
height:auto;
background:${props => props.theme == "light" ? "#1a202c" : "#b7b6bb"};
color:${props => props.theme == "dark" ? "#10101a" : "whitesmoke"};
padding:50px 0px;
/* box-shadow: 2px 2px 5px 10px darkgray; */
`
export const H1tag = styled.h1`
height:60px;
font-style:italic`

export const AboutSecDv = styled.div`
display:flex;
justify-content: space-around;
width: 80%;
margin: auto;
flex-direction: column;
`


export const ContentDiv = styled.div`
text-align: center;;
width:60%;
height:auto;
text-align: justify;

`