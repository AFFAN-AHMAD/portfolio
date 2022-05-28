import React,{useContext} from 'react'
import { Navbar,NameDiv ,TagsDiv ,DensityIconDiv , LightDiv,DarkDiv,Atag} from './nav.styled'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {ThemeContext} from "../../context/themeContext"
function Nav() {
  const {handleClick,theme} = useContext(ThemeContext)
  return (
    <>
      <Navbar theme={theme}>
        <NameDiv>
            Affan Ahmad
        </NameDiv>
        <div><h5><Atag theme={theme} href="https://drive.google.com/file/d/1LG4uS-jFIUFDUm34wsjZeWmdb-O_F-Ov/view?usp=sharing" target="_blank" >View CV</Atag></h5> </div>
        <TagsDiv>
          <a>home</a>
          <a>about</a>
          <a>skills</a>
          <a>projects</a>
          <a>contact</a>
        </TagsDiv>
        <div>
        <LightDiv onClick={handleClick} theme={theme} >
          <LightModeIcon></LightModeIcon>
        </LightDiv>
        <DarkDiv onClick={handleClick} theme={theme}>
          <DarkModeIcon></DarkModeIcon>
        </DarkDiv>
        </div>
      </Navbar>
    </>)
}

export default Nav