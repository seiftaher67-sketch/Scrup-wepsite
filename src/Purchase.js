import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Purchase() {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('cartFormData');
    return saved ? JSON.parse(saved) : {
      fullName: "",
      phone: "",
      address: "",
      apartment: "",
      saveData: false,
    };
  });

  useEffect(() => {
    if (formData.saveData) {
      localStorage.setItem('cartFormData', JSON.stringify(formData));
    } else {
      localStorage.removeItem('cartFormData');
    }
  }, [formData]);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "عباية كتان",
      size: "M",
      color: "أحمر",
      quantity: 1,
      price: 250,
      image: "/image/girl1.jpg",
    },
    {
      id: 2,
      name: "طرحة قطن",
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
                border: '1px solid #C1C1C1',
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
          fontFamily: 'Calibri',
          fontWeight: 400,
          fontSize: '48px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#0F0F0F',
          marginBottom: '30px',
          marginTop: '0',
          textAlign: 'right'
        }}>
          إتمام الشراء
        </h1>

        {/* Contact Information Title */}
        <h2 style={{
          fontFamily: 'Calibri',
          fontWeight: 400,
          fontSize: '32px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#0F0F0F',
          marginBottom: '20px',
          marginTop: '0'
        }}>
          معلومات التواصل
        </h2>

        {/* Form and Map Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
          marginBottom: '40px'
        }}>
          {/* Left: Form */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Full Name */}
              <div>
                <label style={{
                  fontFamily: 'Calibri',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  color: '#666',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  placeholder="أدخل اسمك الكامل"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  dir="rtl"
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '12px 16px',
                    border: '1px solid #C1C1C1',
                    borderRadius: '6px',
                    fontFamily: 'Calibri',
                    fontWeight: 400,
                    fontSize: '16px',
                    textAlign: 'right',
                    boxSizing: 'border-box',
                    outline: 'none',
                    backgroundColor: '#FFF'
                  }}
                />
              </div>

              {/* Phone */}
              <div>
                <label style={{
                  fontFamily: 'Calibri',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  color: '#666',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  رقم الجوال
                </label>
                <input
                  type="tel"
                  placeholder="أدخل رقم جوالك"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  dir="rtl"
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '12px 16px',
                    border: '1px solid #C1C1C1',
                    borderRadius: '6px',
                    fontFamily: 'Calibri',
                    fontWeight: 400,
                    fontSize: '16px',
                    textAlign: 'right',
                    boxSizing: 'border-box',
                    outline: 'none',
                    backgroundColor: '#FFF'
                  }}
                />
              </div>

              {/* Address */}
              <div>
                <label style={{
                  fontFamily: 'Calibri',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  color: '#666',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  أدير بايت / الحي
                </label>
                <input
                  type="text"
                  placeholder="أدخل عنوانك"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  dir="rtl"
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '12px 16px',
                    border: '1px solid #DDD',
                    borderRadius: '6px',
                    fontFamily: 'Calibri',
                    fontWeight: 400,
                    fontSize: '16px',
                    textAlign: 'right',
                    boxSizing: 'border-box',
                    outline: 'none',
                    backgroundColor: '#FFF'
                  }}
                />
              </div>

              {/* District */}
              <div>
                <label style={{
                  fontFamily: 'Calibri',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  color: '#666',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  اسم المحافظة
                </label>
                <input
                  type="text"
                  placeholder="أدخل اسم المحافظة"
                  dir="rtl"
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '12px 16px',
                    border: '1px solid #C1C1C1',
                    borderRadius: '6px',
                    fontFamily: 'Calibri',
                    fontWeight: 400,
                    fontSize: '16px',
                    textAlign: 'right',
                    boxSizing: 'border-box',
                    outline: 'none',
                    backgroundColor: '#FFF'
                  }}
                />
              </div>

              {/* Building Number */}
              <div>
                <label style={{
                  fontFamily: 'Calibri',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  color: '#666',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  رقم المنزل
                </label>
                <input
                  type="text"
                  placeholder="أدخل رقم المنزل"
                  dir="rtl"
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '12px 16px',
                    border: '1px solid #C1C1C1',
                    borderRadius: '6px',
                    fontFamily: 'Calibri',
                    fontWeight: 400,
                    fontSize: '16px',
                    textAlign: 'right',
                    boxSizing: 'border-box',
                    outline: 'none',
                    backgroundColor: '#FFF'
                  }}
                />
              </div>

              {/* Apartment Number */}
              <div>
                <label style={{
                  fontFamily: 'Calibri',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  color: '#666',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  رقم الشقة / الدور
                </label>
                <input
                  type="text"
                  placeholder="أدخل رقم الشقة"
                  value={formData.apartment}
                  onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                  dir="rtl"
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '12px 16px',
                    border: '1px solid #DDD',
                    borderRadius: '6px',
                    fontFamily: 'Calibri',
                    fontWeight: 400,
                    fontSize: '16px',
                    textAlign: 'right',
                    boxSizing: 'border-box',
                    outline: 'none',
                    backgroundColor: '#FFF'
                  }}
                />
              </div>

              {/* Save Data Checkbox */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '12px',
                marginTop: '12px'
              }}>
                <label style={{
                  fontFamily: 'Calibri',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '100%',
                  color: '#666',
                  cursor: 'pointer'
                }}>
                  احفظ معلوماتك للعضوية
                </label>
                <input
                  type="checkbox"
                  checked={formData.saveData}
                  onChange={(e) => setFormData({ ...formData, saveData: e.target.checked })}
                  style={{
                    width: '16px',
                    height: '16px',
                    cursor: 'pointer'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div style={{
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid #C1C1C1',
            backgroundColor: '#F0F0F0',
            height: '360px'
          }}>
            <iframe
              src="https://maps.google.com/maps?q=Riyadh&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              allow="geolocation"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Payment Section Title */}
        <h2 style={{
          fontFamily: 'Calibri',
          fontWeight: 400,
          fontSize: '32px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#0F0F0F',
          marginBottom: '20px',
          marginTop: '40px'
        }}>
          الدفع
        </h2>

        {/* Payment Description */}
        <p style={{
          fontFamily: 'Calibri',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'right',
          color: '#999999',
          marginBottom: '20px'
        }}>
          جميع معاملات الدفع آمنة ومحمية
        </p>

        {/* Payment Form */}
        <div style={{
          backgroundColor: '#017A9F',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '24px'
        }}>
          <input
            type="text"
            placeholder="رقم البطاقة الائتمانية"
            dir="rtl"
            style={{
              width: '100%',
              height: '44px',
              padding: '12px 16px',
              border: '1px solid #C1C1C1',
              borderRadius: '6px',
              fontFamily: 'Calibri',
              fontWeight: 400,
              fontSize: '16px',
              textAlign: 'right',
              boxSizing: 'border-box',
              outline: 'none',
              backgroundColor: '#FFF',
              marginBottom: '12px'
            }}
          />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <input
              type="text"
              placeholder="CVV"
              dir="rtl"
              style={{
                height: '44px',
                padding: '12px 16px',
                border: '1px solid #C1C1C1',
                borderRadius: '6px',
                fontFamily: 'Calibri',
                fontWeight: 400,
                fontSize: '16px',
                textAlign: 'right',
                boxSizing: 'border-box',
                outline: 'none',
                backgroundColor: '#FFF'
              }}
            />
            <input
              type="text"
              placeholder="تاريخ الانتهاء"
              dir="rtl"
              style={{
                height: '44px',
                padding: '12px 16px',
                border: '1px solid #C1C1C1',
                borderRadius: '6px',
                fontFamily: 'Calibri',
                fontWeight: 400,
                fontSize: '16px',
                textAlign: 'right',
                boxSizing: 'border-box',
                outline: 'none',
                backgroundColor: '#FFF'
              }}
            />
          </div>
        </div>

        {/* Installment Payment Section */}
        <h2 style={{
          fontFamily: 'Calibri',
          fontWeight: 400,
          fontSize: '32px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#0F0F0F',
          marginBottom: '20px',
          marginTop: '40px'
        }}>
          الدفع بالتقسيط
        </h2>

        {/* Payment Methods */}
        <div style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          gap: '16px',
          marginBottom: '40px'
        }}>
          {/* Tabby Button */}
          <button
            style={{
              flex: 1,
              height: '60px',
              backgroundColor: '#F5F5F5',
              border: '2px solid #000',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <img src="/images/tabby.png" alt="tabby" style={{ height: '30px', width: 'auto' }} />
          </button>

          {/* Tamara Button */}
          <button
            style={{
              flex: 1,
              height: '60px',
              backgroundColor: '#F5F5F5',
              border: '2px solid #000',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <img src="/images/tamara.png" alt="tamara" style={{ height: '30px', width: 'auto' }} />
          </button>
        </div>

        {/* Order Items Section */}
        <h2 style={{
          fontFamily: 'Calibri',
          fontWeight: 400,
          fontSize: '32px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#0F0F0F',
          marginBottom: '20px'
        }}>
          عناصر الطلب
        </h2>

        {/* Order Items */}
        <div style={{ marginBottom: '30px' }}>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                gap: '20px',
                padding: '20px',
                backgroundColor: '#F5F5F5',
                borderRadius: '8px',
                border: '1px solid #C1C1C1',
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
                    width: '120px',
                    height: '120px',
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
                    margin: '0',
                    marginTop: '0px'
                  }}>
                    {item.name}
                  </h3>

                  {/* Size, Color, Quantity Info */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    fontSize: '12px',
                    color: '#0F0F0F',
                    fontFamily: 'Calibri',
                    minWidth: '70px',
                    marginTop: '20px'
                  }}>
                    <div>
                      <span style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', lineHeight: '20px', letterSpacing: '0px' }}>المقاس:</span> <span style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'normal', fontSize: '16px', lineHeight: '20px', letterSpacing: '0px' }}>{item.size}</span>
                    </div>
                    <div>
                      <span style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', lineHeight: '20px', letterSpacing: '0px' }}>اللون:</span> <span style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'normal', fontSize: '16px', lineHeight: '20px', letterSpacing: '0px' }}>{item.color}</span>
                    </div>
                    <div>
                      <span style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', lineHeight: '20px', letterSpacing: '0px' }}>الكمية:</span> <span style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'normal', fontSize: '16px', lineHeight: '20px', letterSpacing: '0px' }}>{item.quantity.toLocaleString('en-US')}</span>
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
                minWidth: '70px',
                backgroundColor: 'transparent'
              }}>
                {/* Price */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  whiteSpace: 'nowrap'
                }}>
                  <span style={{
                    fontFamily: 'Calibri',
                    fontWeight: 700,
                    fontSize: '32px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#0F0F0F'
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
          <span style={{ fontFamily: 'Calibri', fontWeight: 400, fontSize: '24px', color: '#666', textAlign: 'right' }}>المبلغ الإجمالي</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
            <span style={{ fontFamily: 'Calibri', fontWeight: 400, fontSize: '24px', color: '#666' }}>{subtotal.toLocaleString('en-US')}</span>
            <img src="/image/ry.jpeg" alt="ريال" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
          </div>

          <span style={{ fontFamily: 'Calibri', fontWeight: 400, fontSize: '24px', color: '#666', textAlign: 'right' }}>مصاريف التوصيل</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
            <span style={{ fontFamily: 'Calibri', fontWeight: 400, fontSize: '24px', color: '#666' }}>{shipping.toLocaleString('en-US')}</span>
            <img src="/image/ry.jpeg" alt="ريال" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
          </div>

          <span style={{ fontFamily: 'Calibri', fontWeight: 400, fontSize: '24px', color: '#666', textAlign: 'right' }}>المبلغ كامل</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
            <span style={{ fontFamily: 'Calibri', fontWeight: 600, fontSize: '24px', color: '#0F0F0F' }}>{total.toLocaleString('en-US')}</span>
            <img src="/image/ry.jpeg" alt="ريال" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
          </div>
        </div>

        {/* Confirm Order Button */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          <button
            style={{
              fontFamily: 'Calibri',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              backgroundColor: '#017A9F',
              color: '#FFF',
              padding: '14px 60px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              outline: 'none'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#015a7d'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#017A9F'}
          >
            تأكيد الطلب
          </button>
        </div>
      </div>
    </div >
  );
}

export default Purchase;
