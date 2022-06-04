import React from "react";
import "./skilled.css"
function Skilled() {
  return (
    <div>
      <div class="card" style={{width:"80%",margin:"auto"}}>
        <img class="card-img" src={require("../photo/grayphoto.png")}/>
        
       
        <div class="card-info">
          <h3 class="text-body">
            {" "}
            hi!{" "}
            <img
              src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
              width="30px"
            ></img>
            this is{" "}
            <b>
              <i>Affan Ahmad</i>
            </b>
            , an aspiring{" "}
            <b>
              <i>Full Stack Web Developer</i>
            </b>
            . Affan is a quick learner, enthusiastic person ,a team player and
            passionate about coding. He is having 100+days hands on coding. He
            has worked on various projects some of them you can check in the
            project section.
      
          </h3>
          <p class="text-title">Autor</p>
        </div>
      </div>
    </div>
  );
}

export default Skilled;
