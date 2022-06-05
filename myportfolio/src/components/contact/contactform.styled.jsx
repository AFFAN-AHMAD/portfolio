import styled from "styled-components";
export const NameDiv = styled.div`
  position: relative;
  /* border:2px solid black; */
  width:250px
  ;
  margin:20px
`

export const NameInput = styled.input`
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
    width:150px;
  padding: 1rem;
  font-size: 1rem;
  color: #f5f5f5;
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border: 1.5px solid #1a73e8;
  }
  &:valid {
    outline: none;
    border: 1.5px solid #1a73e8;
  }
`;


/* From uiverse.io by @adamgiebl */
/* export const SubmitButton = styled.button`

 font-family: inherit;
 font-size: 20px;
 background: royalblue;
 color: white;
 padding: 0.7em 1em;
 padding-left: 0.9em;
 display: flex;
 align-items: center;
 border: none;
 border-radius: 16px;
 overflow: hidden;
 transition: all 0.2s;


${<span></span>}  {
 display: block;
 margin-left: 0.3em;
 transition: all 0.3s ease-in-out;
}

${<svg></svg>}  {
 display: block;
 transform-origin: center center;
 transition: transform 0.3s ease-in-out;
}

&:hover~svg-wrapper{
 animation: fly-1 0.6s ease-in-out infinite alternate;
}

&:hover~ svg{
 transform: translateX(1.2em) rotate(45deg) scale(1.1);
}

&:hover~span {
 transform: translateX(5em);
}

&:active {
 transform: scale(0.95);
}

@keyframes fly-1 {
 from {
  transform: translateY(0.1em);
 }

 to {
  transform: translateY(-0.1em);
 }
}



` */