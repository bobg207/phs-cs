import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home.js'
import Intro from './pages/Intro.js'
import WebDev from './pages/WebDev.js'
import GameDev from './pages/GameDev.js'
import Data from './pages/Data.js'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/intro-to-python' element={<Intro />} />
        <Route path='/web-dev' element={<WebDev />} />
        <Route path='/game-dev' element={<GameDev />} />
        <Route path='/data-analysis' element={<Data />} />
      </Routes>
    </div>
    
  );
}

export default App;
