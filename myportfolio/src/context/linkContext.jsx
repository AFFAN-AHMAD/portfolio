import React from "react";
import { createContext, useState } from "react";
export const LinkContext = createContext();
export const LinkProvider = ({ children }) => { 
    const [toshow1, setToshow1] = useState(true)
    const [toshow2, setToshow2] = useState(true)
    const [toshow, setToshow] = useState(true)

    const handleHover1 = () => {
        setToshow1(toshow1 == true ? false : true)
        console.log("1",toshow1)

    }


    const handleHover2 = () => {
        setToshow2(toshow2 == true ? false : true)
        console.log("2",toshow2)
    }
    const handleHover = () => {
        setToshow(toshow == true ? false : true)
        console.log("3",toshow)

    }
    return (
        <LinkContext.Provider value={{ handleHover,handleHover1,handleHover2,toshow1,toshow2,toshow}}>
          {children}
        </LinkContext.Provider>
      );
}