import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import Career from './pages/Career';
import Aboutme from './pages/Aboutme';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" exact element={<Home/>}/>
            {/* Don't forget the "exact" or everything will redirect to the "Home page".*/}
            <Route path="/competences" element={<Knowledges/>}/>
            <Route path="/career" element={<Career/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/aboutme" element={<Aboutme/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
};
          
export default App;