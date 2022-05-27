import styled from "styled-components"
import React , {video} from "react"
export const ProjectsDiv = styled.div`
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
display: ${props => props.show == true ? "none" : "flex"};
gap:20px;
justify-content: space-around;
align-items: center;
z-index:0;
`

export const ImgFrame = styled.img`
width:100%;
height:100%;
border:1px solid red;

`
export const VidFrame = styled.video`
width:100%;
height:100%;
border:1px solid red;

`
