import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Orders() {
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

            {/* ================= CONTENT ================= */}
            <div style={{ marginTop: '130px', background: '#f6f6f6', direction: 'rtl' }}>
                <style>{`
          * { box-sizing: border-box; font-family: Cairo, sans-serif; }

          .account-page {
            width: 1281px;
            margin: auto;
            padding: 30px 0 80px 0;
          }

          .account-layout {
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 30px;
            align-items: flex-start;
          }

          .card {
            background: #fff;
            border-radius: 14px;
            padding: 20px;
            padding-bottom: 30px;
            box-shadow: 0 1px 3px rgba(0,0,0,.05);
            width: 820px;
            height: auto;

              transform: translateX(-150px);
          }

          .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            width: 100%;

          }

          label {
            font-family: Cairo;
            font-weight: 400;
            font-style: normal;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0px;
            color: #555;
            margin-bottom: 6px;
            display: block;
          }

          input, select {
            width: 100%;
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #ddd;
             outline: none ;
          }

          input::placeholder {
            font-family: Cairo;
            font-weight: 400;
            font-style: normal;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0px;
            text-align: right;
            color: #0A0A0A;
          }

          .save-btn {
          width: 148px;
          height: 48px;
            margin-top: 15px;
            margin-bottom: 10px;
            background: #022B3A;
            color: #fff;
            border: none;
            padding: 10px 18px;
            border-radius: 10px;
            cursor: pointer;
            color: #F6F6F6 ;
            font-family: Cairo;
            font-weight: 700;
            font-style: Bold;
            font-size: 16px;
            leading-trim: NONE;
            line-height: 24px;
            letter-spacing: 0px;
            text-align: center;
          }

          .profile-card,
          .menu-card {
            background: #fff;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 1px 3px rgba(0,0,0,.05);
            width: 450px;
            margin-left: 50px;

          .profile-card {
            margin-bottom: 40px;
          }

          .profile-header {
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .avatar {
            width: 65px;
            height: 65px;
            border-radius: 50%;
            background: #0f3d3e;
            color: #F6F6F6;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 10px;

          }



          .username {
            font-family: Cairo;
            font-weight: 700;
            font-style: Bold;
            font-size: 24px;
            leading-trim: NONE;
            line-height: 28px;
            letter-spacing: 0px;
            text-align: right;
            color: #101828;
            margin-top: -10px;
          }

          .email {
          fontFamily: Cairo;
            font-size: 15px;
            color: #6A7282;
            font-weight: 400 ;
            leter-spacing: 0px;
            lineHeight: 20px;
            margin-top: 10px;
          }

          .progress-box {
            margin-top: 15px;
          }

          .progress-label {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            margin-bottom: 6px;
          }

          .progress-bar {
            height: 8px;
            background: #E4E7EC;
            border-radius: 20px;
            overflow: hidden;
            display: flex;
            justify-content: flex-end;
          }

          .progress-fill {
            width: 80%;
            height: 100%;
            background: #0f3d3e;
          }
            .menu-card{
            }

          .menu {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-left: 20px;
            margin-right:-50px;
            margin-top:-10px;
            gap: 12px;

          }

          .menu li {
            list-style: none;
            padding: 10px;
            border-radius: 8px;
            cursor: pointer;
            font-family: Cairo;
            font-weight: 400;
            font-style: Regular;
            font-size: 24px;
            leading-trim: NONE;
            line-height: 24px;
            letter-spacing: 0px;
            text-align: center;
            color: #4A5565;
          }

          .progress-percent {
            font-family: Arial;
            font-weight: 700;
            font-style: Bold;
            font-size: 16px;
            leading-trim: NONE;
            line-height: 20px;
            letter-spacing: 0px;
          }

          .progress-label-text {
            font-family: Cairo;
            font-weight: 400;
            font-style: Regular;
            font-size: 16px;
            leading-trim: NONE;
            line-height: 20px;
            letter-spacing: 0px;
            color: #4A5565;
          }

          .menu li.active {
            background: #a0c8c8;
            width: calc(100% + 20px);
            margin-left: -20px;
            padding-left: 30px;
            text-align: right;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
        `}</style>

                <div className="account-page">

                    <h1 style={{ fontFamily: 'El Messiri', fontSize: '55px', marginTop: '-30px' }}>طلباتي</h1>
                    <p style={{ fontSize: '32px', color: '#3F4254', marginTop: '-30px', marginBottom: '40px' }}>
                        تتبع، إرجاع، أو شراء الأشياء مرة أخرى
                    </p>

                    <div className="account-layout">

                        {/* ===== RIGHT ===== */}
                        <div>
                            <div className="profile-card">
                                <div className="profile-header">
                                    <div className="avatar">س  ط</div>
                                    <div>

                                        <div className="username">مرحبًا، سيف</div>
                                        <div className="email">seif@example.com</div>
                                    </div>
                                </div>

                                <div className="progress-box">
                                    <div className="progress-label">
                                        <span className="progress-label-text">اكتمال الملف الشخصي</span>
                                        <span className="progress-percent">80%</span>
                                    </div>
                                    <div className="progress-bar">
                                        <div className="progress-fill"></div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="menu-card">
                                <ul className="menu">
                                    <Link to="/account" style={{ textDecoration: 'none', color: 'inherit' }}><li> حسابي <img src="/image/k11.png" style={{ width: '29.114788055419922px', height: '33.33333206176758px', transform: 'rotate(0deg)', opacity: 1, position: 'relative', top: '2px', left: '-40px', borderWidth: '2px' }} /></li></Link>
                                    <li className="active"> الطلبات <img src="/image/k1.png" style={{ width: '29.114788055419922px', height: '33.33333206176758px', transform: 'rotate(0deg)', opacity: 1, position: 'relative', top: '8px', left: '-37px', borderWidth: '2px' }} /></li>
                                    <Link to="/resorts" style={{ textDecoration: 'none', color: 'inherit' }}><li> المرتجعات <img src="/image/k2.png" style={{ width: '29.114788055419922px', height: '33.33333206176758px', transform: 'rotate(0deg)', opacity: 1, position: 'relative', top: '10px', left: '-12px', borderWidth: '2px' }} /></li></Link>
                                    <li> العناوين <img src="/image/k3.png" style={{ width: '29.114788055419922px', height: '33.33333206176758px', transform: 'rotate(0deg)', opacity: 1, position: 'relative', top: '10px', left: '-36px', borderWidth: '2px' }} /></li>
                                    <li> المدفوعات <img src="/image/k4.png" style={{ width: '29.114788055419922px', height: '33.33333206176758px', transform: 'rotate(0deg)', opacity: 1, position: 'relative', top: '10px', left: '-10px', borderWidth: '2px' }} /></li>
                                </ul>
                            </div>
                            <br></br>
                            <button style={{ width: '453px', height: '60px', borderRadius: '14px', opacity: 1, backgroundColor: '#FFFFFF', color: '#4A5565', border: 'none', cursor: 'pointer', fontFamily: 'cairo', fontSize: '24px', fontWeight: '400', display: 'flex', alignItems: 'center', paddingRight: '20px', gap: '10px' }}> تسجيل الخروج<img src="/image/k5.png" style={{ width: '29px', height: '33px' }} /></button>
                        </div>

                        {/* ===== LEFT ===== */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginLeft: '-200px' }}>
                            <div className="card">
                                <h3 style={{ marginTop: ' -10px' }}>الطلبات الحالية</h3>
                                <div className="form-grid">
                                    <div>
                                        <label>رقم الطلب</label>
                                        <input defaultValue="#12345" />
                                    </div>
                                    <div>
                                        <label>تاريخ الطلب</label>
                                        <input defaultValue="2023-10-01" />
                                    </div>
                                    <div>
                                        <label>حالة الطلب</label>
                                        <select><option>قيد التنفيذ</option></select>
                                    </div>
                                    <div>
                                        <label>المبلغ الإجمالي</label>
                                        <input defaultValue="500 ريال" />
                                    </div>
                                </div>
                                <button className="save-btn">عرض التفاصيل</button>
                            </div>

                            <div className="card">
                                <h3 style={{ marginTop: ' -10px' }}>تاريخ الطلبات</h3>
                                <div className="form-grid">
                                    <div>
                                        <label>آخر طلب</label>
                                        <input defaultValue="#12344" />
                                    </div>
                                    <div>
                                        <label>تاريخ الاستلام</label>
                                        <input defaultValue="2023-09-15" />
                                    </div>
                                    <div>
                                        <label>الحالة</label>
                                        <select><option>مكتمل</option></select>
                                    </div>
                                    <div>
                                        <label>المبلغ</label>
                                        <input defaultValue="300 ريال" />
                                    </div>
                                </div>
                                <button className="save-btn">عرض الطلبات السابقة</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
