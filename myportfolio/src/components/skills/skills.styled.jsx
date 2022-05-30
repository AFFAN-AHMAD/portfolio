import styled from "styled-components"

export const SkillsDiv = styled.div`
width:100%;
height:auto;
background:${props => props.theme == "light" ? "#10101a" : "whitesmoke"};
color:${props => props.theme == "dark" ? "#10101a" : "whitesmoke"};
padding:50px 0px;
/* box-shadow: 2px 2px 5px 10px darkgray; */
`
export const H1tag = styled.h1`
height:60px;
font-style:italic`

export const TopSkillsDiv = styled.div`
width:60%;
/* text-align: center; */
display: flex;
gap:30px;
margin:auto;
justify-content: center;
`
export const BottomSkillsDiv = styled.div`
width:30%;
/* text-align: center; */
display: flex;
gap:30px;
margin:30px auto;
justify-content: center;

`

export const H5tag = styled.h5`
margin:0px auto
`