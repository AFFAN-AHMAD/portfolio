import styled from "styled-components"

export const SkillsDiv = styled.div`
width:100%;
height:auto;
background:${props => props.theme == "light" ? "#282c7d" : "whitesmoke"};
color:${props => props.theme == "dark" ? "#282c7d" : "whitesmoke"};
padding:5px;
box-shadow: 2px 2px 5px 10px darkgray;
`
export const H1tag = styled.h1`
height:60px;
font-style:italic`