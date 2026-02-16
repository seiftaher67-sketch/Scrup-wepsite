import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import SortFilter from '../components/SortFilter';

function Women() {
  const cardsPerView = 3;
  const [products, setProducts] = useState([
    { img: '/image/woman1.jpg', price: 250, sales: 100 },
    { img: '/image/woman2.jpg', price: 300, sales: 80 },
    { img: '/image/woman3.jpg', price: 200, sales: 120 }
  ]);

  // State for selected images based on color selection
  const [selectedImage1, setSelectedImage1] = useState('/image/woman1.jpg');
  const [selectedImage2, setSelectedImage2] = useState('/image/woman2.jpg');
  const [selectedImage3, setSelectedImage3] = useState('/image/woman3.jpg');
  const [selectedImage4, setSelectedImage4] = useState('/image/woman1.jpg');
  const [selectedImage5, setSelectedImage5] = useState('/image/woman2.jpg');
  const [selectedImage6, setSelectedImage6] = useState('/image/woman3.jpg');
  const [selectedImage7, setSelectedImage7] = useState('/image/woman1.jpg');
  const [selectedImage8, setSelectedImage8] = useState('/image/woman2.jpg');
  const [selectedImage9, setSelectedImage9] = useState('/image/woman3.jpg');

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
  const [showLoginModal, setShowLoginModal] = useState(false);

  const navigate = useNavigate();

  // Color to image mapping
  const colorToImage = {
    '#0D47A1': '/image/chang1.jpg',  // Blue
    '#BDBDBD': '/image/chang2.jpg',  // Gray
    '#7B1113': '/image/chang4.jpg',  // Purple
    '#000000': '/image/chang3.jpg'   // Black
  };

  // Handle color click for each product card
  const handleColorClick = (color, cardIndex) => {
    const newImage = colorToImage[color];
    if (cardIndex === 0) {
      setSelectedImage1(newImage);
    } else if (cardIndex === 1) {
      setSelectedImage2(newImage);
    } else if (cardIndex === 2) {
      setSelectedImage3(newImage);
    }
  };

  // Handle color click for section 2
  const handleColorClick2 = (color, cardIndex) => {
    const newImage = colorToImage[color];
    if (cardIndex === 0) {
      setSelectedImage4(newImage);
    } else if (cardIndex === 1) {
      setSelectedImage5(newImage);
    } else if (cardIndex === 2) {
      setSelectedImage6(newImage);
    }
  };

  // Handle color click for section 3
  const handleColorClick3 = (color, cardIndex) => {
    const newImage = colorToImage[color];
    if (cardIndex === 0) {
      setSelectedImage7(newImage);
    } else if (cardIndex === 1) {
      setSelectedImage8(newImage);
    } else if (cardIndex === 2) {
      setSelectedImage9(newImage);
    }
  };

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
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

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
    <div style={{ position: 'relative', width: '100%', height: '2500px', backgroundColor: '#FBFBFB' }}>
      {/* Header Section */}
      <img
        src="/image/x3.jpg"
        alt="Header"
        style={{
          width: 'calc(100vw - 40px)',
          height: '536px',
          position: 'absolute',
          top: '16px',
          left: '16px',
          right: '15px',
          transform: 'scaleX(-1)',
          opacity: 1,
          borderRadius: '10px',
          filter: 'brightness(0.5)'
        }}
      />

      <img
        src="/image/logo.png"
        alt="Logo"
        onClick={() => navigate('/')}
        style={{
          width: '100px',
          height: 'auto',
          position: 'absolute',
          top: '37px',
          right: '50px',
          borderRadius: '10px',
          marginRight: '30px',
          marginTop: '0px',
          cursor: 'pointer'
        }}
      />
      <div style={{ position: 'absolute', top: '60px', right: '60px', lineHeight: '-20px' }}>
        <h2 style={{
          fontFamily: 'El Messiri',
          fontWeight: 700,
          fontSize: '64px',
          lineHeight: '80%',
          letterSpacing: '0%',
          textAlign: 'right',
          color: '#FFFFFF',
          marginRight: '20px',
          marginTop: '120px',
          opacity: isTitle1Visible ? 1 : 0,
          transform: isTitle1Visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}>سكرابات نسائي</h2>

      </div>
      <div style={{

        position: 'absolute',
        top: '140px',
        right: '65px',
        lineHeight: '100px',
        opacity: isDescVisible ? 1 : 0,
        transform: isDescVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1s ease, transform 1s ease'
      }}>
        <p style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '24px', lineHeight: '150%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginTop: '80px', marginBottom: '0px', wordSpacing: '1px', marginTop: '140px' }}>تصميمات أنيقة بخامات مريحة تمنحك الثقة</p>
        <p style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '24px', lineHeight: '150%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginTop: '0px', wordSpacing: '5px' }}> والراحة طوال يومك الطبي </p>
      </div>

      <div style={{
        position: 'absolute',
        top: '37px',
        left: '0px',
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        alignItems: 'center'
      }}>
        <div onClick={() => setShowLoginModal(true)} style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(251, 251, 251, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '90px', cursor: 'pointer' }}>
          <img src="/image/icon2.png" alt="Icon 2" onClick={() => setShowLoginModal(true)} style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }} />
        </div>
        <Link to="/product-detail" style={{ textDecoration: 'none' }}>
          <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(251, 251, 251, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <img src="/image/icon1.png" alt="Icon 1" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
          </div>
        </Link>
        <div style={{ position: 'relative', width: '295px', height: '70px' }}>
          <input type="text" placeholder="أبحث عن منتج" dir="rtl" style={{ width: '100%', height: '100%', borderRadius: '50px', backgroundColor: '#FBFBFB', opacity: 1, border: 'none', padding: '0 60px 0 20px', fontFamily: 'El Messiri', fontWeight: 400, fontSize: '24px', lineHeight: '150%', outline: 'none', backgroundImage: 'url(/image/adca.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 20px center', backgroundSize: '20px 20px' }} />
        </div>
      </div>
      <div style={{
        position: 'absolute',
        top: '49px',
        left: '730px',
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
        <Link to="/medical-tools" style={{ color: '#FFFFFF', textDecoration: 'none', marginLeft: '50px' }}>أدوات طبية</Link>
        <Link to="/women" style={{ color: '#FFFFFF', textDecoration: 'none' }}>نسائي</Link>
        <Link to="/men" style={{ color: '#FFFFFF', textDecoration: 'none' }}>رجالي</Link>
        <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>الرئيسية </Link>
      </div>

      {/* New Section */}
      <div style={{ position: 'absolute', top: '570px', left: '50px', right: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        <SortFilter onSort={handleSort} />

        <h2 style={{ fontFamily: 'El Messiri', fontWeight: 700, fontStyle: 'Bold', fontSize: '55px', lineHeight: '150%', letterSpacing: '0%', textAlign: 'right', color: '#000', marginRight: '80px' }}>سكرابات نسائي</h2>
      </div>

      {/* ================== Best Sellers Section ================== */}
      <div style={{ position: 'absolute', width: '100%', height: '675px', top: '590px' }}>





        {/* Product Cards */}
        <div
          style={{
            position: 'absolute',
            top: '180px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'row',
            gap: '32px',
            // width:'100%'
          }}
        >
          {products.map((product, index) => (
            <Link key={index} to="/details" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  width: '400px',
                  height: '520px',
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
                    src={index === 0 ? selectedImage1 : index === 1 ? selectedImage2 : selectedImage3}
                    alt="product"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />


                </div>

                {/* Content */}
                <div style={{ padding: '5px 20px', marginTop: '10px' }}>
                  {/* Title and Colors on same line */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '6px',
                      marginTop: '-5px'
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
                        gap: '5px'

                      }}
                    >
                      {['#000000', '#7B1113', '#BDBDBD', '#0D47A1'].map((c, i) => (
                        <span
                          key={i}
                          onClick={() => handleColorClick(c, index)}
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            backgroundColor: c,
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                            cursor: 'pointer'
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
                      marginBottom: '14px',
                      marginTop: '20px'
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
                        borderRadius: '50px',
                        padding: '7px 16px',
                        fontSize: '17px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        width: '146px',
                        height: '44px',
                        fontFamily: 'Cairo'
                      }}
                    >
                      + أضف للسلة
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ================== Best Sellers Section 2 ================== */}
      <div style={{ position: 'absolute', width: '100%', height: '700px', top: '1150px' }}>




        {/* Product Cards */}
        <div
          style={{
            position: 'absolute',
            top: '180px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'row',
            gap: '32px',
            // width:'100%'
          }}
        >
          {products.map((product, index) => (
            <Link key={index} to="/details" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  width: '400px',
                  height: '505px',
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
                    src={index === 0 ? selectedImage4 : index === 1 ? selectedImage5 : selectedImage6}
                    alt="product"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />


                </div>

                {/* Content */}
                <div style={{ padding: '5px 20px', marginTop: '10px' }}>
                  {/* Title and Colors on same line */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '6px',
                      marginTop: '-5px'
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
                        gap: '5px'
                      }}
                    >
                      {['#000000', '#7B1113', '#BDBDBD', '#0D47A1'].map((c, i) => (
                        <span
                          key={i}
                          onClick={() => handleColorClick2(c, index)}
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            backgroundColor: c,
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                            cursor: 'pointer'
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
                      marginBottom: '14px',
                      marginTop: '20px'
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
                        borderRadius: '50px',
                        padding: '7px 16px',
                        fontSize: '17px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        width: '146px',
                        height: '44px',
                        fontFamily: 'Cairo'
                      }}
                    >
                      + أضف للسلة
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ================== Best Sellers Section 3 ================== */}
      <div style={{ position: 'absolute', width: '100%', height: '700px', top: '1700px' }}>




        {/* Product Cards */}
        <div
          style={{
            position: 'absolute',
            top: '180px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'row',
            gap: '32px',
            // width:'100%'
          }}
        >
          {products.map((product, index) => (
            <Link key={index} to="/details" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  width: '400px',
                  height: '505px',
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
                    src={index === 0 ? selectedImage7 : index === 1 ? selectedImage8 : selectedImage9}
                    alt="product"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />


                </div>

                {/* Content */}
                <div style={{ padding: '5px 20px', marginTop: '10px' }}>
                  {/* Title and Colors on same line */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '6px',
                      marginTop: '-5px'
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
                        gap: '5px'
                      }}
                    >
                      {['#000000', '#7B1113', '#BDBDBD', '#0D47A1'].map((c, i) => (
                        <span
                          key={i}
                          onClick={() => handleColorClick3(c, index)}
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            backgroundColor: c,
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                            cursor: 'pointer'
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
                      marginBottom: '14px',
                      marginTop: '20px'
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
                        borderRadius: '50px',
                        padding: '7px 16px',
                        fontSize: '17px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        width: '146px',
                        height: '44px',
                        fontFamily: 'Cairo'
                      }}
                    >
                      + أضف للسلة
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Spacer for scrolling */}
      {showLoginModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
          onClick={() => setShowLoginModal(false)}
        >
          <div
            style={{
              transform: 'scale(0.5)',
              transformOrigin: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ background: 'transparent' }}>
              <Login />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Women;
