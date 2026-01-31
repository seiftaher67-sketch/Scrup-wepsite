import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ setShowLoginModal }) {
  return (
    <div style={{
      position: 'absolute',
      top: '53px',
      left: '0px',
      display: 'flex',
      flexDirection: 'row',
      gap: '30px',
      alignItems: 'center',
      zIndex: 100
    }}>
      <div 
        onClick={() => setShowLoginModal(true)} 
        style={{ 
          width: '70px', 
          height: '70px', 
          borderRadius: '50%', 
          backgroundColor: 'rgba(251, 251, 251, 0.3)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginLeft: '90px', 
          cursor: 'pointer' 
        }}
      >
        <img src="/image/icon2.png" alt="Icon 2" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
      </div>
      <Link to="/product-detail" style={{ textDecoration: 'none' }}>
        <div style={{ 
          width: '70px', 
          height: '70px', 
          borderRadius: '50%', 
          backgroundColor: 'rgba(251, 251, 251, 0.3)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          cursor: 'pointer' 
        }}>
          <img src="/image/icon1.png" alt="Icon 1" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
        </div>
      </Link>
      <div style={{ position: 'relative', width: '295px', height: '70px' }}>
        <input 
          type="text" 
          placeholder="أبحث عن منتج" 
          dir="rtl" 
          style={{ 
            width: '100%', 
            height: '100%', 
            borderRadius: '50px', 
            backgroundColor: '#FBFBFB', 
            opacity: 1, 
            border: 'none', 
            padding: '0 60px 0 20px', 
            fontFamily: 'El Messiri', 
            fontWeight: 400, 
            fontSize: '24px', 
            lineHeight: '150%', 
            outline: 'none', 
            backgroundImage: 'url(/image/adca.png)', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'right 20px center', 
            backgroundSize: '20px 20px' 
          }} 
        />
      </div>
    </div>
  );
}

export default Header;
