import React, { useContext, useState, useRef } from "react";
import { ThemeContext } from "../../context/themeContext";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { TabScrollButton } from "@mui/material";
import {
  ContactsDiv,
  H1tag,
  DescDiv,
  ContactformDiv,
  EmailDiv,
  MobDiv,
  MediumDiv,
  MediumImg,
  MediumDiv2,
  ContactLink,
  MainDiv,
  IconsDiv
} from "./contact.styled";
import { requirePropFactory } from "@mui/material";
import ContactForm from "./ContactForm";
function Contact() {
  const { theme } = useContext(ThemeContext);

  function copyToClipboard() {
    toast.success("Email copied to clipboard");
  }

  return (
    <ContactsDiv theme={theme} id="contact">
      <H1tag>Let's Get Connected</H1tag>
      {/* div containing all the elements other than Heading */}
      <MainDiv>
        <ContactformDiv
          style={{
            textAlign: "center",
            alignContent: "center",
            // border: "1px solid green",
            alignItems: "center",
            alignSelf:"center",
            margin: "auto",
            width: "50%",
            
          }}
        >
          <ContactForm></ContactForm>
        </ContactformDiv>
        {/* EmailDiv from styled components; Toastcontainer,CopyToClipboard  from toastify ;
          CopyToClipboardfrom react-copy-to-clipboard;copyToClipboard is a function for triggering toast ;
          ContentCopyIcon from Material ui */}
        <DescDiv>
          <EmailDiv>
            <ToastContainer />
            <div>
              <p>affanahmad2797@gmail.com </p>
            </div>
            <CopyToClipboard text="affanahmad2797@gmail.com">
              <ContentCopyIcon
                value="affanahmad2797@gmail.com"
                onClick={copyToClipboard}
                style={{ cursor: "pointer" }}
              ></ContentCopyIcon>
            </CopyToClipboard>
          </EmailDiv>
          {/* Mobdiv from styled component */}
          <MobDiv>
            <p>+91 8700171723</p>
          </MobDiv>
          {/* div containing icons for social media platforms; LinkedInIcon,GitHubIcon from Material ui;
                    MediumDiv,MediumDiv2,MediumImg from styled components;
                    MediumDiv and MediumDiv2 are used to toggle between two logo images as Medium's icon was not available
                    on Material ui*/}
          <IconsDiv>
            <ContactLink
              theme={theme}
              href="https://www.linkedin.com/in/affan-ahmad-31bba9184/"
              target="_blank"
            >
              {" "}
              <LinkedInIcon />
            </ContactLink>
            <ContactLink
              theme={theme}
              href="https://github.com/AFFAN-AHMAD"
              target="_blank"
            >
              {" "}
              <GitHubIcon />
            </ContactLink>
            <a href="https://medium.com/@affanahmad2797" target="_blank">
              <MediumDiv theme={theme}>
                <MediumImg src="https://miro.medium.com/max/1400/1*psYl0y9DUzZWtHzFJLIvTw.png" />
              </MediumDiv>
              <MediumDiv2 theme={theme}>
                <MediumImg src={require("./Medium.jpg")} />
              </MediumDiv2>
            </a>
          </IconsDiv>
        </DescDiv>
      </MainDiv>
    </ContactsDiv>
  );
}

export default Contact;
