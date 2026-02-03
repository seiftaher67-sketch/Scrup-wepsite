import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ReturnPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ width: '100%', minHeight: 'auto', backgroundColor: '#FBFBFB' }}>
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
            <div style={{ marginTop: '130px', padding: '40px 50px 80px 50px', direction: 'rtl', backgroundColor: '#FBFBFB', minHeight: 'auto' }}>
                <div style={{
                    backgroundColor: '#022B3A',
                    borderRadius: '8px',
                    border: '2px solid #022B3A',
                    padding: '30px 25px',
                    lineHeight: '20px',
                    color: '#FFF',
                    fontFamily: 'Cairo',
                    fontSize: '24px',
                    fontWeight: 500,
                    fontStyle: 'normal',
                    leadingTrim: 'NONE',
                    letterSpacing: '0px',
                    marginBottom: '0px'
                }}>
                    <h3 style={{
                        fontFamily: 'Cairo',
                        fontWeight: 700,
                        fontStyle: 'Bold',
                        fontSize: '32px',
                        leadingTrim: 'NONE',
                        lineHeight: '100%',
                        letterSpacing: '0px',
                        color: '#FFFFFF',
                        marginTop: '0',
                        marginBottom: '20px',
                        textAlign: 'right'
                    }}>
                        سياسة الاستبدال والاسترجاع
                    </h3>
                    <ul style={{
                        listStyleType: 'none',
                        paddingRight: '0',
                        marginRight: '0'
                    }}>
                        <li style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px', textAlign: 'right' }}>
                            <img src="/image/coreect.png" alt="Check" style={{ width: '20px', height: '20px' }} />
                            <span>استلام العميل لطلب خاطئ. (يتم استرداد قيمة الطلب للعميل).</span>
                        </li>
                        <li style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px', textAlign: 'right' }}>
                            <img src="/image/coreect.png" alt="Check" style={{ width: '20px', height: '20px' }} />
                            <span>استلام العميل لطلب ناقص. (يتم تسليم العميل الطلب الناقص او استرداد قيمة المنتج الناقص).</span>
                        </li>
                        <li style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px', textAlign: 'right' }}>
                            <img src="/image/coreect.png" alt="Check" style={{ width: '20px', height: '20px' }} />
                            <span>يمكنك استبدال أو استرجاع منتجاتنا في حالة عدم مطابقتها للمواصفات المتفق عليها مع العميل ،<br /><span style={{ marginTop: '20px', display: 'block' }}> أو في حالة الخطأ في التسليم أو الخطأ في التنفيذ الغير ناتج عن إهمال العميل.</span></span>
                        </li>
                        <li style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px', textAlign: 'right' }}>
                            <img src="/image/coreect.png" alt="Check" style={{ width: '20px', height: '20px' }} />
                            <span>عند الاسترداد سيتم معالجة طلبك وتحويل المبلغ خلال 14 يوم عمل من تاريخ استلام المنتج</span>
                        </li>
                        <li style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px', textAlign: 'right' }}>
                            <img src="/image/coreect.png" alt="Check" style={{ width: '20px', height: '20px' }} />
                            <span>يجب ان يكون المنتج بحالته الاصلية وبجميع ملحقاتها.</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ReturnPolicy;
