import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage';
import HomePage from './Pages/HomePage'
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Calculator from './Pages/Calculator/sip_calc'
import CsvFile from './Pages/csvfile'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={LandingPage}/>
          <Route path='/home' Component={HomePage}/>
          <Route path='/myportfolio' Component={MyPortfolio}/>
          <Route path='/calculator' Component={Calculator}/>
          <Route path='/csvfile' Component={CsvFile}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


