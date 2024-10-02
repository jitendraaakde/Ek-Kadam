import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './HomePage.jsx';
import AboutUs from './components/AboutUs.jsx';
import Journey from './components/JourneySection.jsx';
import DonatePage from './components/Donate.jsx';
import Layout from './Layout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="journey" element={<Journey />} />
          <Route path="donate" element={<DonatePage />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
