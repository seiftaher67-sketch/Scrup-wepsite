import React from 'react';
import { Link } from 'react-router-dom';

function WashingGuide() {
    return (
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#FBFBFB' }}>
            {/* Top Header Bar */}
            <div style={{
                position: 'sticky',
                top: '0',
                zIndex: 10,
                backgroundColor: '#FBFBFB',
                padding: '20px 0',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
                <Link to="/" style={{ cursor: 'pointer' }}>
                    <img
                        src="/image/LOGOS.png"
                        alt="Logo"
                        style={{
                            width: '120px',
                            height: 'auto',
                            position: 'absolute',
                            top: '0px',
                            right: '30px',
                            borderRadius: '10px',
                            filter: 'brightness(1.1) contrast(1.15)'
                        }}
                    />
                </Link>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '30px',
                    alignItems: 'center',
                    fontFamily: 'El Messiri',
                    fontWeight: 600,
                    fontSize: '30px',
                    lineHeight: '150%',
                    wordSpacing: '5px',
                    color: '#022B3A',
                    marginLeft: '800px'
                }}>
                    <Link to="/medical-tools" style={{ color: '#022B3A', textDecoration: 'none' }}>أدوات طبية</Link>
                    <Link to="/women" style={{ color: '#022B3A', textDecoration: 'none' }}>نسائي</Link>
                    <Link to="/men" style={{ color: '#022B3A', textDecoration: 'none' }}>رجالي</Link>
                    <Link to="/" style={{ color: '#022B3A', textDecoration: 'none' }}>الرئيسية</Link>
                </div>
            </div>

            {/* Icons and Search */}
            <div style={{
                position: 'fixed',
                top: '20px',
                left: '0px',
                display: 'flex',
                flexDirection: 'row',
                gap: '15px',
                alignItems: 'center',
                zIndex: 10
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
                position: 'fixed',
                top: '105px',
                left: '0',
                right: '0',
                height: '4px',
                backgroundColor: '#BFBFBF',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                zIndex: 11
            }}></div>

            {/* Main Content */}
            <div style={{ marginTop: '130px', padding: '40px 50px', direction: 'rtl', backgroundColor: '#FBFBFB', minHeight: 'calc(100vh - 130px)' }}>


                <div style={{
                    backgroundColor: '#022B3A',
                    borderRadius: '8px',
                    border: '2px solid #022B3A',
                    padding: '20px 30px',
                    lineHeight: '1.8',
                    color: '#FFF',
                    fontFamily: 'Cairo',
                    fontSize: '18px',
                    marginBottom: '10px'
                }}>
                    <h3 style={{
                        fontFamily: 'Cairo',
                        fontWeight: 700,
                        fontSize: '32px',
                        lineHeight: '100%',
                        letterSpacing: '0px',
                        color: '#FFFFFF',
                        marginTop: '0',
                        marginBottom: '20px',
                        textAlign: 'right'
                    }}>
                        تعليمات الغسيل والعناية
                    </h3>
                    <ul style={{
                        listStyleType: 'none',
                        paddingRight: '0',
                        marginRight: '0'
                    }}>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px', textAlign: 'left' }}>
                            <img src="/image/coreect.png" alt="Check" style={{ width: '20px', height: '20px' }} />
                            <span>استخدم الماء البارد في أول مرة</span>
                        </li>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px', textAlign: 'left' }}>
                            <img src="/image/coreect.png" alt="Check" style={{ width: '20px', height: '20px' }} />
                            <span>اغسل بقلابة "أو" درجة حرارة</span>
                        </li>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px', textAlign: 'left' }}>
                            <img src="/image/coreect.png" alt="Check" style={{ width: '20px', height: '20px' }} />
                            <span>استخدم منظف خاص برين الطبي</span>
                        </li>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px', textAlign: 'left' }}>
                            <img src="/image/coreect.png" alt="Check" style={{ width: '20px', height: '20px' }} />
                            <span>لا تستخدم المبيضات</span>
                        </li>
                        <li style={{ marginBottom: '0', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px', textAlign: 'left' }}>
                            <img src="/image/coreect.png" alt="Check" style={{ width: '20px', height: '20px' }} />
                            <span>استخدم درجة حرارة 15-40°</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WashingGuide;
