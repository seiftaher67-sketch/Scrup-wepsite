import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ to, label, icon, active }) => (
  <Link to={to} className="block">
    <li
      className={`flex items-center justify-between px-6 py-4 rounded-xl text-lg transition
        ${active ? "bg-teal-100 text-teal-900" : "text-gray-700 hover:bg-gray-100"}
      `}
    >
      <span>{label}</span>
      <img src={icon} alt="" className="w-7 h-7" />
    </li>
  </Link>
);

const ProfileSidebar = ({ activePage }) => {
  return (
    <aside className="sticky top-[130px] w-[453px] space-y-6 font-cairo">
      {/* Profile Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-teal-700 text-white flex items-center justify-center text-lg font-semibold">
            س ط
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800"><strong>مرحبًا</strong>، <strong>سيف</strong></p>
            <p className="text-sm text-gray-400">seif@example.com</p>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>اكتمال الملف الشخصي</span>
            <span className="font-medium"><strong>80%</strong></span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[80%]" style={{ backgroundColor: 'rgba(31, 122, 140, 0.52)', borderRadius: '20px' }} />
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="bg-white rounded-2xl p-3 shadow-sm">
        <ul className="space-y-1">
          <MenuItem
            to="/account"
            label={<strong style={{ color: '#4A5565' }}>حسابي</strong>}
            icon="/image/k11.png"
            active={activePage === "account"}
          />
          <MenuItem
            to="/orders"
            label={<strong style={{ color: '#4A5565' }}>الطلبات</strong>}
            icon="/image/k1.png"
            active={activePage === "orders"}
          />
          <MenuItem
            to="/resorts"
            label={<strong style={{ color: '#4A5565' }}>المرتجعات</strong>}
            icon="/image/k2.png"
            active={activePage === "resorts"}
          />
          <MenuItem
            to="/addresses"
            label={<strong style={{ color: '#4A5565' }}>العناوين</strong>}
            icon="/image/k3.png"
            active={activePage === "addresses"}
          />
          <MenuItem
            to="/payments"
            label={<strong style={{ color: '#4A5565' }}>المدفوعات</strong>}
            icon="/image/k4.png"
            active={activePage === "payments"}
          />
        </ul>
      </div>

      {/* Logout */}
      <button
        className="w-full h-[60px] bg-white rounded-2xl flex items-center justify-between px-6
        text-lg text-gray-600 hover:bg-gray-100 transition shadow-sm"
      >
        <span>تسجيل الخروج</span>
        <img src="/image/k5.png" alt="" className="w-7 h-7" />
      </button>
    </aside>
  );
};

export default ProfileSidebar;
