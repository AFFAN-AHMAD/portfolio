
import styled from "styled-components";

export const AboutDiv = styled.div`
width:100%;
height:auto;
background:${props => props.theme == "light" ? "#10101a" : "whitesmoke"};
color:${props => props.theme == "dark" ? "#10101a" : "whitesmoke"};
padding:5px;
box-shadow: 2px 2px 5px 10px darkgray;
`
export const H1tag = styled.h1`
height:60px;
font-style:italic`