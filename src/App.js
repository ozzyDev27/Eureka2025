import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Bushcraft from './pages/Bushcraft';
import NavigationSafety from './pages/NavigationSafety';
import Food from './pages/Food';
import Fire from './pages/Fire';
import QuestDetails from './pages/Quest'
import QuestComplete from './pages/questcomplete';

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
        <Route path="/quest/:name" element={<QuestDetails/>} />
        <Route path="/complete/:name" element={<QuestComplete/>} />
      </Routes>
    </Router>
  );
}

export default App;
