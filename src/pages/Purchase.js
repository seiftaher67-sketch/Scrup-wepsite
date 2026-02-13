import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Purchase() {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

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

        {/* Return to Cart Sentence */}
        <Link to="/product-detail" style={{ textDecoration: 'none' }}>
          <div style={{

            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            fontFamily: 'El Messiri',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '32px',
            lineHeight: '150%',
            letterSpacing: '0%',
            color: '#0F0F0F',
            marginBottom: '10px',
            marginTop: '10',
            cursor: 'pointer'
          }}>
            <span style={{ marginTop: '-20px' }}>العودة إلى سلة المشتريات</span>
            <img src="/image/sahmcard11.png" alt="sahmcard11" style={{ width: '50px', height: '50px', marginLeft: '40px', transform: 'scaleX(-1)', marginTop: '-20px', }} />
          </div>
        </Link>

        {/* Page Title */}
        <h1 style={{
          fontFamily: 'Calibri',
          fontWeight: 400,
          fontSize: '48px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#0F0F0F',
          marginBottom: '30px',
          marginTop: '-50px',
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
          marginBottom: '40px',
          marginTop: '0',
          fontWeight: 'bold'
        }}>
          معلومات التواصل
        </h2>

        {/* Form and Map Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
          marginBottom: '10px'
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
                  أدخل عنوانك
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
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
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
                <span style={{
                  fontFamily: 'Calibri',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: '#666'
                }}>
                  حفظ البيانات لاستخدامها لاحقاً
                </span>
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





        {/* Complete Purchase Button */}
        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <div style={{
            marginTop: '80px',
            backgroundColor: '#1F7A8C',
            borderRadius: '8px',
            marginBottom: '80px',
            color: '#FFF',
            fontWeight: 600,
            fontSize: '32px',
            fontFamily: 'El Messiri',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            height: '60px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            صفحة الدفع
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Purchase;

