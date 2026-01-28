import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Men from './Men';
import Footer from './Footer';
import WashingGuide from './WashingGuide';
import ReturnPolicy from './ReturnPolicy';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/washing-guide" element={<WashingGuide />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
