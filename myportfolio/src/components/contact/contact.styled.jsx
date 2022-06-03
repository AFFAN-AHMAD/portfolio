import styled from "styled-components"

export const ContactsDiv = styled.div`
width:100%;
height:auto;
background:${props => props.theme == "light" ? "#10101a" : "#acadb2"};
color:${props => props.theme == "dark" ? "#10101a" : "whitesmoke"};
padding: 30px 0px;
/* box-shadow: 2px 2px 5px 10px darkgray; */

`
export const MainDiv = styled.div`
            margin-bottom:50px;
            display: flex;
            margin: auto;
            width: 80%;
            justify-content:space-between ;
            

    @media screen and (max-width:600px) {
        display: block;
        height: auto;
        align-self:center ;
        align-items: center;
        text-align: center;
    }

`


export const H1tag = styled.h1`
height:60px;
font-style:italic`

export const EmailDiv = styled.div`
width:400px;
height:auto;
display:flex;
text-align:center;
align-items:center;
gap:4px;
margin-top:-20px;
`


export const MobDiv = styled.div`
width:400px;
height:auto;
display:flex;
text-align:center;
align-items:center;
gap:4px;
margin-top:-20px;
margin-right: 30px;
`



export const MediumDiv = styled.div`
width:25px;
height:25px;
text-align:center;
align-items:center;
margin:0px 2px;
display: ${props => props.theme == "light" ? "none" : "block"};

`
export const MediumDiv2 = styled.div`
width:25px;
height:25px;
text-align:center;
align-items:center;
display: ${props=>props.theme=="light"?"block":"none"};

margin:0px 2px;
`

export const MediumImg = styled.img`
width:100%;
height:100%;
/* text-align:center;
align-items:center; */
`
export const ContactLink = styled.a`
color:${props => props.theme == "dark" ? "#10101a" : "whitesmoke"};

`