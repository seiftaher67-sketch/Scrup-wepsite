import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Checkout.css';

export default function Checkout() {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
    const [selectedBrand, setSelectedBrand] = useState(null);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [cartItems] = useState([
        {
            id: 1,
            name: "سكراب ميديكال",
            size: "M",
            color: "اسود",
            quantity: 1,
            price: 250,
            image: "/image/girl1.jpg",
        },
        {
            id: 2,
            name: " سكراب ميديكال",
            size: "M",
            color: "اسود",
            quantity: 1,
            price: 250,
            image: "/image/girl1.jpg",
        },
    ]);

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 20;
    const total = subtotal + shipping;

    return (
        <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#FBFBFB', display: 'flex', flexDirection: 'column' }}>
            <Header showSearch={false} />

            {/* Main Content */}
            <div style={{ marginTop: '130px', padding: '10px 50px', direction: 'rtl', backgroundColor: '#FBFBFB', flex: '1', position: 'relative' }}>

                {/* Page Title - Moved to top */}
                <h1 style={{
                    fontFamily: 'El Messiri',
                    fontWeight: 400,
                    fontSize: '50px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#0F0F0F',
                    marginBottom: '10px',
                    marginTop: '0',
                    textAlign: 'right'
                }}>
                    الدفع
                </h1>

                <p style={{
                    fontFamily: 'El Messiri',
                    fontWeight: 400,
                    fontSize: '24px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#8a8a8a',
                    marginBottom: '-10px',
                    marginTop: '0',
                    paddingBottom: '-20px',
                    textAlign: 'right'
                }}>
                    اختر طريقة الدفع المناسبة لك
                </p>

                {/* Return to Cart Sentence */}
                <Link to="/purchase" style={{ textDecoration: 'none' }}>
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
                        marginBottom: '20px',
                        marginTop: '0',
                        cursor: 'pointer'
                    }}>
                        <span style={{ marginTop: '-90px' }}>العودة إلى سلة المشتريات</span>
                        <img src="/image/sahmcard11.png" alt="sahmcard11" style={{ width: '50px', height: '50px', marginLeft: '40px', transform: 'scaleX(-1)', marginTop: '-90px', }} />
                    </div>
                </Link>

                <div className="checkout-page">
                    {/* RIGHT SECTION */}
                    <div className="payment-section" style={{ width: '90%', marginRight: '-45px' }}>

                        <div className="payment-tabs" style={{ fontWeight: 'bold', fontFamily: 'cairo', fontSize: '35px' }} >
                            <div
                                className={`tab ${selectedPaymentMethod === 'card' ? 'active' : ''}`}
                                onClick={() => setSelectedPaymentMethod('card')}
                            >
                                البطاقات الائتمانية
                            </div>
                            <div
                                className={`tab ${selectedPaymentMethod === 'apple' ? 'active' : ''}`}
                                onClick={() => setSelectedPaymentMethod('apple')}
                            >
                                Apple pay
                            </div>
                        </div>

                        <div className="payment-card">

                            {selectedPaymentMethod === 'apple' ? (
                                // Apple Pay Button - Full Width
                                <div style={{ width: '100%', padding: '15px 0' }}>
                                    <button
                                        className="apple-pay-btn"
                                        style={{
                                            width: '100%',
                                            height: '50px',
                                            backgroundColor: '#000000',
                                            color: '#FFFFFF',
                                            borderRadius: '10px',
                                            border: 'none',
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px'
                                        }}
                                    >
                                        <img src="/image/apple.png" alt="Apple" style={{ width: '24px', height: '24px' }} />
                                        <span>Apple Pay </span>
                                    </button>
                                </div>
                            ) : (
                                // Credit Card Form
                                <>
                                    <div className="brands">
                                        <div
                                            className={`brand-btn ${selectedBrand === 'pay1' ? 'selected' : ''}`}
                                            onClick={() => setSelectedBrand('pay1')}
                                        >
                                            <img src="/image/pay2.png" alt="pay1" style={{ maxWidth: '100%', height: '80px', marginRight: '70px' }} />
                                        </div>
                                        <div
                                            className={`brand-btn ${selectedBrand === 'pay2' ? 'selected' : ''}`}
                                            onClick={() => setSelectedBrand('pay2')}
                                        >
                                            <img src="/image/pay4.png" alt="pay2" style={{ maxWidth: '100%', height: '80px', marginRight: '50px' }} />
                                        </div>
                                        <div
                                            className={`brand-btn ${selectedBrand === 'pay3' ? 'selected' : ''}`}
                                            onClick={() => setSelectedBrand('pay3')}
                                        >
                                            <img src="/image/pay3.png" alt="pay3" style={{ maxWidth: '100%', height: '80px', marginRight: '50px' }} />
                                        </div>
                                        <div
                                            className={`brand-btn ${selectedBrand === 'pay4' ? 'selected' : ''}`}
                                            onClick={() => setSelectedBrand('pay4')}
                                        >
                                            <img src="/image/pay1.png" alt="pay4" style={{ maxWidth: '100%', height: '80px', marginRight: '40px' }} />
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <input type="text" placeholder="رقم البطاقة" className="full-input" />
                                    </div>

                                    <div className="row-inputs">
                                        <input type="text" placeholder="CVV" />
                                        <input type="text" placeholder="موعد انتهاء الصلاحية" />
                                    </div>
                                </>
                            )}

                            <button className="pay-btn" style={{ fontFamily: 'El Messiri', fontWeight: 'bold', fontSize: '23px', marginTop: selectedPaymentMethod === 'card' ? '20px' : '0' }}>
                                {selectedPaymentMethod === 'card' ? 'ادفع الأن' : 'ادفع الآن'}
                            </button>

                        </div>
                    </div>

                    {/* LEFT SECTION */}
                    <div className="summary-section" style={{ width: '40%', marginLeft: '10px' }}>

                        <div className="order-card">

                            <h3 className="order-title" style={{ fontWeight: 'bold' }}>عناصر الطلب</h3>

                            <div className="item">
                                <img src="/image/woman2.jpg" alt="product" />
                                <div className="item-info">
                                    <div style={{ fontWeight: 'bold' }}>سكراب ميديكال</div>
                                    <div><span className="small">المقاس:</span> <span className="small-value">M</span></div>
                                    <div><span className="small">اللون:</span> <span className="small-value">اسود</span></div>
                                    <div><span className="small">الكمية:</span> <span className="small-value">1</span></div>
                                </div>
                                <div className="price">250 <img src="/image/ry.jpeg" alt="ريال" style={{ width: '20px', height: '20px', display: 'inline' }} /></div>
                            </div>

                            <div className="item">
                                <img src="/image/woman2.jpg" alt="product" />
                                <div className="item-info">
                                    <div style={{ fontWeight: 'bold' }}> سكراب ميديكال</div>
                                    <div><span className="small">المقاس:</span> <span className="small-value">M</span></div>
                                    <div><span className="small">اللون:</span> <span className="small-value">اسود</span></div>
                                    <div><span className="small">الكمية:</span> <span className="small-value">1</span></div>
                                </div>
                                <div className="price">250 <img src="/image/ry.jpeg" alt="ريال" style={{ width: '20px', height: '20px', display: 'inline' }} /></div>
                            </div>
                            <div className="item">
                                <img src="/image/woman2.jpg" alt="product" />
                                <div className="item-info">
                                    <div style={{ fontWeight: 'bold' }}> سكراب ميديكال</div>
                                    <div><span className="small">المقاس:</span> <span className="small-value">M</span></div>
                                    <div><span className="small">اللون:</span> <span className="small-value">اسود</span></div>
                                    <div><span className="small">الكمية:</span> <span className="small-value">1</span></div>
                                </div>
                                <div className="price">250 <img src="/image/ry.jpeg" alt="ريال" style={{ width: '20px', height: '20px', display: 'inline' }} /></div>
                            </div>

                            <h3 className="summary-title" style={{ fontWeight: 'bold' }}>ملخص الطلب</h3>

                            <div className="summary-row">
                                <span>مبلغ إجمالي</span>
                                <span>750 <img src="/image/ry.jpeg" alt="ريال" style={{ width: '20px', height: '20px', display: 'inline' }} /></span>
                            </div>

                            <div className="summary-row">
                                <span>مصاريف التوصيل</span>
                                <span>20 <img src="/image/ry.jpeg" alt="ريال" style={{ width: '20px', height: '20px', display: 'inline' }} /></span>
                            </div>

                            <div className="summary-row total">
                                <span>المبلغ كامل</span>
                                <span>770 <img src="/image/ry.jpeg" alt="ريال" style={{ width: '20px', height: '20px', display: 'inline' }} /></span>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
