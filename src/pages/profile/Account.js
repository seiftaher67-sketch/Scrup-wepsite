import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileSidebar from '../../components/ProfileSidebar';
import Header from '../../components/Header';

export default function Account() {
  const [activeTab, setActiveTab] = useState('account');
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />


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

          <h1 style={{ fontFamily: 'El Messiri', fontSize: '55px', marginTop: '-30px', fontWeight: 'bold', color: '#022B3A' }}>حسابي</h1>
          <p style={{ fontSize: '32px', color: '#3F4254', marginTop: '-10px', marginBottom: '40px' }}>
            عرض وتحديث معلومات حسابك وبيانات الاتصال
          </p>


          <div className="account-layout">

            {/* ===== RIGHT ===== */}
            <ProfileSidebar activePage="account" />

            {/* ===== LEFT ===== */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginLeft: '-200px' }}>
              {activeTab === 'account' && (
                <>
                  <div className="card">
                    <h3 style={{ marginTop: '-20px', paddingTop: '20px', fontWeight: 'bold', marginBottom: '30px' }}>المعلومات الشخصية</h3>
                    <div className="form-grid">
                      <div>
                        <label>الاسم الأول</label>
                        <input defaultValue="أحمد" />
                      </div>
                      <div>
                        <label>اسم العائلة</label>
                        <input defaultValue="يحي" />
                      </div>
                      <div>
                        <label>النوع</label>
                        <select><option>ذكر</option></select>
                      </div>
                      <div>
                        <label>تاريخ الميلاد</label>
                        <input type="text" placeholder="يوم / شهر / سنة" />
                      </div>
                    </div>
                    <button className="save-btn">حفظ التغييرات</button>
                  </div>

                  <div className="card">
                    <h3 style={{ marginTop: '-20px', paddingTop: '20px', fontWeight: 'bold', marginBottom: '30px' }}>معلومات التواصل</h3>
                    <div className="form-grid">
                      <div >
                        <label>البريد الإلكتروني</label>
                        <input defaultValue="seif@example.com" style={{ width: '200%', outline: 'none' }} />

                      </div>
                      <br></br>
                      <div>
                        <label>رقم الهاتف</label>
                        <input style={{ width: '200%', outline: 'none' }} />
                      </div>
                    </div>
                    <button className="save-btn">حفظ التغييرات</button>
                  </div>
                </>
              )}
              {(activeTab === 'orders' || activeTab === 'addresses' || activeTab === 'payments') && (
                <>
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
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
