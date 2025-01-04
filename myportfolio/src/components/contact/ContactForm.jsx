import React, { useContext } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contactform.css";
import styled from "styled-components";
import { NameDiv, NameInput, SubmitButton } from "./contactform.styled";
import { ThemeContext } from "../../context/themeContext";
function ContactForm() {
  const { handleClick, theme } = useContext(ThemeContext);
  const [state, handleSubmit] = useForm("xwkyygzn");
  if (state.succeeded) {
    console.log("state", state);
    return <p>Thanks for joining!</p>;
  }
  const SubmitBtn = styled.div`
   width: 100%;

    button {
      font-family: inherit;
      font-size: 20px;
      background: royalblue;
      color: white;
      padding: 0.7em 1em;
      // padding-left: 0.9em;
      display: flex;
      align-items: center;
      border: none;
      border-radius: 16px;
      overflow: hidden;
      transition: all 0.2s;
      width: 100%;
      justify-content: center;
      cursor: pointer;
    }
      button:hover {
               background: black

}

    button span {
      display: block;
      // margin-left: 0.3em;
      transition: all 0.3s ease-in-out;
    }

    button svg {
      display: block;
      transform-origin: center center;
      transition: transform 0.3s ease-in-out;
    }

    button:hover .svg-wrapper {
      animation: fly-1 0.6s ease-in-out infinite alternate;
    }

    button:hover svg {
      transform: translateX(1.2em) rotate(45deg) scale(1.1);
    }

    button:hover span {
      transform: translateX(5em);
    }

    button:active {
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
  `;
  return (
    <form onSubmit={handleSubmit}>
      <div className={theme == "light" ? "form" : "form-dark"}>
        <input onChange={() => {}} placeholder="Name" id="name" />
        <input onChange={() => {}} placeholder="Email" id="email" />
        <textarea onChange={() => {}} placeholder="Message" id="message" />
      </div>

      {/* <div style={{ textAlign: "center", display: "flex" }}> */}
        <SubmitBtn>
          <button type="submit" disabled={state.submitting}>
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30"
                  height="18"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span style={{ fontSize: "14px" }}>Send</span>
          </button>
        </SubmitBtn>
      {/* </div> */}
    </form>
  );
}
export default ContactForm;
