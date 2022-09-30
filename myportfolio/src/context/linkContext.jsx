import React from "react";
import { createContext, useState } from "react";
export const LinkContext = createContext();
export const LinkProvider = ({ children }) => {
	const [toshow1, setToshow1] = useState(true);
	const [toshow2, setToshow2] = useState(true);
	const [toshow, setToshow] = useState(true);
	const [toshow3, setToshow3] = useState(true);
	const handleHover1 = () => {
		setToshow1(toshow1 == true ? false : true);
	};

	const handleHover2 = () => {
		setToshow2(toshow2 == true ? false : true);
	};
	const handleHover = () => {
		setToshow(toshow == true ? false : true);
	};
	const handleHover3 = () => {
		setToshow3(toshow3 == true ? false : true);
	};

	return (
		<LinkContext.Provider
			value={{
				handleHover,
				handleHover1,
				handleHover2,
				handleHover3,
				toshow1,
				toshow2,
				toshow,
				toshow3,
			}}
		>
			{children}
		</LinkContext.Provider>
	);
};
