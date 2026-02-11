import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {/* Fixed Header Container */}
      <div className="fixed top-0 left-0 right-0 bg-gray-50 z-50">
        {/* Top Header Bar */}
        <Link to="/" className="cursor-pointer">
          <img
            src="/image/LOGOS.png"
            alt="Logo"
            className="absolute top-5 right-8 w-24 h-auto rounded-lg brightness-110 contrast-115"
          />
        </Link>
        <div className="absolute top-8 left-[800px] flex flex-row gap-8 items-center font-el-messiri font-semibold text-3xl leading-[150%] tracking-wider text-teal-900">
          <Link to="/medical-tools" className="text-teal-900 no-underline">أدوات طبية</Link>
          <Link to="/women" className="text-teal-900 no-underline">نسائي</Link>
          <Link to="/men" className="text-teal-900 no-underline">رجالي</Link>
          <Link to="/" className="text-teal-900 no-underline">الرئيسية</Link>
        </div>

        {/* Icons and Search */}
        <div className="absolute top-5 left-0 flex flex-row gap-4 items-center">
          <div className="relative w-16 h-16 rounded-full bg-gray-50 bg-opacity-30 flex items-center justify-center ml-24 cursor-pointer shadow-md">
            <img src="/image/icon2.png" alt="Icon 2" className="w-8 h-8 filter brightness-0 saturate-100 invert-8 sepia-65 saturate-1414 hue-rotate-185" />
          </div>
          <Link to="/product-detail" className="no-underline">
            <div className="relative w-16 h-16 rounded-full bg-gray-50 bg-opacity-30 flex items-center justify-center cursor-pointer shadow-md">
              <img src="/image/icon1.png" alt="Icon 1" className="w-8 h-8 filter brightness-0 saturate-100 invert-8 sepia-65 saturate-1414 hue-rotate-185" />
            </div>
          </Link>
          <div className="relative w-[295px] h-16">
            <input
              type="text"
              placeholder="أبحث عن منتج"
              dir="rtl"
              className="w-[255px] h-16 ml-8 rounded-full bg-gray-50 border border-gray-300 px-16 py-0 font-el-messiri font-normal text-2xl leading-[150%] outline-none bg-no-repeat bg-right-6 bg-[length:20px_20px] text-gray-900 shadow-md"
              style={{ backgroundImage: 'url(/image/adca.png)' }}
            />
          </div>
        </div>

        {/* Header Divider Line */}
        <div className="absolute top-[105px] left-0 right-0 h-1 bg-gray-400 shadow-md w-full"></div>

        {/* Spacer for header height */}
        <div className="h-32"></div>
      </div>
    </>
  );
};

export default Header;
