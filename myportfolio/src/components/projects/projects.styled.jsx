import styled from "styled-components"
import React , {video} from "react"
export const ProjectsDiv = styled.div`
width:100%;
height:auto;
background:${props => props.theme == "light" ? "#1a202c" : "#fcf3a6"};
color:${props => props.theme == "dark" ? "#10101a" : "whitesmoke"};
padding:50px 0px;
box-sizing:border-box

/* box-shadow: 2px 2px 5px 10px darkgray; */
`
export const H1tag = styled.h1`
height:60px;
font-style:italic`

export const ProDiv = styled.div`
height:310px;
width:70%;
border:5px solid darkgray;
margin:40px auto;
display: flex;
/* grid-template-columns: repeat(2, 1fr 1fr); */
box-sizing: border-box;
border-radius: 10px;
@media screen and (max-width:600px) {
    display:block;
    height:auto
}
`
export const ImgDiv = styled.div`
/* border:1px solid black; */
width:60%;
height:100%;
@media screen and (max-width:600px) {
    width:100%;
    height:60%
}
`

export const DetailsDiv = styled.div`
/* border:1px solid brown; */
width:40%;
height:100%;
position:relative;
box-sizing: border-box;
@media screen and (max-width:600px) {
    width:100%;
    height:40%
}
`
export const NameDiv = styled.div`
margin-top: -5px;
padding-top: 5px;
height:40px;
position:sticky;
background-color: ${props=>props.theme=="light"?"#350434" :"#bacd60" }  ;
border-top-right-radius: 10px;
`
export const DescDiv = styled.div`
/* height:200px; */
width:90%;
box-sizing: border-box;
overflow: scroll;
text-align: left;
margin:auto;
height:${props => props.show == true ? "260px" : "200px"};
&::-webkit-scrollbar {
    display:none ;
      
    }
   
`

export const LinkDiv = styled.div`
height:60px;
position:sticky;
background-color: ${props=>props.theme=="light"?"#e59f6c":"#162155"};
float:bottom;
top:100%;
display: ${props => props.show == true ? "none" : "flex"};
gap:20px;
justify-content: space-around;
align-items: center;
z-index:0;
border-bottom-right-radius: 5px;
`

export const ImgFrame = styled.img`
width:100%;
height:100%;
/* border:1px solid red; */

`
export const VidFrame = styled.video`
width:100%;
height:100%;
border:1px solid red;

`
export const Atag = styled.a`
color:${props => props.theme == "dark" ? "#10101a" : "whitesmoke"};
color:whitesmoke;
display: flex;
text-decoration: none;
gap:3px;
justify-content: space-around;

`
