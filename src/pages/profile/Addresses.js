import React from "react";
import Header from "../../components/Header";
import ProfileSidebar from "../../components/ProfileSidebar";

export default function Addresses() {
  return (
    <div className="w-full min-h-screen bg-[#F6F6F6]" dir="rtl">
      <div dir="ltr"  >
        <Header />
      </div>
      <div className="pt-[130px]">
        <div className="max-w-[1280px] mx-auto px-4 py-10">
          {/* Title */}
          <h1 style={{ fontFamily: 'El Messiri', fontSize: '55px', marginTop: '-30px', fontWeight: 'bold', color: '#022B3A' }}>العناوين</h1>
          <p style={{ fontSize: '32px', color: '#3F4254', marginTop: '-10px', marginBottom: '40px' }}>
            عرض وتحديث بيانات موقعك الجغرافي
          </p>


          <div className="grid grid-cols-[450px_1fr] gap-46 items-start">
            {/* Sidebar */}
            <ProfileSidebar activePage="addresses" />

            {/* Content */}
            <div className="rounded-2xl p-6 shadow-sm max-w-[1758px]">
              {/* Address Input */}

              <label style={{ color: '#3F4254', fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'normal', fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right', marginTop: '-20px' }}>ادخل العنوان</label>

              {/* Sub Input */}
              <input
                placeholder="رقم المبنى، رقم الشقة"
                className="w-full border border-gray-200 rounded-lg p-3 mb-6 outline-none text-right "
              />

              {/* Map */}
              <div className="w-full h-[360px] overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Riyadh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-none"
                  allow="geolocation"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Save Button */}
              <button className="mt-6 w-full bg-[#022B3A] text-white py-3 rounded-xl font-bold text-lg">
                حفظ التغييرات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
