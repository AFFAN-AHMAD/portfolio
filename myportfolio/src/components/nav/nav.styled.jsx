import styled from "styled-components"

// navbar
export const Navbar = styled.div`
width: 100%;
height:80px;
/* border:1px solid red; */
position:sticky;
top:0px;
background:whitesmoke;
margin:0;
padding:0;
display: flex;
box-sizing: border-box;
box-shadow: 2px 2px 5px 10px darkgray;
@media all and  (max-width:795px) {
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
`