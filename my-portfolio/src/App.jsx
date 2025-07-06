import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TopBar from './Components/TopBar.jsx'
import HeroSection from './Components/HeroSection.jsx'
import About from './Components/About.jsx'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'
import Education from './Components/Education.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
