import React from "react";
import { createContext, useState } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => { 
    const [theme, setTheme] = useState("light")
    const handleClick = () => {
        setTheme(theme == "light" ? "dark" : "light")
        console.log(theme)
    }
    return (
        <ThemeContext.Provider value={{ handleClick,theme}}>
          {children}
        </ThemeContext.Provider>
      );
}