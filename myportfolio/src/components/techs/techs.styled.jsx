import styled from "styled-components";
export const SkillsDiv = styled.div`
	width: 100%;
	height: auto;
	background: ${(props) => (props.theme == "light" ? "#000000" : "#fcf3a6")};
	color: ${(props) => (props.theme == "dark" ? "#10101a" : "whitesmoke")};
	padding: 50px 0px;
	box-sizing: border-box;

	/* box-shadow: 2px 2px 5px 10px darkgray; */
`;
export const H1tag = styled.h1`
	height: 60px;
	font-style: italic;
`;

export const TopSkillsDiv = styled.div`
	width: 50%;
	/* text-align: center; */
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: auto;
	gap: 30px;
	margin: auto;
	justify-content: center;
	@media screen and (max-width: 720px) and (min-width: 500px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: auto;
		width: 60%;
	}
	@media screen and (max-width: 500px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto;
		gap: 10px;
		width: 70%;
	}
`;
export const BottomSkillsDiv = styled.div`
	width: 30%;
	/* text-align: center; */
	display: flex;
	gap: 16px;
	margin: 30px auto;
	justify-content: center;
	@media screen and (max-width: 720px) and (min-width: 400px) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: auto;
	}
	@media screen and (max-width: 400px) {
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: auto;
	}
`;

export const H5tag = styled.h5`
	margin: 0px auto;
	width: 70px;
	color: black;
`;

export const ContentDiv = styled.div`
	/* width:200px; */
	height: 120px;
	box-sizing: border-box;
	background-color: white;
	padding: 30px 20px;
	text-align: center;
	margin: 20px 0px;
	border-radius: 10px;
	box-shadow: ${(props) =>
		props.theme == "dark" ? "5px 5px #1a2421" : "5px 5px #4887ea"};
	&:hover {
		transform: scale(1.15);
	}
`;


