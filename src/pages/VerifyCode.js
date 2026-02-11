import React from "react";

export default function VerifyCode() {
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
        fontFamily:El Messiri;
          width: 750px;
          height: 740px;
          background: #ffffff;
          border-radius: 10px;
          padding: 80px 50px;
          direction: rtl;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        /* ====== TITLE ====== */
        .title {
          font-family: "El Messiri";
          font-weight: 800;
          font-size: 60px;
          color: #000;
          margin: 0;
        }

        .subtitle {
          font-size: 32px;
          color: #696969;
          margin-top: 25px;
          margin-bottom: 70px;
          line-height: 1.6;
        }

        /* ====== OTP INPUTS ====== */
        .otp-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .otp-input {
          width: 130px;
          height: 90px;
          border: 4px solid #ddd;
          border-radius: 8px;
          font-size: 56px;
          text-align: center;
          outline: none;
        }

        .otp-input:focus {
          border-color: #1f7a8c;
        }

        /* ====== RESEND ====== */
        .resend {
          font-size: 38px;
          color: #6b6b6b;
          margin-bottom: 90px;
        }

        .resend span {
          color: #1f7a8c;
          cursor: pointer;
          font-weight: 600;
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
          margin: 50px auto 0;
        }

        .login-btn:hover {
          background: #16697a;
        }
      `}</style>

      <div className="login-wrapper">
        <div className="login-card">
          <h1 className="title">تأكيد رقم الهاتف</h1>

          <p className="subtitle">
            لقد أرسلنا رمز مكون من 4 أرقام إلى رقمك
          </p>

          <div className="otp-container">
            <input className="otp-input" maxLength="1" />
            <input className="otp-input" maxLength="1" />
            <input className="otp-input" maxLength="1" />
            <input className="otp-input" maxLength="1" />
          </div>

          <div className="resend">
            لم تصلك رسالة الرمز؟ <span>أعد إرسال الرمز</span>
          </div>

          <button className="login-btn">تسجيل الدخول</button>
        </div>
      </div>
    </>
  );
}
