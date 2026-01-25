





import React, { useState, useEffect } from 'react';

function Index() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#FBFBFB' }}>
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
            marginBottom: '10px'
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
            color: 'white'
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
        <h2 style={{ fontFamily: 'El Messiri', fontWeight: 700, fontSize: '64px', lineHeight: '130%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginRight: '20px' }}>رونق سكربات طبية </h2>
        <h2 style={{ fontFamily: 'El Messiri', fontWeight: 700, fontSize: '64px', lineHeight: '1%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginRight: '20px', paddingTop: '0px' }}>تجمع بين الراحة </h2>
        <h2 style={{ fontFamily: 'El Messiri', fontWeight: 700, fontSize: '64px', lineHeight: '1%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginRight: '20px', paddingTop: '40px' }}>والأناقة</h2>
      </div>
      <div style={{ position: 'absolute', top: '240px', right: '65px', lineHeight: '100px' }}>
        <p style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '24px', lineHeight: '150%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginTop: '250px', marginBottom: '0px', wordSpacing: '1px' }}>سكربات طبية بجودة عالية وتصاميم عملية تناسب ساعات </p>
        <p style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '24px', lineHeight: '150%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginTop: '0px', wordSpacing: '5px' }}> العمل الطويل.راحة، متانة، ومقاسات تناسب الجميع  </p>
      </div>
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
        wordSpacing: '20px',
        color: '#FFFFFF'
      }}>
        <span>أدوات طبية</span>
        <span>نسائي </span>
        <span>رجالي</span>
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
              marginRight: '89px',


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
              marginRight: '89px',
              direction: 'rtl',

            }}
          >
            اختيارات الأطباء والممارسين الصحيين
          </p>
        </div>

        {/* More Products Button */}
        <div style={{ position: 'absolute', top: '50px', left: '50px', marginTop: '-50px' }}>
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              color: 'white',
              fontFamily: 'El Messiri',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '32px',
              leadingTrim: 'none',
              lineHeight: '150%',
              letterSpacing: '0%',
              textAlign: 'center',
              textDecoration: 'underline',
              textDecorationStyle: 'solid',
              textDecorationOffset: '0%',
              textDecorationThickness: '0%',
              textDecorationSkipInk: 'auto',
              padding: '16px 44px',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <img src='/image/sahm.png' alt="Arrow" style={{ width: '20px', height: '20px' }} />
            المزيد من المنتجات
          </p>
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
            left: '85px',
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


      {/* Middle Image Section */}
      <img
        src={images[currentImageIndex]}
        alt="Middle"
        style={{
          position: 'absolute',
          top: '1800px',
          left: '85px',
          width: '1264px',
          height: '719px',
          borderRadius: '8px'

        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '1800px',
          left: '85px',
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

      {/* Footer Text Section */}
      <div style={{
        position: 'absolute',
        top: '2545px',
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
    </div>
  );
}

export default Index;

