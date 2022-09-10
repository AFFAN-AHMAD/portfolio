import styled from "styled-components";

export const ContactsDiv = styled.div`
	width: 100vw;
	height: auto;
	box-sizing: border-box;
	background: ${(props) => (props.theme == "light" ? "#272729" : "whitesmoke")};
	color: ${(props) => (props.theme == "dark" ? "#10101a" : "whitesmoke")};
	padding: 30px 0px;
	/* box-shadow: 2px 2px 5px 10px darkgray; */
`;
export const MainDiv = styled.div`
  margin-bottom: 50px;
  display: flex;
  margin: auto;
  width: 80%;
  justify-content: space-between;

  box-sizing: border-box;
  @media screen and (max-width: 850px) {
    display: block;
    height: auto;
    align-self: center;
    align-items: center;
    text-align: center;
  }
`;

export const ContactformDiv = styled.div`
  text-align: center;
  align-content: center;
  align-items: center;
  align-self: center;
  margin: auto;
  width: 50%;

  @media screen and (max-width: 850px) {
    width: 70%;
  }
`;
export const DescDiv = styled.div`
  /* marginTop:"40px",padding:"30px" */

  margin-top: 40px;
  padding: 30px;
  box-sizing: border-box;
  text-align: left;
  align-items: left;
  align-content: left;
  align-self: left;
  /* border: 1px solid green; */
  @media screen and (max-width: 850px) {
    display: block;
    height: auto;
    align-self: center;
    align-items: center;
    text-align: center;
    padding: 10px;
  }
`;

export const H1tag = styled.h1`
  height: 60px;
  font-style: italic;
`;

export const EmailDiv = styled.div`
  width: 250px;
  height: auto;
  display: flex;
  text-align: center;
  align-items: center;
  gap: 4px;
  margin: 10px;
  box-sizing: border-box;
  @media screen and (max-width: 850px) {
    justify-content: center;
    margin: auto;
  }`;

export const MobDiv = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  text-align: center;
  align-items: center;
  gap: 4px;
  margin: 10px;
  box-sizing: border-box;
  @media screen and (max-width: 850px) {
      justify-content: center;
    margin: auto;
  }
  /* margin-right: 30px; */
`;

export const IconsDiv = styled.div`

display: flex;
gap:10px;
margin:10px;
/* border:1px solid red; */
@media screen and (max-width: 850px) {
      justify-content: center;
    margin: auto;
  }
`;

export const MediumDiv = styled.div`
  width: 25px;
  height: 25px;
  text-align: center;
  align-items: center;
  margin: 0px 2px;
  display: ${(props) => (props.theme == "light" ? "none" : "block")};
  box-sizing: border-box;
`;
export const MediumDiv2 = styled.div`
  width: 25px;
  height: 25px;
  text-align: center;
  align-items: center;
  display: ${(props) => (props.theme == "light" ? "block" : "none")};
  box-sizing: border-box;

  margin: 0px 2px;
`;

export const MediumImg = styled.img`
  width: 100%;
  height: 100%;
  /* text-align:center;
align-items:center; */
`;
export const ContactLink = styled.a`
  color: ${(props) => (props.theme == "dark" ? "#10101a" : "whitesmoke")};
`;
