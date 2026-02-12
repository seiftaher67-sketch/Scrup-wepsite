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


          <div className="grid grid-cols-[420px_1fr] gap-10 items-start">
            {/* Sidebar */}
            <ProfileSidebar activePage="addresses" />

            {/* Content */}
            <div className="bg-white rounded-2xl p-6 shadow-sm max-w-[640px]">
              {/* Address Input */}
              <label
                className="w-full  rounded-lg p-3 mb-14 outline-none text-right"
              >ادخل العنوان</label>

              {/* Sub Input */}
              <input
                placeholder="رقم المبنى، رقم الشقة"
                className="w-full border border-gray-200 rounded-lg p-3 mb-6 outline-none text-right"
              />

              {/* Map */}
              <div className="w-full h-[260px] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center relative">
                {/* Fake Map Placeholder */}
                <span className="absolute bg-white px-6 py-2 rounded-full shadow text-[#0F3D3E] font-semibold flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z"
                    />
                  </svg>
                  حدد موقعك
                </span>
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
