import React from "react";
import { createContext, useState } from "react";
export const HoverContext = createContext();
export const HoverProvider = ({ children }) => {
    const [home,setHome]  = useState(false);
    const [about, setAbout] = useState(false);
    const [skills, setSkills] = useState(false);
    const [projects, setProjects] = useState(false);
    const [contacts, setContacts] = useState(false);
    
    function onAbout() {
        setAbout(true);
        setHome(false);
        setContacts(false);
        setSkills(false);
        setProjects(false)
    }
    function onHome() {
        setAbout(false);
        setHome(true);
        setContacts(false);
        setSkills(false);
        setProjects(false)
    }
    function onSkills() {
        setAbout(false);
        setHome(false);
        setContacts(false);
        setSkills(true);
        setProjects(false)
    }
    function onContacts() {
        setAbout(false);
        setHome(false);
        setContacts(true);
        setSkills(false);
        setProjects(false)
    }

    function onProjects() {
        setAbout(false);
        setHome(false);
        setContacts(false);
        setSkills(false);
        setProjects(true)
    }
    return (
        <HoverContext.Provider value={{home,onHome,about,onAbout,projects,onProjects,skills,onSkills,contacts,onContacts}}>
          {children}
        </HoverContext.Provider>
      );
}