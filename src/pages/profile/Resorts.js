import React from "react";
import ProfileSidebar from "../../components/ProfileSidebar";
import Header from "../../components/Header";

export default function Resorts() {
  return (
    <div className="w-full min-h-screen bg-[#FBFBFB]" dir="rtl">
      <div dir="ltr"  >
      <Header />
      </div>
      {/* CONTENT */}
      <div className="pt-[130px]">
        <div className="max-w-[1280px] mx-auto px-4 py-10">
          {/* Page Title */}
           <h1 style={{ fontFamily: 'El Messiri', fontSize: '55px', marginTop: '-30px', fontWeight: 'bold', color: '#022B3A' }}>المرتجعات والاستردادات</h1>
          <p style={{ fontSize: '32px', color: '#3F4254', marginTop: '-10px', marginBottom: '40px' }}>
تتبع أو إعادة شراء الأشياء مرة أخرى

          </p>

          {/* Layout */}
          <div className="grid grid-cols-[460px_1fr] gap-10 items-start">
            {/* Sidebar */}
            <ProfileSidebar activePage="resorts" />

            {/* Returns Content */}
            <div className="space-y-6">
              {[1, 2].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm flex justify-between items-center"
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-6">
                    {/* Product Image */}
                    <img
                      src="/image/girl1.jpg"
                      alt="product"
                      className="w-[70px] h-[90px] object-cover rounded-md"
                    />
                    <div className="text-right space-y-1">
                      <p className="font-semibold text-gray-800">
                        سكارف ميديكال
                      </p>
                      <p className="text-sm text-gray-500">
                        المقاس: M
                      </p>
                      <p className="text-sm text-gray-500">
                        اللون: أسود
                      </p>
                      <p className="text-sm text-gray-500">
                        الكمية: 1
                      </p>
                    </div>

                   
                  </div>

                  {/* Left Info */}
                  <div className="space-y-4">
                    {/* Price */}
                    <div className="flex justify-end items-end ">
                    <p className="text-lg font-bold text-gray-800 ">
                      250 ج.م
                    </p>
                    </div>
                    {/* Actions */}
                    <div className="flex gap-3">
                      <button
                        className="px-4 py-2 text-sm rounded-lg
                        border border-teal-700 text-teal-700
                        hover:bg-teal-700 hover:text-white transition"
                      >
                        إلغاء الطلب
                      </button>

                      <button
                        className="px-4 py-2 text-sm rounded-lg
                        bg-gray-900 text-white"
                      >
                        قيد المعالجة
                      </button>
                    </div>
                  </div>

                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
