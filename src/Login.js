
import React, { useState } from "react";
import VerifyCode from './VerifyCode';

export default function Login() {
  const [showVerifyCode, setShowVerifyCode] = useState(false);

  const handleLogin = () => {
    // Add login logic here, e.g., validation and API call
    // For now, show verify code on click
    setShowVerifyCode(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;700;800&display=swap');
        * {
          box-sizing: border-box;
          font-family: "Cairo", sans-serif;
        }

        body {
          margin: 0;
        }

        .login-wrapper {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
        }

        .login-card {
          width: 800px;
          height: 950px;
          background: #ffffff;
          border-radius: 10px;
          padding: 70px 60px;
          direction: rtl;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        /* ====== TITLE ====== */
        .title {
          font-family: "El Messiri";
          font-weight: 800;
          font-size: 68px;
          text-align: center;
          color: #000;
          margin: 0;
        }

        .subtitle {
          font-size: 42px;
          text-align: center;
          color: #696969;
          margin-top: 20px;
          margin-bottom: 90px;
        }

        /* ====== FIELD ====== */
        .field {
          margin-bottom: 30px; /* تم تقليل المسافة هنا */
        }

        .field label {
          display: block;
          font-size: 34px;
          color: #000000;
          margin-bottom: 14px;
        }

        .field input {
          width: 100%;
          height: 82px;
          border: 1px solid #ddd;
          border-radius: 6px;
          padding: 0 18px;
          font-size: 28px;
          outline: none;
          direction: ltr;
          text-align: right;
        }

        .field input::placeholder {
          font-family: Cairo;
          font-weight: 400;
          font-style: normal;
          font-size: 30px;
          leading-trim: none;
          line-height: 100%;
          letter-spacing: 0%;
          text-align: right;
          color: #aaa;
        }

        /* ====== BUTTON ====== */
        .login-btn {
          width: 351px;
          height: 71px;
          background: #1f7a8c;
          border: none;
          border-radius: 6px;
          color: #fff;
          font-size: 37px;
          font-weight: 600;
          cursor: pointer;
          display: block;
          margin: 80px auto 0;
        }

        .login-btn:hover {
          background: #16697a;
        }
      `}</style>

      <div className="login-wrapper">
        {showVerifyCode ? (
          <VerifyCode />
        ) : (
          <div className="login-card">
            <h1 className="title">تسجيل الدخول</h1>
            <p className="subtitle">مرحبًا بعودتك</p>

            <div className="field">
              <label>الاسم بالكامل</label>
              <input type="text" placeholder="ادخل اسمك" />
            </div>

            <div className="field">
              <label>رقم الهاتف</label>
              <input type="tel" placeholder="أدخل رقم الهاتف" />
            </div>

            <button className="login-btn" onClick={handleLogin}>
              تسجيل الدخول
            </button>
          </div>
        )}
      </div>
    </>
  );
}

