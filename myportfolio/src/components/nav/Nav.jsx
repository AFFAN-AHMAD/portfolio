import React from 'react'
import { Navbar,NameDiv ,TagsDiv ,DensityIconDiv} from './nav.styled'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
function Nav() {
  return (
    <>
      <Navbar>
        <NameDiv>
            Affan Ahmad
        </NameDiv>
        <TagsDiv>
          <a>home</a>
          <a>skills</a>
          <a>projects</a>
          <a>about</a>
          <a>contact</a>
        </TagsDiv>
        
      </Navbar>
    </>)
}

export default Nav