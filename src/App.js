import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Bushcraft from './pages/Bushcraft';
import NavigationSafety from './pages/NavigationSafety';
import Food from './pages/Food';
import Fire from './pages/Fire';
import Quest from './pages/Quest'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bushcraft" element={<Bushcraft />} />
        <Route path="/navigation" element={<NavigationSafety />} />
        <Route path="/food" element={<Food />} />
        <Route path="/fire" element={<Fire />} />
        <Route path="/quest/:name" component={Quest} />
      </Routes>
    </Router>
  );
}

export default App;
