import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SortFilter from './SortFilter';

function Men() {
  const cardsPerView = 3;
  const [products, setProducts] = useState([
    { img: '/image/man1.jpg', price: 250, sales: 100 },
    { img: '/image/man2.jpg', price: 300, sales: 80 },
    { img: '/image/man3.jpg', price: 200, sales: 120 }
  ]);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isTitle1Visible, setIsTitle1Visible] = useState(false);
  const [isTitle2Visible, setIsTitle2Visible] = useState(false);
  const [isTitle3Visible, setIsTitle3Visible] = useState(false);
  const [isDescVisible, setIsDescVisible] = useState(false);
  const [isVisibleX1, setIsVisibleX1] = useState(false);
  const [isVisibleX2, setIsVisibleX2] = useState(false);
  const [isVisibleX3, setIsVisibleX3] = useState(false);
  const [isButtonHoveredX1, setIsButtonHoveredX1] = useState(false);
  const [isButtonHoveredX2, setIsButtonHoveredX2] = useState(false);
  const [sortType, setSortType] = useState('');

  const handleSort = (type) => {
    setSortType(type);
    let sorted = [...products];
    if (type === 'highToLow') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (type === 'lowToHigh') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === 'bestSeller') {
      sorted.sort((a, b) => b.sales - a.sales);
    }
    setProducts(sorted);
  };



  useEffect(() => {
    const timer1 = setTimeout(() => setIsTitle1Visible(true), 2000);
    const timer2 = setTimeout(() => setIsTitle2Visible(true), 2500);
    const timer3 = setTimeout(() => setIsTitle3Visible(true), 3000);
    const timerDesc = setTimeout(() => setIsDescVisible(true), 3500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerDesc);
    };
  }, []);

  useEffect(() => {
    const timerX1 = setTimeout(() => {
      setIsVisibleX1(true);
    }, 700); // Delay for Men's Scrubs
    const timerX2 = setTimeout(() => {
      setIsVisibleX2(true);
    }, 900); // Delay for Medical Tools
    const timerX3 = setTimeout(() => {
      setIsVisibleX3(true);
    }, 500); // Delay for Women's Scrubs
    return () => {
      clearTimeout(timerX1);
      clearTimeout(timerX2);
      clearTimeout(timerX3);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '2450px', backgroundColor: '#FBFBFB' }}>
      {/* Header Section */}
      <img
        src="/image/x1.jpg"
        alt="Header"
        style={{
          width: 'calc(100vw - 32px)',
          height: '536px',
          position: 'absolute',
          top: '16px',
          left: '16px',
          transform: 'scaleX(-1)',
          opacity: 1,
          borderRadius: '10px',
          filter: 'brightness(0.5)'
        }}
      />

      <img
        src="/image/logo.png"
        alt="Logo"
        style={{
          width: '100px',
          height: 'auto',
          position: 'absolute',
          top: '63px',
          right: '50px',
          borderRadius: '10px',
          marginRight: '30px',
          marginTop: '0px'
        }}
      />
      <div style={{ position: 'absolute', top: '160px', right: '60px', lineHeight: '-20px' }}>
        <h2 style={{
          fontFamily: 'El Messiri',
          fontWeight: 700,
          fontSize: '64px',
          lineHeight: '80%',
          letterSpacing: '0%',
          textAlign: 'right',
          color: '#FFFFFF',
          marginRight: '20px',
          opacity: isTitle1Visible ? 1 : 0,
          transform: isTitle1Visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1s ease, transform 1s ease'
        }}>سكرابات رجالي</h2>

      </div>
      <div style={{
        position: 'absolute',
        top: '240px',
        right: '65px',
        lineHeight: '100px',
        opacity: isDescVisible ? 1 : 0,
        transform: isDescVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1s ease, transform 1s ease'
      }}>
        <p style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '24px', lineHeight: '150%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginTop: '80px', marginBottom: '0px', wordSpacing: '1px' }}>تصميمات أنيقة بخامات مريحة تمنحك الثقة</p>
        <p style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '24px', lineHeight: '150%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginTop: '0px', wordSpacing: '5px' }}> والراحة طوال يومك الطبي </p>
      </div>

      <div style={{
        position: 'absolute',
        top: '53px',
        left: '0px',
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        alignItems: 'center'
      }}>
        <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(251, 251, 251, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '90px' }}>
          <img src="/image/icon1.png" alt="Icon 1" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
        </div>
        <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(251, 251, 251, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/image/icon2.png" alt="Icon 2" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
        </div>
      </div>
      <div style={{
        position: 'absolute',
        top: '73px',
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
        color: '#FFFFFF'
      }}>
        <span style={{ marginLeft: '35px' }}>أدوات طبية</span>
        <span>نسائي </span>
        <Link to="/men" style={{ color: '#FFFFFF', textDecoration: 'none' }}>رجالي</Link>
        <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>الرئيسية </Link>
      </div>

      {/* New Section */}
      <div style={{ position: 'absolute', top: '570px', left: '50px', right: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <SortFilter onSort={handleSort} />
        <h2 style={{ fontFamily: 'El Messiri', fontWeight: 700, fontStyle: 'Bold', fontSize: '55px', lineHeight: '150%', letterSpacing: '0%', textAlign: 'right', color: '#000' }}>سكرابات رجالي</h2>
      </div>

      {/* ================== Best Sellers Section ================== */}
      <div style={{ position: 'absolute', width: '100%', height: '700px', top: '600px' }}>







        {/* Product Cards */}
        <div
          style={{
            position: 'absolute',
            top: '180px',
            left: '85px',
            display: 'flex',
            flexDirection: 'row',
            gap: '32px',
            // width:'100%'
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                width: '400px',
                height: '495px',
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                overflow: 'hidden',
                fontFamily: 'Cairo',
                direction: 'rtl',
                opacity: 1,
                paddingRight: '0px'
              }}
            >
              {/* Image Wrapper */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#F7F7F7',
                  padding: '0',
                  textAlign: 'center',
                  height: '382px'
                }}
              >
                {/* Image */}
                <img
                  src={product.img}
                  alt="product"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />


              </div>

              {/* Content */}
              <div style={{ padding: '20px 20px' }}>
                {/* Title and Colors on same line */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '6px'
                  }}
                >
                  {/* Title on left */}
                  <h3
                    style={{
                      fontFamily: 'Cairo',
                      fontWeight: 500,
                      fontSize: '24px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#000000',
                      margin: 0
                    }}
                  >
                    سكراب ميديكل
                  </h3>

                  {/* Color dots on right */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '10px'
                    }}
                  >
                    {['#000000', '#7B1113', '#BDBDBD', '#0D47A1'].map((c, i) => (
                      <span
                        key={i}
                        style={{
                          width: '23px',
                          height: '23px',
                          borderRadius: '50%',
                          backgroundColor: c
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Price */}

                {/* Button and Price on same line */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px'
                  }}
                >
                  {/* Price */}
                  <p
                    style={{
                      fontFamily: 'Cairo',
                      fontWeight: 500,
                      fontSize: '24px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      margin: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    {product.price}
                    <img
                      src="/image/ry.jpeg"
                      alt="ريال"
                      style={{
                        height: '18px',
                        width: 'auto'
                      }}
                    />
                  </p>

                  <button
                    style={{
                      backgroundColor: '#0F6A7B',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      fontSize: '17px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      width: '140px',
                      fontFamily: 'Cairo',


                    }}
                  >
                    + أضف للسلة
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================== Best Sellers Section 2 ================== */}
      <div style={{ position: 'absolute', width: '100%', height: '700px', top: '1100px' }}>







        {/* Product Cards */}
        <div
          style={{
            position: 'absolute',
            top: '180px',
            left: '85px',
            display: 'flex',
            flexDirection: 'row',
            gap: '32px',
            // width:'100%'
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                width: '400px',
                height: '495px',
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                overflow: 'hidden',
                fontFamily: 'Cairo',
                direction: 'rtl',
                opacity: 1,
                paddingRight: '0px'
              }}
            >
              {/* Image Wrapper */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#F7F7F7',
                  padding: '0',
                  textAlign: 'center',
                  height: '382px'
                }}
              >
                {/* Image */}
                <img
                  src={product.img}
                  alt="product"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />


              </div>

              {/* Content */}
              <div style={{ padding: '20px 20px' }}>
                {/* Title and Colors on same line */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '6px'
                  }}
                >
                  {/* Title on left */}
                  <h3
                    style={{
                      fontFamily: 'Cairo',
                      fontWeight: 500,
                      fontSize: '24px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#000000',
                      margin: 0
                    }}
                  >
                    سكراب ميديكل
                  </h3>

                  {/* Color dots on right */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '10px'
                    }}
                  >
                    {['#000000', '#7B1113', '#BDBDBD', '#0D47A1'].map((c, i) => (
                      <span
                        key={i}
                        style={{
                          width: '23px',
                          height: '23px',
                          borderRadius: '50%',
                          backgroundColor: c
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Price */}

                {/* Button and Price on same line */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px'
                  }}
                >
                  {/* Price */}
                  <p
                    style={{
                      fontFamily: 'Cairo',
                      fontWeight: 500,
                      fontSize: '24px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      margin: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    {product.price}
                    <img
                      src="/image/ry.jpeg"
                      alt="ريال"
                      style={{
                        height: '18px',
                        width: 'auto'
                      }}
                    />
                  </p>

                  <button
                    style={{
                      backgroundColor: '#0F6A7B',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      fontSize: '17px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      width: '140px',
                      fontFamily: 'Cairo',


                    }}
                  >
                    + أضف للسلة
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================== Best Sellers Section 3 ================== */}
      <div style={{ position: 'absolute', width: '100%', height: '700px', top: '1600px' }}>







        {/* Product Cards */}
        <div
          style={{
            position: 'absolute',
            top: '180px',
            left: '85px',
            display: 'flex',
            flexDirection: 'row',
            gap: '32px',
            // width:'100%'
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                width: '400px',
                height: '495px',
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                overflow: 'hidden',
                fontFamily: 'Cairo',
                direction: 'rtl',
                opacity: 1,
                paddingRight: '0px'
              }}
            >
              {/* Image Wrapper */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#F7F7F7',
                  padding: '0',
                  textAlign: 'center',
                  height: '382px'
                }}
              >
                {/* Image */}
                <img
                  src={product.img}
                  alt="product"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />


              </div>

              {/* Content */}
              <div style={{ padding: '20px 20px' }}>
                {/* Title and Colors on same line */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '6px'
                  }}
                >
                  {/* Title on left */}
                  <h3
                    style={{
                      fontFamily: 'Cairo',
                      fontWeight: 500,
                      fontSize: '24px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#000000',
                      margin: 0
                    }}
                  >
                    سكراب ميديكل
                  </h3>

                  {/* Color dots on right */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '10px'
                    }}
                  >
                    {['#000000', '#7B1113', '#BDBDBD', '#0D47A1'].map((c, i) => (
                      <span
                        key={i}
                        style={{
                          width: '23px',
                          height: '23px',
                          borderRadius: '50%',
                          backgroundColor: c
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Price */}

                {/* Button and Price on same line */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px'
                  }}
                >
                  {/* Price */}
                  <p
                    style={{
                      fontFamily: 'Cairo',
                      fontWeight: 500,
                      fontSize: '24px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      margin: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    {product.price}
                    <img
                      src="/image/ry.jpeg"
                      alt="ريال"
                      style={{
                        height: '18px',
                        width: 'auto'
                      }}
                    />
                  </p>

                  <button
                    style={{
                      backgroundColor: '#0F6A7B',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      fontSize: '17px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      width: '140px',
                      fontFamily: 'Cairo',


                    }}
                  >
                    + أضف للسلة
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

export default Men;
