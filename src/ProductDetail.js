import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductDetail() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "سكراب ميديكال",
      size: "M",
      color: "أحمر",
      quantity: 1,
      price: 250,
      image: "/image/girl1.jpg",
    },
    {
      id: 2,
      name: "سكراب ميديكال",
      size: "M",
      color: "أحمر",
      quantity: 1,
      price: 250,
      image: "/image/girl1.jpg",
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 20;
  const total = subtotal + shipping;

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#FBFBFB' }}>
      {/* Fixed Header Container */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FBFBFB',
        zIndex: 100
      }}>
        {/* Top Header Bar */}
        <Link to="/" style={{ cursor: 'pointer' }}>
          <img
            src="/image/LOGOS.png"
            alt="Logo"
            style={{
              width: '120px',
              height: 'auto',
              position: 'absolute',
              top: '20px',
              right: '30px',
              borderRadius: '10px',
              filter: 'brightness(1.1) contrast(1.15)'
            }}
          />
        </Link>
        <div style={{
          position: 'absolute',
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
          color: '#022B3A'
        }}>
          <Link to="/medical-tools" style={{ color: '#022B3A', textDecoration: 'none' }}>أدوات طبية</Link>
          <Link to="/women" style={{ color: '#022B3A', textDecoration: 'none' }}>نسائي</Link>
          <Link to="/men" style={{ color: '#022B3A', textDecoration: 'none' }}>رجالي</Link>
          <Link to="/" style={{ color: '#022B3A', textDecoration: 'none' }}>الرئيسية</Link>
        </div>

        {/* Icons and Search */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '0px',
          display: 'flex',
          flexDirection: 'row',
          gap: '15px',
          alignItems: 'center'
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
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            <img src="/image/icon2.png" alt="Icon 2" style={{
              width: '32px',
              height: '32px',
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
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <img src="/image/icon1.png" alt="Icon 1" style={{
                width: '32px',
                height: '32px',
                filter: 'brightness(0) saturate(100%) invert(8%) sepia(65%) saturate(1414%) hue-rotate(185deg)'
              }} />
            </div>
          </Link>
          <div style={{
            position: 'relative',
            width: '295px',
            height: '70px'
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
          position: 'absolute',
          top: '105px',
          left: '0',
          right: '0',
          height: '4px',
          backgroundColor: '#BFBFBF',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          width: '100%'
        }}></div>

        {/* Spacer for header height */}
        <div style={{ height: '130px' }}></div>
      </div>

      {/* Main Content */}
      <div style={{ marginTop: '130px', padding: '40px 50px', direction: 'rtl', backgroundColor: '#FBFBFB', minHeight: 'calc(100vh - 130px)', position: 'relative' }}>

        {/* Page Title */}
        <h1 style={{
          fontFamily: 'El Messiri',
          fontWeight: 400,
          fontSize: '55px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#0F0F0F',
          marginBottom: '8px',
          marginTop: '0',
          textAlign: 'right'
        }}>
          السلة
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: 'Calibri',
          fontWeight: 400,
          fontSize: '32px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#3F4254',
          marginBottom: '30px',
          textAlign: 'right'
        }}>
          باقى خطوة وتوصلك راحتك
        </p>

        {/* Cart Items */}
        <div style={{ marginBottom: '30px' }}>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                gap: '20px',
                padding: '20px',
                backgroundColor: '#FFF',
                borderRadius: '8px',
                border: '1px solid #E8E8E8',
                marginBottom: '16px',
                alignItems: 'flex-start',
                fontFamily: 'Cairo'
              }}
            >
              {/* Left Side - Image and Info (formerly Right) */}
              <div style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                flexShrink: 0
              }}>
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '280px',
                    height: '260px',
                    objectFit: 'cover',
                    borderRadius: '6px'
                  }}
                />

                {/* Name and Info Column */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  textAlign: 'right'
                }}>
                  {/* Product Name */}
                  <h3 style={{
                    fontFamily: 'Cairo',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: '24px',
                    lineHeight: '24px',
                    letterSpacing: '0px',
                    textAlign: 'right',
                    color: '#0F0F0F',
                    margin: '0'
                  }}>
                    {item.name}
                  </h3>

                  {/* Size, Color, Quantity Info */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    fontSize: '12px',
                    color: '#666',
                    fontFamily: 'Calibri',
                    minWidth: '70px'
                  }}>
                    <div>
                      <span style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', lineHeight: '20px', letterSpacing: '0px' }}>المقاس:</span> <span style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'normal', fontSize: '20px', lineHeight: '50px', letterSpacing: '0px' }}>{item.size}</span>
                    </div>
                    <div>
                      <span style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', lineHeight: '20px', letterSpacing: '0px' }}>اللون:</span> <span style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'normal', fontSize: '20px', lineHeight: '50px', letterSpacing: '0px' }}>{item.color}</span>
                    </div>
                    <div>
                      <span style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', lineHeight: '20px', letterSpacing: '0px' }}>الكمية:</span> <span style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'normal', fontSize: '20px', lineHeight: '50px', letterSpacing: '0px' }}>{item.quantity.toLocaleString('en-US')}</span>
                    </div>
                    {/* Controls */}
                    <div style={{
                      display: 'flex',
                      gap: '8px',
                      marginTop: '10px'
                    }}>
                      {/* Quantity Controls */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0',
                        border: '2px solid #999',
                        borderRadius: '2px',
                        backgroundColor: '#FFF',
                        width: '140px',
                        height: '50px',
                        opacity: 1,
                        transform: 'rotate(0deg)',
                        borderRight: 'none'
                      }}>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{
                            width: '40px',
                            height: '44px',
                            border: 'none',
                            backgroundColor: '#FFF',
                            cursor: 'pointer',
                            fontSize: '30px',
                            fontFamily: 'Calibri',
                            fontWeight: 600,
                            outline: 'none'
                          }}
                        >
                          +
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          dir="ltr"
                          style={{
                            width: '40px',
                            height: '44px',
                            border: 'none',
                            textAlign: 'center',
                            fontSize: '24px',
                            fontFamily: 'Calibri',
                            outline: 'none',
                            backgroundColor: '#FFF'
                          }}
                        />
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          style={{
                            width: '40px',
                            height: '44px',
                            border: 'none',
                            backgroundColor: '#FFF',
                            cursor: 'pointer',
                            fontSize: '30px',
                            fontFamily: 'Calibri',
                            fontWeight: 600,
                            outline: 'none'
                          }}
                        >
                          −
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        style={{
                          width: '93px',
                          height: '50px',
                          border: '2px solid #999',
                          backgroundColor: '#FFF',
                          cursor: 'pointer',
                          position: 'relative',
                          borderRadius: '2px',
                          opacity: 1,
                          transform: 'rotate(0deg)'
                        }}
                      >
                        <img src="/image/del.png" alt="Delete" style={{
                          position: 'absolute',
                          width: '32px',
                          height: '32px',
                          top: '9px',
                          left: '31px',
                          opacity: 1,
                          transform: 'rotate(0deg)'
                        }} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center - Empty */}
              <div style={{
                textAlign: 'right',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
              </div>

              {/* Right Side - Price and Ry Image (formerly Left) */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                minWidth: '70px'
              }}>
                {/* Price */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  whiteSpace: 'nowrap'
                }}>
                  <span style={{
                    fontSize: '24px',
                    fontWeight: 600,
                    color: '#0F0F0F',
                    fontFamily: 'Calibri'
                  }}>
                    {item.price.toLocaleString('en-US')}
                  </span>
                  <img
                    src="/image/ry.jpeg"
                    alt="ريال"
                    style={{
                      width: '30px',
                      height: '30px',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div style={{
          backgroundColor: '#1F7A8C',
          borderRadius: '6px',
          padding: '16px 20px',
          marginBottom: '24px',
          textAlign: 'center',
          color: '#FFF',
          fontFamily: 'Calibri',
          fontWeight: 600,
          fontSize: '32px',
          fontFamily: 'El Messiri'
        }}>
          إتمام الشراء
        </div>

        {/* Summary Details */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '24px 40px',
          padding: '20px',
          backgroundColor: '#FFF',
          borderRadius: '8px',
          border: '1px solid #EEE',
          marginBottom: '40px'
        }}>
          <span style={{ fontFamily: 'Calibri', fontWeight: 400, fontSize: '24px', color: '#666', textAlign: 'right' }}>مصاريف التوصيل</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
            <span style={{ fontFamily: 'Calibri', fontWeight: 400, fontSize: '24px', color: '#666' }}>{shipping.toLocaleString('en-US')}</span>
            <img src="/image/ry.jpeg" alt="ريال" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
          </div>

          <span style={{ fontFamily: 'Calibri', fontWeight: 400, fontSize: '24px', color: '#666', textAlign: 'right' }}>مجموع الكامل</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
            <span style={{ fontFamily: 'Calibri', fontWeight: 600, fontSize: '24px', color: '#0F0F0F' }}>{total.toLocaleString('en-US')}</span>
            <img src="/image/ry.jpeg" alt="ريال" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
          </div>
        </div>


      </div>
    </div>
  );
}

export default ProductDetail;
