import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { SkillsDiv, H1tag } from "./skills.styled"
function Skills() {
    const { theme } = useContext(ThemeContext);

  return (
      <SkillsDiv theme={theme}>
          <H1tag>
              Skills
          </H1tag>
          <div>
          <p align="center">  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="Javascript" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
<a href="https://redux.js.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="36" height="36" alt="Redux" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="data:image/png;base64,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" width="36" height="36" alt="Express" /></a>
<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="Typescript" /></a>
</p>
          </div>
          
          <div>
              <p align="center">
              <a href="https://git-scm.com/" >
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" width="48" height="48" alt="git" />
                  </a>
                  <a href="https://www.linux.org/">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" width="48" height="48" alt="linux" />
                  </a>
                  <a href="https://docs.microsoft.com/en-us/powershell/">
        <img src="https://raw.githubusercontent.com/PowerShell/PowerShell/master/assets/ps_black_128.svg" width="48" height="48" alt="Powershell" />
                  </a>
                  <a href=""  >
        <img style={{background:"white"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg" width="48" height="48" alt="bash" />
      </a>
              </p>
</div>
        
       
    </SkillsDiv>
  )
}

export default Skills