import React, { useState, useEffect } from 'react'
import About from './blocks/About';
import Intro from './blocks/Intro';
import Projects from './blocks/Projects'
import Contact from './blocks/Contact'
import Wrapper from './Wrapper'

import { PortfolioProvider } from '../context/portfolio-context'

import { bigProjectCardData, smallProjectCardData, skillsData } from '../mock/data'

function App() {

  const [bigProjectCards, setBigProjectCards] = useState([]);
  const [smallProjectCards, setSmallProjectCards] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setBigProjectCards([...bigProjectCardData]);
    setSmallProjectCards([...smallProjectCardData]);
    setSkills([...skillsData]);
  }, [])
  
  return (
    <PortfolioProvider value={{ bigProjectCards, smallProjectCards, skills }}>
      <Wrapper>
        <Intro />
        <Projects />
        <About />
        <Contact />
      </Wrapper>
    </PortfolioProvider>
  );
}

export default App;
