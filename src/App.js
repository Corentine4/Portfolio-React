import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import Parcours from './pages/Parcours';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" exact element={<Home/>}/>
            {/* Don't forget the "exact" or everything will redirect to the "Home page".*/}
            <Route path="/competences" element={<Knowledges/>}/>
            <Route path="/parcours" element={<Parcours/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
};
          
export default App;