import './App.css';
import { About } from './Components/About';
import { Header } from './Components/Header';
import { Intro } from './Components/Intro';
import { Skills } from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
