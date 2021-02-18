import './App.css';
import About from './blocks/About';
import Intro from './blocks/Intro';
import Projects from './blocks/Projects'
import Contact from './blocks/Contact'
import Wrapper from './components/Wrapper'
import { WOW } from 'wowjs'

function App() {
    const wow = new WOW({live: false});
    wow.init()
  
  return (
    <>
      <Wrapper>
        <Intro />
        <Projects />
        <About />
        <Contact />
      </Wrapper>
    </>
  );
}

export default App;
