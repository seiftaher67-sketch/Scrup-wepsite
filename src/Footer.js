import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Small delay to ensure navigation completes
  };

  return (
    <footer dir="rtl" className="footer-container w-full text-white py-6 px-4 md:px-12"
      style={{
        background: 'linear-gradient(to bottom, #022B3A, #1F7A8C)',
        fontFamily: 'sans-serif',
      }}>
      <div id='logoftoer'>
        <Link to="/" style={{ cursor: 'pointer' }}>
          <img src='/image/flogo.png' alt='logo' style={{ pointerEvents: 'none' }} />
        </Link>
      </div>
      <div id='decfooter'>
        <h2 >نقدم سكرابات وأدوات طبية</h2>
        <h2>بتصميم عصري وخامات مريحة</h2>
        <h2>تساعدك علي التركيز في شغلك</h2>
        <h2>بثقة وراحة طوال اليوم</h2>

        <div id='socal'>
          <img src='/image/instagram.png' alt='instagram' />
          <img src='/image/tiktok.png' alt='tiktok' />
          <img src='/image/face.png' alt='face' />
        </div>   </div>
      <div id='footerlink'>
        <h2>روابط مهمة</h2>
        <p onClick={handleHomeClick} style={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none' }}>
          الرئيسية
        </p>
        <Link to="/washing-guide" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
          <p style={{ cursor: 'pointer' }}>تعلميات الغسيل و العناية بالاقمشة</p>
        </Link>
        <Link to="/return-policy" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
          <p style={{ cursor: 'pointer' }}>سياسية الاستبدال والاسترجاع</p>
        </Link>

      </div>
      <div id='footerconect'>
        <h2 style={{ marginRight: '30px' }}>تواصل معنا</h2>
        <a href='tel: 6551235523 96+'><  img src='/image/f1.png' alt='f1' id='w1' />  6551235523 96+ </a>
        <p ><img src='/image/f2.png' alt='f1' id='w1' />  ش الأمير نواف بن عبدالعزيز - مركز مزاين  </p>
        <a href='mailto:atlascompany@gmail.com' > <img src='/image/f3.png' alt='f1' id='w1' />  atlascompany@gmail.com</a>
        <br></br>
        <br></br>
        <a href='tel:6551235523'> <img src='/image/f4.png' alt='f1' id='w1' />  6551235523 96+</a>

      </div>
      <br></br>
      <hr style={{ width: '93%' }} />
      <div className="footer-bottom">
        <div className="copyright" style={{ display: 'flex', alignItems: 'center', marginLeft: '60px' }}>ٌ
          <a href="https://atlas-data.sa"><img src='/image/atlas.jpeg' alt='atlas' style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '-40px' }}></img></a>2026 <a href="https://atlas-data.sa" style={{ color: 'white', textDecoration: 'none' }}> أطلس البيانات</a>.  جميع الحقوق محفوظة
        </div>
        <div className="footer-images" style={{ paddingLeft: '47px' }}>
          <img src='/image/v1.png' alt='v1' />
          <img src='/image/v2.png' alt='v2' />
          <img src='/image/v3.png' alt='v3' />
          <img src='/image/v4.png' alt='v4' />
          <img src='/image/v5.png' alt='v5' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
