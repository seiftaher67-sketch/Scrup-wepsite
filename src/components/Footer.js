import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Small delay to ensure navigation completes
  };

  return (
    <footer dir="rtl" className="relative w-full h-[580px] text-white py-6 px-4 md:px-12 bg-gradient-to-b from-footer-gradient-start to-footer-gradient-end font-sans">
      <div className="mt-8 mr-16 w-[291px] h-[161px]">
        <Link to="/" className="cursor-pointer">
          <img src='/image/flogo.png' alt='logo' className="pointer-events-none" />
        </Link>
      </div>
      <div className="text-[#FBFBFB] mt-16 mr-16 font-cairo font-normal text-base leading-[23px] text-right">
        <h2>نقدم سكرابات وأدوات طبية</h2>
        <h2>بتصميم عصري وخامات مريحة</h2>
        <h2>تساعدك علي التركيز في شغلك</h2>
        <h2>بثقة وراحة طوال اليوم</h2>

        <div className="flex flex-row gap-2.5 mt-4">
          <img src='/image/instagram.png' alt='instagram' className="transition-all duration-300 ease-in-out cursor-pointer hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] hover:brightness-110 hover:scale-110" />
          <img src='/image/tiktok.png' alt='tiktok' className="transition-all duration-300 ease-in-out cursor-pointer hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] hover:brightness-110 hover:scale-110" />
          <img src='/image/face.png' alt='face' className="transition-all duration-300 ease-in-out cursor-pointer hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] hover:brightness-110 hover:scale-110" />
        </div>
      </div>
      <div className="text-whitesmoke absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-6">
        <h2 className="font-el-messiri font-bold text-3xl leading-[150%] text-right">روابط مهمة</h2>
        <p onClick={handleHomeClick} className="font-cairo font-semibold text-xl leading-[100%] text-right cursor-pointer transition-all duration-300 ease-in-out hover:text-shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_30px_rgba(255,255,255,0.6)] hover:text-[#FFD700]">
          الرئيسية
        </p>
        <Link to="/washing-guide" className="text-inherit no-underline cursor-pointer">
          <p className="font-cairo font-semibold text-xl leading-[100%] text-right cursor-pointer transition-all duration-300 ease-in-out hover:text-shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_30px_rgba(255,255,255,0.6)] hover:text-[#FFD700]">تعلميات الغسيل و العناية بالاقمشة</p>
        </Link>
        <Link to="/return-policy" className="text-inherit no-underline cursor-pointer">
          <p className="font-cairo font-semibold text-xl leading-[100%] text-right cursor-pointer transition-all duration-300 ease-in-out hover:text-shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_30px_rgba(255,255,255,0.6)] hover:text-[#FFD700]">سياسية الاستبدال والاسترجاع</p>
        </Link>
      </div>
      <div className="text-whitesmoke absolute top-1/2 left-[10%] transform -translate-y-1/2 mt-6">
        <h2 className="font-el-messiri font-bold text-3xl leading-[150%] text-right mr-8">تواصل معنا</h2>
        <a href='tel:6551235523' className="text-white no-underline transition-all duration-300 ease-in-out cursor-pointer hover:text-shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_30px_rgba(255,255,255,0.6)] hover:text-[#FFD700]">
          <img src='/image/f1.png' alt='f1' className="inline-block align-middle w-6 h-6 ml-0.5" /> 6551235523 96+
        </a>
        <p className="font-cairo font-semibold text-xl leading-[100%] text-right">
          <img src='/image/f2.png' alt='f1' className="inline-block align-middle w-6 h-6 ml-0.5" /> ش الأمير نواف بن عبدالعزيز - مركز مزاين
        </p>
        <a href='mailto:atlascompany@gmail.com' className="text-white no-underline transition-all duration-300 ease-in-out cursor-pointer hover:text-shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_30px_rgba(255,255,255,0.6)] hover:text-[#FFD700]">
          <img src='/image/f3.png' alt='f1' className="inline-block align-middle w-6 h-6 ml-0.5" /> atlascompany@gmail.com
        </a>
        <br />
        <br />
        <a href='tel:6551235523' className="text-white no-underline transition-all duration-300 ease-in-out cursor-pointer hover:text-shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_30px_rgba(255,255,255,0.6)] hover:text-[#FFD700]">
          <img src='/image/f4.png' alt='f1' className="inline-block align-middle w-6 h-6 ml-0.5" /> 6551235523 96+
        </a>
      </div>
      <br />
      <hr className="w-[93%] mt-8" />
      <div className="flex justify-between items-center mr-16 -mt-0.5">
        <div className="font-cairo font-normal text-base leading-6 tracking-[0.2px] text-right text-[#FBFBFB] flex items-center ml-16">
          <a href="https://atlas-data.sa">
            <img src='/image/atlas.jpeg' alt='atlas' className="w-8 h-8 rounded-full -mr-10" />
          </a>
          2026
          <a href="https://atlas-data.sa" className="text-white no-underline"> أطلس البيانات</a>. جميع الحقوق محفوظة
        </div>
        <div className="flex justify-end pl-12 -mt-2">
          <img src='/image/v1.png' alt='v1' className="mr-2.5 mt-4 transition-all duration-300 ease-in-out cursor-pointer hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] hover:brightness-110 hover:scale-110" />
          <img src='/image/v2.png' alt='v2' className="mr-2.5 mt-4 transition-all duration-300 ease-in-out cursor-pointer hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] hover:brightness-110 hover:scale-110" />
          <img src='/image/v3.png' alt='v3' className="mr-2.5 mt-4 transition-all duration-300 ease-in-out cursor-pointer hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] hover:brightness-110 hover:scale-110" />
          <img src='/image/v4.png' alt='v4' className="mr-2.5 mt-4 transition-all duration-300 ease-in-out cursor-pointer hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] hover:brightness-110 hover:scale-110" />
          <img src='/image/v5.png' alt='v5' className="mr-2.5 mt-4 transition-all duration-300 ease-in-out cursor-pointer hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] hover:brightness-110 hover:scale-110" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
