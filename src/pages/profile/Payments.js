import React from "react";
import Header from "../../components/Header";
import ProfileSidebar from "../../components/ProfileSidebar";
import { Trash2 } from "lucide-react";

export default function Payments() {
  const cards = [
    {
      type: "master",
      last4: "8888",
      name: "Seif Taher",
      expiry: "09/2026",
    },
    {
      type: "visa",
      last4: "4242",
      name: "Seif Taher",
      expiry: "12/2027",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F6F6F6]" dir="rtl">
      <div dir="ltr"  >
        <Header />
      </div>
      <div className="pt-[130px]"  >
        <div className="max-w-[1280px] mx-auto px-4 py-10">

          <h1 style={{ fontFamily: 'El Messiri', fontSize: '55px', marginTop: '-30px', fontWeight: 'bold', color: '#022B3A' }}>طرق الدفع</h1>
          <p style={{ fontSize: '32px', color: '#3F4254', marginTop: '-10px', marginBottom: '40px' }}>
            إدارة خيارات الدفع الخاصة بك بأمان
          </p>


          <div className="grid grid-cols-[420px_1fr] gap-10 items-start">
            {/* Sidebar */}
            <ProfileSidebar activePage="payments" />

            {/* Content */}
            <div className="space-y-10 mx-30 -translate-x-[30px]" >
              {/* Cards */}
              <div className="flex gap-6 max-w-[760px]" >
                {cards.map((card, index) => (
                  <div key={index} className="flex flex-col gap-4 flex-1">
                    <div
                      className={`w-full h-[210px] rounded-2xl p-5 text-white flex flex-col justify-between
                        ${card.type === "visa"
                          ? "bg-gradient-to-br from-blue-500 to-blue-700"
                          : "bg-gradient-to-br from-orange-500 to-red-600"
                        }`} dir="ltr"
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-semibold">
                          {card.type === "visa" ? "Visa" : "Mastercard"}
                        </span>
                        <img src="/image/Icon.png" alt="icon" className="w-6 h-6" />
                      </div>

                      <div className="tracking-widest text-lg font-medium">
                        •••• •••• •••• {card.last4}
                      </div>

                      <div className="flex justify-between items-end text-sm">
                        <div>
                          <p className="text-xs opacity-80">Card Holder</p>
                          <p className="font-semibold">{card.name}</p>
                        </div>
                        <div>
                          <p className="text-xs opacity-80">Expires</p>
                          <p className="font-semibold">{card.expiry}</p>
                        </div>
                      </div>
                    </div>
                    <button className="w-[110px] bg-white text-red-500 py-2 px-4 rounded-lg border border-gray-300 flex items-center justify-center gap-2">
                      <Trash2 className="w-4 h-4" />
                      حذف
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm max-w-[760px]">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  إضافة كارد اخر
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    placeholder="رقم البطاقة"
                    className="col-span-2 border rounded-lg p-3 outline-none"
                  />

                  <input
                    placeholder="CVV"
                    className="border rounded-lg p-3 outline-none"
                  />

                  <input
                    placeholder="موعد انتهاء الصلاحية"
                    className="border rounded-lg p-3 outline-none"
                  />
                </div>

                <button
                  className="mt-6 w-full bg-[#022B3A] text-white py-3 rounded-xl font-bold"
                >
                  حفظ التغييرات
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
