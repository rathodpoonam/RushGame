
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Combin from './components/Combin';
import Carrom from './components/Carrom';


import Ludo from './components/Ludo';
import Grid from './components/Grid';








function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Combin />} />
          <Route path='/carrom' element={<Carrom />} />
          <Route path='/ludo' element={<Ludo/>}/>
          <Route path='/ludo' element={<Grid/>}/>

        </Routes>
      </Router>
      {/* <Router>
        <Routes>
          <Route path='/ludo' element={<Grid/>}/>


        </Routes>
      </Router> */}

    </>
  );
}

export default App;
