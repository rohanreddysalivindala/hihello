import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import HowItWorks from './pages/HowItWorks';
import OurCommitment from './pages/OurCommitment';
import ContactUs from './pages/ContactUs';
import PageIndicator from './components/PageIndicator';
import './App.css';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="page-background"></div>
      <div className="min-h-screen bg-white">
        <Navigation />
        <PageIndicator />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/commitment" element={<OurCommitment />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;