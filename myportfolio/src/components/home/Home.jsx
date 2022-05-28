import React from 'react'
import About from '../about/About'
import Contact from '../contact/Contact'
import Photo from '../photo/Photo'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'

function Home() {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </>
  )
}

export default Home