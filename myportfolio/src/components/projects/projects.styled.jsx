import styled from "styled-components"

export const ProjectsDiv = styled.div`
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

export const ProDiv = styled.div`
height:300px;
width:70%;
border:1px solid red;
margin:40px auto;
display: flex;

`
export const ImgDiv = styled.div`
border:1px solid black;
width:60%;
height:100%;

`

export const DetailsDiv = styled.div`
border:1px solid brown;
width:40%;
height:100%;
position:relative;
`

export const LinkDiv = styled.div`
height:60px;
position:sticky;
background-color: red;
float:bottom;
top:100%;
display: ${props=>props.show==true?"none":"block"};
;

`