





import React from 'react';

function Index() {
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
                    top: '53px',
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
                <p style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '24px', lineHeight: '150%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginTop: '250px', marginBottom: '0px',wordSpacing:'1px' }}>سكربات طبية بجودة عالية وتصاميم عملية تناسب ساعات </p>
                <p style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '24px', lineHeight: '150%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginTop: '0px',wordSpacing:'5px' }}> العمل الطويل.راحة، متانة، ومقاسات تناسب الجميع  </p>
            </div>
            <button></button>
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
                color: 'white',
                fontFamily: 'El Messiri',
                fontWeight: 400,
                fontSize: '24px',
                lineHeight: '150%',
                wordSpacing: '20px'
            }}>
                <span>أدوات طبية</span>
                <span>نسائي </span>
                <span>رجالي</span>
                <span>الرئيسية </span>
            </div>

            {/* Best Sellers Title */}
            <div style={{ position: 'absolute', top: '895px', right: '16px' }}>
                <h2 style={{ fontFamily: 'El Messiri', fontWeight: 700, fontSize: '55px', lineHeight: '150%', textAlign: 'right', marginRight: '50px' }}> الأكثر مبيعًا</h2>
                <p style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '32px', lineHeight: '150%', marginRight: '50px' }}>اختيارات الأطباء والممارسين الصحيين</p>
            </div>

            {/* More Products Button */}
            <div style={{ position: 'absolute', top: '950px', left: '100px' }}>
                <button style={{
                    backgroundColor: '#1B4B66',
                    color: 'white',
                    fontFamily: 'El Messiri',
                    fontWeight: 500,
                    fontSize: '20px',
                    padding: '15px 40px',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer'
                }}>
                    المزيد من المنتجات
                </button>
            </div>

            {/* Product Cards */}
            <div style={{
                position: 'absolute',
                top: '1100px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'row-reverse',
                gap: '30px',
                justifyContent: 'center',
                width: '100%',
                padding: '0 50px'
            }}>
                {/* Product 1 */}
                <div style={{
                    width: '280px',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}>
                    <img src="/image/product1.png" alt="Product 1" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                    <div style={{ padding: '20px', textAlign: 'right' }}>
                        <h3 style={{ fontFamily: 'El Messiri', fontWeight: 600, fontSize: '22px', marginBottom: '10px' }}>سكراب طبي رجالي</h3>
                        <p style={{ fontFamily: 'Cairo', fontWeight: 700, fontSize: '24px', color: '#1B4B66', marginBottom: '15px' }}>154 ر.س</p>
                        <button style={{
                            width: '100%',
                            backgroundColor: '#1B4B66',
                            color: 'white',
                            fontFamily: 'El Messiri',
                            fontWeight: 500,
                            fontSize: '18px',
                            padding: '12px',
                            borderRadius: '10px',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            أضف للسلة
                        </button>
                    </div>
                </div>

                {/* Product 2 */}
                <div style={{
                    width: '280px',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}>
                    <img src="/image/product2.png" alt="Product 2" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                    <div style={{ padding: '20px', textAlign: 'right' }}>
                        <h3 style={{ fontFamily: 'El Messiri', fontWeight: 600, fontSize: '22px', marginBottom: '10px' }}>سكراب طبي نسائي</h3>
                        <p style={{ fontFamily: 'Cairo', fontWeight: 700, fontSize: '24px', color: '#1B4B66', marginBottom: '15px' }}>154 ر.س</p>
                        <button style={{
                            width: '100%',
                            backgroundColor: '#1B4B66',
                            color: 'white',
                            fontFamily: 'El Messiri',
                            fontWeight: 500,
                            fontSize: '18px',
                            padding: '12px',
                            borderRadius: '10px',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            أضف للسلة
                        </button>
                    </div>
                </div>

                {/* Product 3 */}
                <div style={{
                    width: '280px',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}>
                    <img src="/image/product3.png" alt="Product 3" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                    <div style={{ padding: '20px', textAlign: 'right' }}>
                        <h3 style={{ fontFamily: 'El Messiri', fontWeight: 600, fontSize: '22px', marginBottom: '10px' }}>سكراب طبي رجالي</h3>
                        <p style={{ fontFamily: 'Cairo', fontWeight: 700, fontSize: '24px', color: '#1B4B66', marginBottom: '15px' }}>154 ر.س</p>
                        <button style={{
                            width: '100%',
                            backgroundColor: '#1B4B66',
                            color: 'white',
                            fontFamily: 'El Messiri',
                            fontWeight: 500,
                            fontSize: '18px',
                            padding: '12px',
                            borderRadius: '10px',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            أضف للسلة
                        </button>
                    </div>
                </div>

                {/* Product 4 */}
                <div style={{
                    width: '280px',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}>
                    <img src="/image/product4.png" alt="Product 4" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                    <div style={{ padding: '20px', textAlign: 'right' }}>
                        <h3 style={{ fontFamily: 'El Messiri', fontWeight: 600, fontSize: '22px', marginBottom: '10px' }}>سكراب طبي نسائي</h3>
                        <p style={{ fontFamily: 'Cairo', fontWeight: 700, fontSize: '24px', color: '#1B4B66', marginBottom: '15px' }}>154 ر.س</p>
                        <button style={{
                            width: '100%',
                            backgroundColor: '#1B4B66',
                            color: 'white',
                            fontFamily: 'El Messiri',
                            fontWeight: 500,
                            fontSize: '18px',
                            padding: '12px',
                            borderRadius: '10px',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            أضف للسلة
                        </button>
                    </div>
                </div>
            </div>

            {/* Team Banner Section */}
            <div style={{
                position: 'absolute',
                top: '1650px',
                left: '16px',
                width: 'calc(100vw - 32px)',
                height: '500px',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundImage: 'url(/image/team-banner.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <div style={{
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px'
                }}>
                    <p style={{
                        fontFamily: 'El Messiri',
                        fontWeight: 500,
                        fontSize: '28px',
                        color: 'white',
                        lineHeight: '180%',
                        maxWidth: '800px',
                        marginBottom: '20px'
                    }}>
                        لأننا نقدّم سكرابات طبية إلى خُطط...
                    </p>
                    <p style={{
                        fontFamily: 'Cairo',
                        fontWeight: 400,
                        fontSize: '22px',
                        color: 'white',
                        lineHeight: '180%',
                        maxWidth: '700px'
                    }}>
                        منتجاتنا المميزة تجمع بين الراحة والتصميم العصري
                    </p>
                </div>
            </div>

            {/* Footer Text Section */}
            <div style={{
                position: 'absolute',
                top: '2200px',
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

