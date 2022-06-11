import styled from "styled-components"

// navbar
export const Navbar = styled.div`
width: 100%;
height:80px;
/* border:1px solid red; */
position:sticky;
top:0px;
background:${props => props.theme == "light" ? "white" : "darkgray"};
color:${props => props.theme == "dark" ? "#10101a" : "black"};
margin:0;
padding:0;
z-index:2;
display: flex;
box-sizing: border-box;
/* box-shadow: 2px 2px 5px 10px darkgray; */
@media all and  (max-width:1030px) {
/* border:1px solid red; */
padding-left: 20px;
height:150px;
box-sizing: border-box;
}
`
// name div inside navbar
export const NameDiv = styled.div`
width:80%;
height:100%;
/* border:1px solid blue; */
font-size: 60px;
margin: 0;
padding:0;
font-style: italic;
font-family: raleway sans-serif;
box-sizing: border-box;
@media all and  (max-width:700px) {
/* border:1px solid red; */
width:40%;
height:60%;
box-sizing: border-box;
font-size:40px
}

`
export const TagsDiv = styled.div`
width:50%;
height:100%;
/* border:1px solid green; */
margin: 0px 20px;
padding:20px 5px;
display: flex;
gap:20px;
text-align: right;
justify-content: right;
box-sizing: border-box;
font-style: italic;
@media all and  (max-width:700px) {
/* border:1px solid blue; */
width:30%;
flex-direction: column;
gap:5px;
justify-content: center;
text-align: center;
}
`
export const DensityIconDiv = styled.div`
margin: 0px 20px;
padding:20px 5px;
gap:20px;
justify-content: right;
box-sizing: border-box;
/* border:2px solid red */
`
export const LightDiv = styled.div`
margin: 0px 20px;
padding:20px 20px;
/* gap:20px; */
justify-content: right;
box-sizing: border-box;
/* border:2px solid red; */
display:${props=>props.theme=="dark"?"none":"block"};
`
export const DarkDiv = styled.div`
margin: 0px 20px;
padding:20px 20px;
/* gap:20px; */
justify-content: right;
box-sizing: border-box;
/* border:2px solid red; */
display:${props=>props.theme=="light"?"none":"block"};

`

export const AtagDiv = styled.div`

display: flex;
height:100%;
@media all and  (max-width:550px) {
    display: block;
    height:100%;
}



`
export const Atag = styled.a`
color:${props => props.theme == "dark" ? "#10101a" : "#10101a"};
background-color: ${props => props.theme == "dark" ?"":""};
/* box-sizing: border-box; */

/* text-align: left; */
border:1px solid red;
&:hover {
    border: 2px solid black;
padding: 3px;

}
text-decoration: none;


`
export const ResDiv = styled.div`
height:50px;
width:100px;
padding:5px;
margin: 20px 0px 20px 20px;
/* margin-left:20px; */
font-size: 14x;
font-weight: bold;
box-sizing: border-box;
/* border: 1px solid black; */
font-style: italic;
&:hover{

   
}
`

export const BorderToNavDiv = styled.p`
margin:0px;
padding:0px;
border-bottom: ${props => props.bord == true ? "3px solid black" : "none"};
padding-bottom: ${props => props.bord == true ?"3px" :"0px"};
&:hover {
    padding-bottom: 3px;
    border-bottom:3px solid black
}

`