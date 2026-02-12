import React from 'react';
import { Link } from 'react-router-dom';
import ProfileSidebar from '../../components/ProfileSidebar';
import Header from '../../components/Header';

export default function Orders() {
    return (
        <div className="w-full min-h-screen bg-gray-50">
            <Header />

            {/* ================= CONTENT ================= */}
            <div className="w-full min-h-screen bg-[#FBFBFB] pt-[130px] font-cairo" dir="rtl">
      <div className="max-w-[1280px] mx-auto px-4 py-10">
        {/* Page Title */}
      <h1 style={{ fontFamily: 'El Messiri', fontSize: '55px', marginTop: '-30px', fontWeight: 'bold', color: '#022B3A' }}>طلباتي</h1>
          <p style={{ fontSize: '32px', color: '#3F4254', marginTop: '-10px', marginBottom: '40px' }}>
تتبع، إرجاع، أو شراء الأشياء مرة أخرى
          </p>

        {/* Layout */}
        <div className="grid grid-cols-[460px_1fr] gap-10 items-start">
          {/* Sidebar */}
          <ProfileSidebar activePage="orders" />

          {/* Orders Content */}
          <div className="space-y-6">
            {/* Order Card */}
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 flex items-center shadow-sm"
              >
               {/* Icon */}
               <div className="w-32 h-32 border border-gray-300 bg-gray-300 rounded-xl flex items-center justify-center">
                  <img
                    src="/image/ord.png"
                    alt="order"
                    className="w-30 h-30"
                  />
                </div>
                {/* Order Info */}
                <div className="space-y-2 mr-4">
                  <p className="text-sm text-gray-500">
                    ORD-54874854{index}12652596
                  </p>
                  <p className="text-sm text-gray-500">
                    التاريخ: 20/6/2026
                  </p>
                  <p className="text-sm text-gray-500">
                    عدد العناصر: 2
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    المبلغ الكلي: <span className="font-bold">250 جنيه</span>
                  </p>
                </div>

                
                <div className="flex gap-3 mr-40 mt-20">
                <button
                  className="px-16 py-2  border border-[#022B3A] rounded-lg
                  text-sm text-[#022B3A] hover:bg-[#022B3A] hover:text-white transition"
                >
                  تتبع الطلب
                </button>
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
