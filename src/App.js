import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Profile from './pages/profile';
import Settings from './pages/settings';
import Footer from './components/Footer';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;