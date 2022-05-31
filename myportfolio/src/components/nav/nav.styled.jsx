import styled from "styled-components"

// navbar
export const Navbar = styled.div`
width: 100%;
height:80px;
/* border:1px solid red; */
position:sticky;
top:0px;
background:${props => props.theme == "light" ? "#a872e8" : "darkgray"};
color:${props => props.theme == "dark" ? "#10101a" : "whitesmoke"};
margin:0;
padding:0;
z-index:1;
display: flex;
box-sizing: border-box;
/* box-shadow: 2px 2px 5px 10px darkgray; */
@media all and  (max-width:870px) {
/* border:1px solid red; */
height:150px;
}
`
// name div inside navbar
export const NameDiv = styled.div`
width:50%;
height:100%;
/* border:1px solid blue; */
font-size: 60px;
margin: 0;
padding:0;
font-style: italic;
font-family: raleway sans-serif;
box-sizing: border-box;
@media all and  (max-width:500px) {
/* border:1px solid red; */

font-size:40px
}

`
export const TagsDiv = styled.div`
width:70%;
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
@media all and  (max-width:500px) {
/* border:1px solid blue; */
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
padding:20px 5px;
gap:20px;
justify-content: right;
box-sizing: border-box;
/* border:2px solid red; */
display:${props=>props.theme=="dark"?"none":"block"};
`
export const DarkDiv = styled.div`
margin: 0px 20px;
padding:20px 5px;
gap:20px;
justify-content: right;
box-sizing: border-box;
/* border:2px solid red; */
display:${props=>props.theme=="light"?"none":"block"};

`
export const Atag = styled.a`
color:${props => props.theme == "dark" ? "#10101a" : "whitesmoke"};
background-color: ${props => props.theme == "dark" ?"":""};
box-sizing: border-box;
&:hover {
border: 2px solid white;
padding: 5px;

}
text-decoration: none;


`
export const ResDiv = styled.div`
width:100px;
height:50px;
margin: 5px;
/* border: 1px solid black; */
font-style: italic;
&:hover{

   
}
`

export const BorderToNavDiv = styled.p`
margin:0px;
padding:0px;
border-bottom: ${props => props.bord == true ? "3px solid white" : "none"};
padding-bottom: ${props => props.bord == true ?"3px" :"0px"};
&:hover {
    padding-bottom: 5px;
    border-bottom:3px solid white
}

`