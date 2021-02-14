import './App.css';
import About from './blocks/About';
import Intro from './blocks/Intro';
import Projects from './blocks/Projects'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <div className="">
      <Wrapper>
        {/* <Intro /> */}
        <Projects />
        <About />
      </Wrapper>
    </div>
  );
}

export default App;
