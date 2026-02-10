import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Men from './Men';
import Women from './Women';
import MedicalTools from './MedicalTools';
import Login from './Login';
import VerifyCode from './VerifyCode';
import Footer from './Footer';
import WashingGuide from './WashingGuide';
import ReturnPolicy from './ReturnPolicy';
import Purchase from './Purchase';
import ProductDetail from './ProductDetail';
import Account from './Account';
import Orders from './Orders';
import Resorts from './Resorts';
import Addresses from './Addresses';
import Payments from './Payments';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/medical-tools" element={<MedicalTools />} />
          <Route path="/login" element={<Login />} />
          <Route path="/washing-guide" element={<WashingGuide />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/account" element={<Account />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/resorts" element={<Resorts />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
