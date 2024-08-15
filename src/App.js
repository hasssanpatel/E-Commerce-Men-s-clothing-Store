import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BuyNow from './components/BuyNow';
import TShirts from './components/TShirts';
import Pants from './components/Pants';
import Jackets from './components/Jackets';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BuyNow" element={<BuyNow />} />
        <Route path="/TShirts" element={<TShirts />} />
        <Route path="/Pants" element={<Pants />} />
        <Route path="/Jackets" element={<Jackets />} />
      </Routes>
    </Router>
  );
}

export default App;




