
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import MedicalTools from './pages/MedicalTools';
import Login from './pages/Login';
import VerifyCode from './pages/VerifyCode';
import Footer from './components/Footer';
import WashingGuide from './pages/WashingGuide';
import ReturnPolicy from './pages/ReturnPolicy';
import Purchase from './pages/Purchase';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import Account from './pages/profile/Account';
import Orders from './pages/profile/Orders';
import Resorts from './pages/profile/Resorts';
import Addresses from './pages/profile/Addresses';
import Payments from './pages/profile/Payments';

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
          <Route path="/checkout" element={<Checkout />} />
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
