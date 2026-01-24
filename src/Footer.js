import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer dir="rtl" className="footer-container w-full text-white py-12 px-4 md:px-12"
      style={{
        background: 'linear-gradient(to bottom, #022B3A, #1F7A8C)',
        fontFamily: 'sans-serif',
      }}>
      <div id='logoftoer'>
        <img src='/image/flogo.png' alt='logo' />
      </div>
      <div id='decfooter'>
        <h2>نقدم سكربات وأدوات طبية</h2>
        <h2>بتصميم عصري وخامات مريحة</h2>
        <h2>تساعدك علي التركيز في شغلك</h2>
        <h2>بثقة وراحة طوال اليوم</h2>
      </div>
      <div id='footerlink'>
        <h2>روابط مهمة</h2>
        <p>الرئيسية</p>
        <p>تعلميات الغسيل و العناية بالاقمشة</p>
        <p>سياسية الاستبدال والاسترجاع</p>

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
      <hr style={{width:'93%'}} />
      <div className="footer-images" style={{paddingLeft:'55https://github.com/seiftaher67-sketch/Scrup-wepsite.gitpx'}}>
        <img src='/image/v1.png' alt='v1' />
        <img src='/image/v2.png' alt='v2' />
        <img src='/image/v3.png' alt='v3' />
        <img src='/image/v4.png' alt='v4' />
        <img src='/image/v5.png' alt='v5' />
      </div>
    </footer>
  );
};

export default Footer;