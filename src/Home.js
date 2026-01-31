import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

function Index() {
  const cardsPerView = 3;
  const images = ['/image/middle.jpg', '/image/nextmiddle.jpg', '/image/therdmiddle.jpg'];
  const texts = [
    'لأنك تقضي ساعات طويلة في عملك وتحتاج ملابس تعتمد عليها<br />قدمنا اسكرابات تجمع بين الخامة المريحة والتصميم العصري',
    'سكرابات طبية بتصميم عصري وخامات مريحة   <br />تمنحك راحة تدوم وثقة تكمّل حضورك في كل مناوبة',
    'سواء كنتِ في مناوبة طويلة أو يوم عمل مزدحم، سكراباتنا مصممة لتكون جزءًا من راحتك اليومية. </br>لأننا نؤمن أن الراحة تبدأ مما ترتديه، وأن الأداء الأفضل يحتاج إحساس حقيقي بالثقة.'
  ];
  const products = [
    '/image/Header.png',
    '/image/middle.jpg',
    '/image/staf1.jpg',
    '/image/staf2.jpg',
    '/image/staf3.jpg'
  ];

  const cardTexts = [
    '“مقاسه مظبوط والتفصيل عملي. واضح إن التصميم معمول لناس شغالة فعلًا.”',
    'مريح وسهل التنظيف، مثالي للعمل اليومي.',
    'الخامة مريحة جدًا، بلبسه مناوبات طويلة ومش بحس بأي ضيق. الشكل كمان شيك.',
    'الألوان متنوعة والمقاسات مناسبة للجميع.',
    'يمنح شعور بالثقة والاحترافية في العمل.'
  ];

  const cardNames = [
    'د. محمود',
    'د. هدي',
    'د. أحمد',
    'د. فاطمة',
    'د. علي'
  ];

  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isButtonHoveredX2, setIsButtonHoveredX2] = useState(false);
  const [isButtonHoveredX1, setIsButtonHoveredX1] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [currentComment, setCurrentComment] = useState(cardTexts[2]);
  const [currentName, setCurrentName] = useState(cardNames[2]);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleX3, setIsVisibleX3] = useState(false);
  const [isTitle1Visible, setIsTitle1Visible] = useState(false);
  const [isTitle2Visible, setIsTitle2Visible] = useState(false);
  const [isTitle3Visible, setIsTitle3Visible] = useState(false);
  const [isDescVisible, setIsDescVisible] = useState(false);
  const [isDiscountTextVisible, setIsDiscountTextVisible] = useState(false);
  const [isDiscountPercentVisible, setIsDiscountPercentVisible] = useState(false);
  const [isVisibleCard1, setIsVisibleCard1] = useState(false);
  const [isVisibleCard2, setIsVisibleCard2] = useState(false);
  const [isVisibleCard3, setIsVisibleCard3] = useState(false);
  const [isVisibleCard4, setIsVisibleCard4] = useState(false);
  const [isVisibleCard5, setIsVisibleCard5] = useState(false);
  const [isVisibleX1, setIsVisibleX1] = useState(false);
  const [isVisibleX2, setIsVisibleX2] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const buttonStyle = (isHovered) => ({
    position: 'absolute',
    top: '620px',
    right: '65px',
    width: '275px',
    height: '76px',
    background: isHovered ? '#2A9D8F' : '#1F7A8C',
    color: 'white',
    fontFamily: 'El Messiri',
    fontWeight: 600,
    fontSize: '34px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s ease, box-shadow 0.3s ease',
    boxShadow: isHovered ? '0 2px 5px rgba(0,0,0,0.1)' : 'none'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisibleX3(true);
    }, 500); // Delay of 500ms
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timerX1 = setTimeout(() => {
      setIsVisibleX1(true);
    }, 700); // Delay for Men's Scrubs
    const timerX2 = setTimeout(() => {
      setIsVisibleX2(true);
    }, 900); // Delay for Medical Tools
    return () => {
      clearTimeout(timerX1);
      clearTimeout(timerX2);
    };
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsTitle1Visible(true), 2000);
    const timer2 = setTimeout(() => setIsTitle2Visible(true), 2500);
    const timer3 = setTimeout(() => setIsTitle3Visible(true), 3000);
    const timerDesc = setTimeout(() => setIsDescVisible(true), 3500);
    const timerDiscountText = setTimeout(() => setIsDiscountTextVisible(true), 4000);
    const timerDiscountPercent = setTimeout(() => setIsDiscountPercentVisible(true), 4500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerDesc);
      clearTimeout(timerDiscountText);
      clearTimeout(timerDiscountPercent);
    };
  }, []);

  useEffect(() => {
    if (hoveredCardIndex !== null) {
      setCurrentComment(cardTexts[hoveredCardIndex]);
      setCurrentName(cardNames[hoveredCardIndex]);
    } else {
      setCurrentComment(cardTexts[2]);
      setCurrentName(cardNames[2]);
    }
  }, [hoveredCardIndex, cardTexts, cardNames]);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisibleCard1(true), 1000);
    const timer2 = setTimeout(() => setIsVisibleCard2(true), 1200);
    const timer3 = setTimeout(() => setIsVisibleCard3(true), 1400);
    const timer4 = setTimeout(() => setIsVisibleCard4(true), 1600);
    const timer5 = setTimeout(() => setIsVisibleCard5(true), 1800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '4300px', backgroundColor: '#FBFBFB' }}>
      {/* Header Section */}
      <img
        src="/image/Header.png"
        alt="Header"
        style={{
          width: 'calc(100vw - 32px)',
          height: '879px',
          position: 'absolute',
          top: '16px',
          left: '16px',
          transform: 'scaleX(-1)',
          opacity: 1,
          borderRadius: '10px'
        }}
      />
      <img
        src="/image/cont1.png"
        alt="Cont1"
        style={{
          width: '235px',
          height: '282px',
          position: 'absolute',
          top: '500px',
          left: '165px',
          transform: 'rotate(0deg)',
          opacity: 1,
          borderRadius: '20px'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '500px',
          left: '165px',
          width: '235px',
          height: '282px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20px'
        }}
      >
        <div
          style={{
            fontFamily: 'El Messiri',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '150%',
            textAlign: 'center',
            color: 'white',
            direction: 'rtl',
            marginBottom: '10px',
            opacity: isDiscountTextVisible ? 1 : 0,
            transform: isDiscountTextVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease, transform 1s ease'
          }}
        >
          خصم خاص على جميع الإسكرابات لا تفوّتوا الفرصة
        </div>
        <div
          style={{
            fontFamily: 'El Messiri',
            fontWeight: 700,
            fontSize: '64px',
            lineHeight: '150%',
            textAlign: 'center',
            color: 'white',
            opacity: isDiscountPercentVisible ? 1 : 0,
            transform: isDiscountPercentVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease, transform 1s ease'
          }}
        >
          30%
        </div>
      </div>
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
        }}>رونق سكربات طبية </h2>
        <h2 style={{
          fontFamily: 'El Messiri',
          fontWeight: 700,
          fontSize: '64px',
          lineHeight: '1%',
          letterSpacing: '0%',
          textAlign: 'right',
          color: '#FFFFFF',
          marginRight: '20px',
          paddingTop: '0px',
          opacity: isTitle2Visible ? 1 : 0,
          transform: isTitle2Visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1s ease, transform 1s ease'
        }}>تجمع بين الراحة </h2>
        <h2 style={{
          fontFamily: 'El Messiri',
          fontWeight: 700,
          fontSize: '64px',
          lineHeight: '1%',
          letterSpacing: '0%',
          textAlign: 'right',
          color: '#FFFFFF',
          marginRight: '20px',
          paddingTop: '40px',
          opacity: isTitle3Visible ? 1 : 0,
          transform: isTitle3Visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1s ease, transform 1s ease'
        }}>والأناقة</h2>
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
        <p style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '24px', lineHeight: '150%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginTop: '250px', marginBottom: '0px', wordSpacing: '1px' }}>سكربات طبية بجودة عالية وتصاميم عملية تناسب ساعات </p>
        <p style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '24px', lineHeight: '150%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginTop: '0px', wordSpacing: '5px' }}> العمل الطويل.راحة، متانة، ومقاسات تناسب الجميع  </p>
      </div>
      <Link to="/women" style={{ textDecoration: 'none' }}>
        <button
          style={buttonStyle(isHovered)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span style={{
            display: 'inline-block',
            transition: 'transform 0.3s ease, font-size 0.3s ease',
            transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
            fontSize: isHovered ? '36px' : '34px'
          }}>
            تسوق الأن
          </span>
        </button>
      </Link>
      <div style={{
        position: 'absolute',
        top: '53px',
        left: '0px',
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        alignItems: 'center'
      }}>
        <div onClick={() => setShowLoginModal(true)} style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(251, 251, 251, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '90px', cursor: 'pointer' }}>
          <img src="/image/icon2.png" alt="Icon 2" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
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
        <Link to="/medical-tools" style={{ color: '#FFFFFF', textDecoration: 'none' }}>أدوات طبية</Link>
        <Link to="/women" style={{ color: '#FFFFFF', textDecoration: 'none' }}>نسائي</Link>
        <Link to="/men" style={{ color: '#FFFFFF', textDecoration: 'none' }}>رجالي</Link>
        <span>الرئيسية </span>
      </div>

      {/* ================== Best Sellers Section ================== */}
      <div style={{ position: 'absolute', width: '100%', height: '1100px', top: '995px' }}>

        {/* Title */}
        <div style={{ position: 'absolute', top: '-30px', right: '85px' }}>
          <h2
            style={{
              fontFamily: 'El Messiri',
              fontWeight: 700,
              fontSize: '56px',
              lineHeight: '84px',
              marginRight: '59px',


            }}
          >
            الأكثر مبيعًا
          </h2>
        </div>

        {/* Subtitle */}
        <div style={{ position: 'absolute', top: '56px', right: '85px' }}>
          <p
            style={{
              fontFamily: 'El Messiri',
              fontWeight: 500,
              fontSize: '32px',
              lineHeight: '150%',
              color: '#1B4B66',
              marginRight: '59px',
              direction: 'rtl',

            }}
          >
            اختيارات الأطباء والممارسين الصحيين
          </p>
        </div>

        {/* More Products Text */}
        <div style={{ position: 'absolute', top: '50px', left: '50px', marginTop: '-50px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              color: '#1B4B66',
              fontFamily: 'El Messiri',
              fontWeight: 500,
              fontSize: '32px',
              lineHeight: '150%',
              letterSpacing: '0%',
              textAlign: 'center',
              marginTop: '50px',
              marginLeft: '70px'
            }}
          >
            <img src='/image/sahm.png' alt="Arrow" style={{ width: '20px', height: '20px' }} />
            المزيد من المنتجات
          </div>
        </div>

        {/* Left Arrow */}
        <div
          style={{
            position: 'absolute',
            top: '180px',
            left: '50%',
            transform: 'translateX(-50%) translateX(-500px)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#E5E7EB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: currentIndex > 0 ? 'pointer' : 'not-allowed',
            opacity: currentIndex > 0 ? 1 : 0.5
          }}
          onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
        >
          <img src='/image/sahmcard.png' alt="Left Arrow" style={{ width: '20px', height: '20px' }} />
        </div>

        {/* Right Arrow */}
        <div
          style={{
            position: 'absolute',
            top: '180px',
            left: '50%',
            transform: 'translateX(-50%) translateX(500px)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#E5E7EB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: currentIndex + cardsPerView < products.length ? 'pointer' : 'not-allowed',
            opacity: currentIndex + cardsPerView < products.length ? 1 : 0.5
          }}
          onClick={() => currentIndex + cardsPerView < products.length && setCurrentIndex(currentIndex + 1)}
        >
          <img src='/image/sahmcard.png' alt="Right Arrow" style={{ width: '20px', height: '20px' }} />
        </div>

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
          {products.slice(currentIndex, currentIndex + cardsPerView).map((img, index) => (
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
                  src={img}
                  alt="product"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                {/* Left Arrow for first card */}
                {index === 0 && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '1px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: '#E5E7EB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: currentIndex > 0 ? 'pointer' : 'not-allowed',
                      opacity: currentIndex > 0 ? 1 : 0.5
                    }}
                    onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
                  >
                    <img src='/image/sahmcard.png' alt="sahmcard.png" />
                  </div>
                )}

                {/* Right Arrow for last card */}
                {index === cardsPerView - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      right: '1px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: '#E5E7EB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: currentIndex + cardsPerView < products.length ? 'pointer' : 'not-allowed',
                      opacity: currentIndex + cardsPerView < products.length ? 1 : 0.5
                    }}
                    onClick={() => currentIndex + cardsPerView < products.length && setCurrentIndex(currentIndex + 1)}
                  >
                    <img src='/image/sahmcard11.png' alt="sahmcard11.png" />
                  </div>
                )}
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
                      gap: '5px'
                    }}
                  >
                    {['#000000', '#7B1113', '#BDBDBD', '#0D47A1'].map((c, i) => (
                      <span
                        key={i}
                        style={{
                          width: '23px',
                          height: '23px',
                          borderRadius: '50%',
                          backgroundColor: c,
                          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
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
                    250
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
                      borderRadius: '20px',
                      padding: '7px 16px',
                      fontSize: '17px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      width: '112px',
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


      {/* Middle Image Section */}
      <img
        src={images[currentImageIndex]}
        alt="Middle"
        style={{
          position: 'absolute',
          top: '1800px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1264px',
          height: '719px',
          borderRadius: '8px'

        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '1800px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1264px',
          height: '719px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          pointerEvents: 'none'
        }}
      >
        <p
          style={{
            fontFamily: 'El Messiri',
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '140%',
            letterSpacing: '0%',
            textAlign: 'right',
            color: 'white',
            direction: 'rtl',
            margin: 0,
            padding: '0px 20px 10px 170px'

          }}
          dangerouslySetInnerHTML={{ __html: texts[currentImageIndex] }}
        />
      </div>

      {/* New Images Section */}
      <div style={{
        position: 'absolute',
        top: '2790px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'row',
        gap: '32px'
      }}>
        <Link to="/women" style={{ textDecoration: 'none' }}>
          <div
            style={{
              width: '405px',
              height: '570px',
              borderRadius: '10px',
              backgroundImage: 'url(/image/x3.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}
          >
            <div
              style={{
                fontFamily: 'El Messiri',
                fontWeight: 600,
                fontStyle: 'SemiBold',
                fontSize: '32px',
                lineHeight: '150%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: 'white',
                direction: 'rtl',
                paddingBottom: '20px',
                opacity: isVisibleX3 ? 1 : 0,
                transform: isVisibleX3 ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 1s ease, transform 1s ease',

              }}
            >
              سكربات نسائي
            </div>
            <button
              style={{
                width: '187px',
                height: '50px',
                borderRadius: '10px',
                backgroundColor: isButtonHovered ? '#D1D5E2' : '#E1E5F2',
                color: '#000',
                fontFamily: 'Cairo',
                fontWeight: 600,
                fontStyle: 'SemiBold',
                fontSize: '24px',
                leadingTrim: 'NONE',
                lineHeight: '150%',
                letterSpacing: '0%',
                border: 'none',
                cursor: 'pointer',
                opacity: isVisibleX3 ? 1 : 0,
                padding: '0',
                marginBottom: '35px',
                transition: 'background-color 0.3s ease, opacity 1s ease 0.5s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margintop: '4px'

              }}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              تسوقي الأن
            </button>
          </div>
        </Link>
        <Link to="/medical-tools" style={{ textDecoration: 'none' }}>
          <div
            style={{
              width: '405px',
              height: '570px',
              borderRadius: '10px',
              backgroundImage: 'url(/image/x2.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginTop: '50px'
            }}
          >
            <div
              style={{
                fontFamily: 'El Messiri',
                fontWeight: 600,
                fontStyle: 'SemiBold',
                fontSize: '32px',
                lineHeight: '150%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: 'white',
                direction: 'rtl',
                paddingBottom: '20px',
                opacity: isVisibleX2 ? 1 : 0,
                transform: isVisibleX2 ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 1s ease, transform 1s ease',

              }}
            >
              أدوات طبية
            </div>
            <button
              style={{
                width: '187px',
                height: '50px',
                borderRadius: '10px',
                backgroundColor: isButtonHoveredX2 ? '#D1D5E2' : '#E1E5F2',
                color: '#000',
                fontFamily: 'Cairo',
                fontWeight: 600,
                fontStyle: 'SemiBold',
                fontSize: '24px',
                leadingTrim: 'NONE',
                lineHeight: '150%',
                letterSpacing: '0%',
                border: 'none',
                cursor: 'pointer',
                opacity: isVisibleX2 ? 1 : 0,
                padding: '0',
                marginBottom: '35px',
                transition: 'background-color 0.3s ease, opacity 1s ease 0.5s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={() => setIsButtonHoveredX2(true)}
              onMouseLeave={() => setIsButtonHoveredX2(false)}
            >
              تسوق الان
            </button>
          </div>
        </Link>
        <Link to="/men" style={{ textDecoration: 'none' }}>
          <div
            style={{
              width: '405px',
              height: '570px',
              borderRadius: '10px',
              backgroundImage: 'url(/image/x1.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginTop: '4px'
            }}
          >
            <div
              style={{
                fontFamily: 'El Messiri',
                fontWeight: 600,
                fontStyle: 'SemiBold',
                fontSize: '32px',
                lineHeight: '150%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: 'white',
                direction: 'rtl',
                paddingBottom: '20px',
                opacity: isVisibleX1 ? 1 : 0,
                transform: isVisibleX1 ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 1s ease, transform 1s ease',

              }}
            >
              سكربات رجالي

            </div>
            <button
              style={{
                width: '187px',
                height: '50px',
                borderRadius: '10px',
                backgroundColor: isButtonHoveredX1 ? '#D1D5E2' : '#E1E5F2',
                color: '#000',
                fontFamily: 'Cairo',
                fontWeight: 600,
                fontStyle: 'SemiBold',
                fontSize: '24px',
                leadingTrim: 'NONE',
                lineHeight: '150%',
                letterSpacing: '0%',
                border: 'none',
                cursor: 'pointer',
                opacity: isVisibleX1 ? 1 : 0,
                padding: '0',
                marginBottom: '35px',
                transition: 'background-color 0.3s ease, opacity 1s ease 0.5s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={() => setIsButtonHoveredX1(true)}
              onMouseLeave={() => setIsButtonHoveredX1(false)}
            >
              تسوق الان
            </button>
          </div>
        </Link>
      </div>

      {/* New Section */}
      <div className="new-section" style={{
        position: 'absolute',
        top: '3580px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '640px',
        backgroundColor: '#C1C1C1',
        opacity: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          fontFamily: 'El Messiri',
          fontWeight: 700,
          fontSize: '55px',
          lineHeight: '150%',
          letterSpacing: '0%',
          textAlign: 'right',
          direction: 'rtl',
          marginTop: '-510px',
          color: '#022B3A'
        }}>
          ثقة عملائنا
        </div>
        {/* Empty Cards */}
        <div
          style={{
            position: 'absolute',
            top: '131px',
            left: '40px',
            width: '276px',
            height: '383.3999938964844px',
            backgroundColor: '#FBFBFB',
            borderRadius: '10.8px',
            opacity: isVisibleCard1 ? 0.5 : 0,
            transform: isVisibleCard1 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease, transform 1s ease'
          }}
          onMouseEnter={() => setHoveredCardIndex(0)}
          onMouseLeave={() => setHoveredCardIndex(null)}
        >
          <img
            src="/image/Vector.png"
            alt="Vector"
            style={{
              position: 'absolute',
              top: '45px',
              left: '20%',
              transform: 'translateX(-50%) rotate(0deg)',
              width: '67.5px',
              height: '46.58699417114258px',
              opacity: 1
            }}
          />
          <div style={{
            position: 'absolute',
            top: '40%',
            transform: 'translateY(-50%)',
            right: '20px',
            width: 'calc(100% - 40px)',
            fontFamily: 'Cairo',
            fontWeight: 500,
            fontSize: '24.3px',
            lineHeight: '32px',
            letterSpacing: '-0.63px',
            textAlign: 'right',
            direction: 'rtl'
          }}>
            “مقاسه مظبوط والتفصيل عملي. واضح إن التصميم معمول لناس شغالة فعلًا.”
          </div>
          <div style={{
            position: 'absolute',
            top: '75%',
            transform: 'translateY(-50%)',
            right: '20px',
            width: 'calc(100% - 40px)',
            fontFamily: 'Cairo',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '28px',
            letterSpacing: '0px',
            textAlign: 'right',
            direction: 'rtl',
            opacity: 1,
            color: '#1B4B66'
          }}>
            {cardNames[0]}
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '180px',
            left: '336px',
            width: '276px',
            height: '383.3999938964844px',
            backgroundColor: '#FBFBFB',
            borderRadius: '10.8px',
            opacity: isVisibleCard2 ? 0.5 : 0,
            transform: isVisibleCard2 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease, transform 1s ease'
          }}
          onMouseEnter={() => setHoveredCardIndex(1)}
          onMouseLeave={() => setHoveredCardIndex(null)}
        >
          <img
            src="/image/Vector.png"
            alt="Vector"
            style={{
              position: 'absolute',
              top: '45px',
              left: '20%',
              transform: 'translateX(-50%) rotate(0deg)',
              width: '67.5px',
              height: '46.58699417114258px',
              opacity: 1
            }}
          />
          <div style={{
            position: 'absolute',
            top: '40%',
            transform: 'translateY(-50%)',
            right: '20px',
            width: 'calc(100% - 40px)',
            fontFamily: 'Cairo',
            fontWeight: 500,
            fontSize: '24.3px',
            lineHeight: '32px',
            letterSpacing: '-0.63px',
            textAlign: 'right',
            direction: 'rtl'
          }}>
            مريح وسهل التنظيف، مثالي للعمل اليومي.
          </div>
          <div style={{
            position: 'absolute',
            top: '85%',
            transform: 'translateY(-50%)',
            right: '20px',
            width: 'calc(100% - 40px)',
            fontFamily: 'Cairo',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '28px',
            letterSpacing: '0px',
            textAlign: 'right',
            direction: 'rtl',
            opacity: 1,
            color: '#1B4B66'
          }}>
            {cardNames[1]}
          </div>
        </div>
        <div style={{
          position: 'absolute',
          top: '208px',
          left: '632px',
          width: '276px',
          height: '383.3999938964844px',
          backgroundColor: '#FBFBFB',
          borderRadius: '10.8px',
          opacity: 1
        }}>
          <img
            src="/image/Vector.png"
            alt="Vector"
            style={{
              position: 'absolute',
              top: '45px',
              left: '20%',
              transform: 'translateX(-50%) rotate(0deg)',
              width: '67.5px',
              height: '46.58699417114258px',
              opacity: 1
            }}
          />
          <div style={{
            position: 'absolute',
            top: '40%',
            transform: hoveredCardIndex !== null ? 'translateY(-50%) translateY(0)' : 'translateY(-50%) translateY(20px)',
            right: '20px',
            width: 'calc(100% - 40px)',
            fontFamily: 'Cairo',
            fontWeight: 500,
            fontSize: '24.3px',
            lineHeight: '32px',
            letterSpacing: '-0.63px',
            textAlign: 'right',
            direction: 'rtl',
            opacity: 1,
            transition: 'transform 1s ease'
          }}>
            {currentComment}
          </div>
          <div style={{
            position: 'absolute',
            top: '85%',
            transform: hoveredCardIndex !== null ? 'translateY(-50%) translateY(0)' : 'translateY(-50%) translateY(20px)',
            right: '20px',
            width: 'calc(100% - 40px)',
            fontFamily: 'Cairo',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '28px',
            letterSpacing: '0px',
            textAlign: 'right',
            direction: 'rtl',
            opacity: 1,
            transition: 'transform 1s ease',
            color: '#1B4B66'
          }}>
            {currentName}
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '180px',
            left: '928px',
            width: '276px',
            height: '383.3999938964844px',
            backgroundColor: '#FBFBFB',
            borderRadius: '10.8px',
            opacity: isVisibleCard4 ? 0.5 : 0,
            transform: isVisibleCard4 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease, transform 1s ease'
          }}
          onMouseEnter={() => setHoveredCardIndex(3)}
          onMouseLeave={() => setHoveredCardIndex(null)}
        >
          <img
            src="/image/Vector.png"
            alt="Vector"
            style={{
              position: 'absolute',
              top: '45px',
              left: '20%',
              transform: 'translateX(-50%) rotate(0deg)',
              width: '67.5px',
              height: '46.58699417114258px',
              opacity: 1
            }}
          />
          <div style={{
            position: 'absolute',
            top: '45%',
            transform: 'translateY(-50%)',
            right: '20px',
            width: 'calc(100% - 40px)',
            fontFamily: 'Cairo',
            fontWeight: 500,
            fontSize: '24.3px',
            lineHeight: '32px',
            letterSpacing: '-0.63px',
            textAlign: 'right',
            direction: 'rtl'
          }}>
            الألوان متنوعة والمقاسات مناسبة للجميع.
          </div>
          <div style={{
            position: 'absolute',
            top: '75%',
            transform: 'translateY(-50%)',
            right: '20px',
            width: 'calc(100% - 40px)',
            fontFamily: 'Cairo',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '28px',
            letterSpacing: '0px',
            textAlign: 'right',
            direction: 'rtl',
            opacity: 1,
            color: '#1B4B66'
          }}>
            {cardNames[3]}
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '140px',
            left: '1224px',
            width: '276px',
            height: '383.3999938964844px',
            backgroundColor: '#FBFBFB',
            borderRadius: '10.8px',
            opacity: isVisibleCard5 ? 0.5 : 0,
            transform: isVisibleCard5 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease, transform 1s ease'
          }}
          onMouseEnter={() => {
            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = setTimeout(() => setHoveredCardIndex(4), 500);
          }}
          onMouseLeave={() => {
            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = setTimeout(() => setHoveredCardIndex(null), 500);
          }}
        >
          <img
            src="/image/Vector.png"
            alt="Vector"
            style={{
              position: 'absolute',
              top: '45px',
              left: '20%',
              transform: 'translateX(-50%) rotate(0deg)',
              width: '67.5px',
              height: '46.58699417114258px',
              opacity: 1
            }}
          />
          <div style={{
            position: 'absolute',
            top: '45%',
            transform: 'translateY(-50%)',
            right: '20px',
            width: 'calc(100% - 40px)',
            fontFamily: 'Cairo',
            fontWeight: 500,
            fontSize: '24.3px',
            lineHeight: '32px',
            letterSpacing: '-0.63px',
            textAlign: 'right',
            direction: 'rtl'
          }}>
            يمنح شعور بالثقة والاحترافية في العمل.
          </div>
          <div style={{
            position: 'absolute',
            top: '75%',
            transform: 'translateY(-50%)',
            right: '20px',
            width: 'calc(100% - 40px)',
            fontFamily: 'Cairo',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '28px',
            letterSpacing: '0px',
            textAlign: 'right',
            direction: 'rtl',
            opacity: 1,
            color: '#1B4B66'
          }}>
            {cardNames[4]}
          </div>
        </div>
      </div>

      {/* Footer Text Section */}
      <div style={{
        position: 'absolute',
        top: '2550px',
        left: '0',
        width: '100%',
        textAlign: 'center',
        padding: '60px 20px'
      }}>
        <h2 style={{
          fontFamily: 'El Messiri',
          fontWeight: 700,
          fontSize: '55px',
          lineHeight: '150%',
          color: '#1B4B66'
        }}>
          أساسياتك الطبية، بأسلوب عصري
        </h2>
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

export default Index;
