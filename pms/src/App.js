import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage';
import HomePage from './Pages/Home/HomePage'
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Calculator from './Pages/Calculator/sip_calc'
import Resources from './Pages/Resources/Resources'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={LandingPage}/>
          <Route path='/home' Component={HomePage}/>
          <Route path='/myportfolio' Component={MyPortfolio}/>
          <Route path='/calculator' Component={Calculator}/>
          <Route path='/resources' Component={Resources}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


