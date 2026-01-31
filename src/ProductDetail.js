import React from 'react';
import { Link } from 'react-router-dom';

function ProductDetail() {

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#FBFBFB' }}>
      {/* Top Header Bar - Same as Home */}
      <Link to="/" style={{ cursor: 'pointer' }}>
        <img
          src="/image/LOGOS.png"
          alt="Logo"
          style={{
            width: '120px',
            height: 'auto',
            position: 'fixed',
            top: '20px',
            right: '50px',
            borderRadius: '10px',
            marginRight: '30px',
            marginTop: '0px',
            zIndex: 10,
            filter: 'brightness(1.1) contrast(1.15)'
          }}
        />
      </Link>
      <div style={{
        position: 'fixed',
        top: '34px',
        left: '800px',
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        alignItems: 'center',
        fontFamily: 'El Messiri',
        fontWeight: 600,
        fontSize: '30px',
        lineHeight: '150%',
        wordSpacing: '5px',
        color: '#022B3A',
        zIndex: 10
      }}>
        <Link to="/medical-tools" style={{ color: '#022B3A', textDecoration: 'none' }}>أدوات طبية</Link>
        <Link to="/women" style={{ color: '#022B3A', textDecoration: 'none' }}>نسائي</Link>
        <Link to="/men" style={{ color: '#022B3A', textDecoration: 'none' }}>رجالي</Link>
        <Link to="/" style={{ color: '#022B3A', textDecoration: 'none' }}>الرئيسية</Link>
      </div>

      {/* Icons and Search */}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '0px',
        display: 'flex',
        flexDirection: 'row',
        gap: '15px',
        alignItems: 'center',
        zIndex: 10
      }}>
        <div style={{
          position: 'relative',
          width: '70px',
          height: '70px',
          borderRadius: '1000px',
          backgroundColor: '#FBFBFB30',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '90px',
          cursor: 'pointer',
          transform: 'rotate(0deg)',
          opacity: 1,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          <img src="/image/icon2.png" alt="Icon 2" style={{
            position: 'absolute',
            width: '32px',
            height: '32px',
            top: '19px',
            left: '19px',
            transform: 'rotate(0deg)',
            opacity: 1,
            filter: 'brightness(0) saturate(100%) invert(8%) sepia(65%) saturate(1414%) hue-rotate(185deg)'
          }} />
        </div>
        <Link to="/product-detail" style={{ textDecoration: 'none' }}>
          <div style={{
            position: 'relative',
            width: '70px',
            height: '70px',
            borderRadius: '1000px',
            backgroundColor: '#FBFBFB30',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transform: 'rotate(0deg)',
            opacity: 1,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            <img src="/image/icon1.png" alt="Icon 1" style={{
              position: 'absolute',
              width: '32px',
              height: '32px',
              top: '19px',
              left: '19px',
              transform: 'rotate(0deg)',
              opacity: 1,
              filter: 'brightness(0) saturate(100%) invert(8%) sepia(65%) saturate(1414%) hue-rotate(185deg)'
            }} />
          </div>
        </Link>
        <div style={{
          position: 'relative',
          width: '295px',
          height: '70px',
          transform: 'rotate(0deg)',
          opacity: 1
        }}>
          <input
            type="text"
            placeholder="أبحث عن منتج"
            dir="rtl"
            style={{
              width: '255px',
              height: '70px',
              marginLeft: '30px',
              borderRadius: '50px',
              backgroundColor: '#FBFBFB',
              opacity: 1,
              border: '1px solid #BFBFBF',
              padding: '0 60px 0 20px',
              fontFamily: 'El Messiri',
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '150%',
              outline: 'none',
              backgroundImage: 'url(/image/adca.png)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 20px center',
              backgroundSize: '20px 20px',
              color: '#333',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)'
            }}
          />
        </div>
      </div>

      {/* Header Divider Line */}
      <div style={{
        position: 'fixed',
        top: '105px',
        left: '0',
        right: '0',
        height: '4px',
        backgroundColor: '#BFBFBF',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        zIndex: 11
      }}></div>


    </div >
  );
}

export default ProductDetail;
