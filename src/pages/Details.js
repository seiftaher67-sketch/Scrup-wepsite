import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./ProductPage.css";

function Details() {
    const images = [
        "/image/ee1.jpg",
        "/image/woman1.jpg",
        "/image/ee1.jpg",
        "/image/ee1.jpg",
    ];

    const [mainImage, setMainImage] = useState(images[0]);
    const [size, setSize] = useState(null);
    const [qty, setQty] = useState(1);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedCardColors, setSelectedCardColors] = useState({
        row1: [null, null, null],
        row2: [null, null, null],
        row3: [null, null, null]
    });

    // State for selected colors in each row
    const [selectedRowColors, setSelectedRowColors] = useState({
        row1: [null, null, null],
        row2: [null, null, null],
        row3: [null, null, null]
    });

    // Color mapping for main product section
    const mainColors = [
        { name: 'black', value: '#000000' },
        { name: 'red', value: '#7B1113' },
        { name: 'gray', value: '#BDBDBD' },
        { name: 'blue', value: '#0D47A1' }
    ];

    // Handle click for main product color selection
    const handleMainColorClick = (colorValue) => {
        setSelectedColor(colorValue === selectedColor ? null : colorValue);
    };

    // Product cards data
    const products = [
        { img: '/image/woman1.jpg', price: 250, sales: 100 },
        { img: '/image/woman2.jpg', price: 300, sales: 80 },
        { img: '/image/woman3.jpg', price: 200, sales: 120 }
    ];

    // Color to image mapping
    const colorToImage = {
        '#0D47A1': '/image/chang1.jpg',
        '#BDBDBD': '/image/chang2.jpg',
        '#7B1113': '/image/chang4.jpg',
        '#000000': '/image/chang3.jpg'
    };

    // State for selected images based on color selection
    const [selectedImage1, setSelectedImage1] = useState('/image/woman1.jpg');
    const [selectedImage2, setSelectedImage2] = useState('/image/woman2.jpg');
    const [selectedImage3, setSelectedImage3] = useState('/image/woman3.jpg');
    const [selectedImage4, setSelectedImage4] = useState('/image/woman1.jpg');
    const [selectedImage5, setSelectedImage5] = useState('/image/woman2.jpg');
    const [selectedImage6, setSelectedImage6] = useState('/image/woman3.jpg');
    const [selectedImage7, setSelectedImage7] = useState('/image/woman1.jpg');
    const [selectedImage8, setSelectedImage8] = useState('/image/woman2.jpg');
    const [selectedImage9, setSelectedImage9] = useState('/image/woman3.jpg');

    // Handle color click for each product card (row 1)
    const handleColorClick = (color, cardIndex) => {
        const newImage = colorToImage[color];
        if (cardIndex === 0) {
            setSelectedImage1(newImage);
        } else if (cardIndex === 1) {
            setSelectedImage2(newImage);
        } else if (cardIndex === 2) {
            setSelectedImage3(newImage);
        }
        // Update selected color state for row 1
        setSelectedRowColors(prev => {
            const newRowColors = [...prev.row1];
            newRowColors[cardIndex] = color;
            return { ...prev, row1: newRowColors };
        });
    };

    // Handle color click for row 2
    const handleColorClick2 = (color, cardIndex) => {
        const newImage = colorToImage[color];
        if (cardIndex === 0) {
            setSelectedImage4(newImage);
        } else if (cardIndex === 1) {
            setSelectedImage5(newImage);
        } else if (cardIndex === 2) {
            setSelectedImage6(newImage);
        }
        // Update selected color state for row 2
        setSelectedRowColors(prev => {
            const newRowColors = [...prev.row2];
            newRowColors[cardIndex] = color;
            return { ...prev, row2: newRowColors };
        });
    };

    // Handle color click for row 3
    const handleColorClick3 = (color, cardIndex) => {
        const newImage = colorToImage[color];
        if (cardIndex === 0) {
            setSelectedImage7(newImage);
        } else if (cardIndex === 1) {
            setSelectedImage8(newImage);
        } else if (cardIndex === 2) {
            setSelectedImage9(newImage);
        }
        // Update selected color state for row 3
        setSelectedRowColors(prev => {
            const newRowColors = [...prev.row3];
            newRowColors[cardIndex] = color;
            return { ...prev, row3: newRowColors };
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <div style={{ flex: 1 }}>
                <div className="product-container">
                    {/* التفاصيل */}
                    <div className="details-section">
                        <h2 id="name-product">سكراب ميديكال</h2>
                        <div className="price-container">
                            <span className="price-number">250</span>
                            <img src="/image/ry.jpeg" alt="price" className="price-image" />
                        </div>

                        <p className="desc">
                            سكراب طبي مصمم ليمنحك الراحة والأناقة طوال يوم العمل.
                            <br />
                            مصمم بخامة مريحة تسمح بالتهوية وخفة الحركة.
                            <br />
                            مثالي للأطباء والتمريض والعاملين في المجال الطبي.
                        </p>

                        {/* الألوان */}
                        <div className="colors">
                            <span id="e1" >اللون:</span>
                            <div
                                className={`color black ${selectedColor === '#000000' ? 'selected' : ''}`}
                                onClick={() => handleMainColorClick('#000000')}
                            ></div>
                            <div
                                className={`color red ${selectedColor === '#7B1113' ? 'selected' : ''}`}
                                onClick={() => handleMainColorClick('#7B1113')}
                            ></div>
                            <div
                                className={`color gray ${selectedColor === '#BDBDBD' ? 'selected' : ''}`}
                                onClick={() => handleMainColorClick('#BDBDBD')}
                            ></div>
                            <div
                                className={`color blue ${selectedColor === '#0D47A1' ? 'selected' : ''}`}
                                onClick={() => handleMainColorClick('#0D47A1')}
                            ></div>
                        </div>

                        {/* المقاسات */}
                        <div className="sizes">
                            <span id="e1">المقاسات:</span>
                            {["S", "M", "L", "XL"].map((s) => (
                                <button
                                    key={s}
                                    className={size === s ? "size active" : "size"}
                                    onClick={() => setSize(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>

                        {/* الكمية */}
                        <div className="qty">
                            <span id="e1">الكمية:</span>
                            <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
                            <span>{qty}</span>
                            <button onClick={() => setQty(qty + 1)}>+</button>
                        </div>

                        {/* الأزرار */}
                        <button className="buy-btn">اشتري الآن</button>
                        <button className="cart-btn">أضف إلى السلة</button>
                    </div>

                    {/* الصور */}
                    <div className="images-section">
                        <img src={mainImage} alt="staff" className="main-image" />

                        <div className="thumbs">
                            {images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt="thumb"
                                    className={`thumb ${mainImage === img ? "active" : ""}`}
                                    onClick={() => setMainImage(img)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Cards Row - Similar to Men.js */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    padding: '40px 50px',
                    marginTop: '50px'
                }}>
                    <h2 style={{
                        fontFamily: 'El Messiri',
                        fontWeight: 700,
                        fontSize: '40px',
                        lineHeight: '150%',
                        letterSpacing: '0%',
                        textAlign: 'right',
                        color: '#000',
                        marginBottom: '40px',
                        marginRight: '80px'
                    }}>منتجات مشابهة</h2>

                    {/* Product Cards Row 1 */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '32px',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            marginBottom: '60px'
                        }}
                    >
                        {products.map((product, index) => (
                            <Link key={index} to="/product-detail" style={{ textDecoration: 'none' }}>
                                <div
                                    style={{
                                        width: '400px',
                                        height: '520px',
                                        backgroundColor: '#fff',
                                        borderRadius: '10px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                                        overflow: 'hidden',
                                        fontFamily: 'Cairo',
                                        direction: 'rtl',
                                        opacity: 1,
                                        paddingRight: '0px'
                                    }}
                                >
                                    {/* Image Wrapper */}
                                    <div
                                        style={{
                                            position: 'relative',
                                            backgroundColor: 'transparent',
                                            padding: '0',
                                            textAlign: 'center',
                                            height: '382px'
                                        }}
                                    >
                                        {/* Image */}
                                        <img
                                            src={index === 0 ? selectedImage1 : index === 1 ? selectedImage2 : selectedImage3}
                                            alt="product"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div style={{ padding: '5px 20px', marginTop: '10px' }}>
                                        {/* Title and Colors on same line */}
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                marginBottom: '6px',
                                                marginTop: '-5px'
                                            }}
                                        >
                                            {/* Title on left */}
                                            <h3
                                                style={{
                                                    fontFamily: 'Cairo',
                                                    fontWeight: 500,
                                                    fontSize: '24px',
                                                    lineHeight: '150%',
                                                    letterSpacing: '0%',
                                                    color: '#000000',
                                                    margin: 0
                                                }}
                                            >
                                                سكراب ميديكل
                                            </h3>

                                            {/* Color dots on right */}
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    gap: '5px'
                                                }}
                                            >
                                                {['#000000', '#7B1113', '#BDBDBD', '#0D47A1'].map((c, i) => (
                                                    <span
                                                        key={i}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleColorClick(c, index);
                                                        }}
                                                        style={{
                                                            width: '30px',
                                                            height: '30px',
                                                            borderRadius: '50%',
                                                            backgroundColor: c,
                                                            boxShadow: selectedRowColors.row1[index] === c
                                                                ? '0px 0px 0px 4px #0f6b7a, 0px 4px 12px rgba(0,0,0,0.4)'
                                                                : '0px 2px 4px rgba(0,0,0,0.2)',
                                                            cursor: 'pointer',
                                                            transform: selectedRowColors.row1[index] === c ? 'scale(1.2)' : 'scale(1)',
                                                            transition: 'all 0.3s ease',
                                                            border: selectedRowColors.row1[index] === c ? '3px solid #fff' : '3px solid transparent',
                                                            outline: selectedRowColors.row1[index] === c ? '2px solid #0f6b7a' : 'none',
                                                            outlineOffset: selectedRowColors.row1[index] === c ? '2px' : '0px'
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Button and Price on same line */}
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                marginBottom: '14px',
                                                marginTop: '20px'
                                            }}
                                        >
                                            {/* Price */}
                                            <p
                                                style={{
                                                    fontFamily: 'Cairo',
                                                    fontWeight: 500,
                                                    fontSize: '24px',
                                                    lineHeight: '100%',
                                                    letterSpacing: '0%',
                                                    margin: 0,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '5px'
                                                }}
                                            >
                                                {product.price}
                                                <img
                                                    src="/image/ry.jpeg"
                                                    alt="ريال"
                                                    style={{
                                                        height: '18px',
                                                        width: 'auto'
                                                    }}
                                                />
                                            </p>

                                            <button
                                                style={{
                                                    backgroundColor: '#0F6A7B',
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: '50px',
                                                    padding: '7px 16px',
                                                    fontSize: '17px',
                                                    fontWeight: 600,
                                                    cursor: 'pointer',
                                                    width: '146px',
                                                    height: '44px',
                                                    fontFamily: 'Cairo'
                                                }}
                                            >
                                                + أضف للسلة
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Product Cards Row 2 */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '32px',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            marginBottom: '60px'
                        }}
                    >
                        {products.map((product, index) => (
                            <Link key={index} to="/product-detail" style={{ textDecoration: 'none' }}>
                                <div
                                    style={{
                                        width: '400px',
                                        height: '505px',
                                        backgroundColor: '#fff',
                                        borderRadius: '10px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                                        overflow: 'hidden',
                                        fontFamily: 'Cairo',
                                        direction: 'rtl',
                                        opacity: 1,
                                        paddingRight: '0px'
                                    }}
                                >
                                    {/* Image Wrapper */}
                                    <div
                                        style={{
                                            position: 'relative',
                                            backgroundColor: 'transparent',
                                            padding: '0',
                                            textAlign: 'center',
                                            height: '382px'
                                        }}
                                    >
                                        {/* Image */}
                                        <img
                                            src={index === 0 ? selectedImage4 : index === 1 ? selectedImage5 : selectedImage6}
                                            alt="product"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div style={{ padding: '5px 20px', marginTop: '10px' }}>
                                        {/* Title and Colors on same line */}
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                marginBottom: '6px',
                                                marginTop: '-5px'
                                            }}
                                        >
                                            {/* Title on left */}
                                            <h3
                                                style={{
                                                    fontFamily: 'Cairo',
                                                    fontWeight: 500,
                                                    fontSize: '24px',
                                                    lineHeight: '150%',
                                                    letterSpacing: '0%',
                                                    color: '#000000',
                                                    margin: 0
                                                }}
                                            >
                                                سكراب ميديكل
                                            </h3>

                                            {/* Color dots on right */}
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    gap: '5px'
                                                }}
                                            >
                                                {['#000000', '#7B1113', '#BDBDBD', '#0D47A1'].map((c, i) => (
                                                    <span
                                                        key={i}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleColorClick2(c, index);
                                                        }}
                                                        style={{
                                                            width: '30px',
                                                            height: '30px',
                                                            borderRadius: '50%',
                                                            backgroundColor: c,
                                                            boxShadow: selectedRowColors.row2[index] === c
                                                                ? '0px 0px 0px 4px #0f6b7a, 0px 4px 12px rgba(0,0,0,0.4)'
                                                                : '0px 2px 4px rgba(0,0,0,0.2)',
                                                            cursor: 'pointer',
                                                            transform: selectedRowColors.row2[index] === c ? 'scale(1.2)' : 'scale(1)',
                                                            transition: 'all 0.3s ease',
                                                            border: selectedRowColors.row2[index] === c ? '3px solid #fff' : '3px solid transparent',
                                                            outline: selectedRowColors.row2[index] === c ? '2px solid #0f6b7a' : 'none',
                                                            outlineOffset: selectedRowColors.row2[index] === c ? '2px' : '0px'
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Button and Price on same line */}
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                marginBottom: '14px',
                                                marginTop: '20px'
                                            }}
                                        >
                                            {/* Price */}
                                            <p
                                                style={{
                                                    fontFamily: 'Cairo',
                                                    fontWeight: 500,
                                                    fontSize: '24px',
                                                    lineHeight: '100%',
                                                    letterSpacing: '0%',
                                                    margin: 0,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '5px'
                                                }}
                                            >
                                                {product.price}
                                                <img
                                                    src="/image/ry.jpeg"
                                                    alt="ريال"
                                                    style={{
                                                        height: '18px',
                                                        width: 'auto'
                                                    }}
                                                />
                                            </p>

                                            <button
                                                style={{
                                                    backgroundColor: '#0F6A7B',
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: '50px',
                                                    padding: '7px 16px',
                                                    fontSize: '17px',
                                                    fontWeight: 600,
                                                    cursor: 'pointer',
                                                    width: '146px',
                                                    height: '44px',
                                                    fontFamily: 'Cairo'
                                                }}
                                            >
                                                + أضف للسلة
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Product Cards Row 3 */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '32px',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        {products.map((product, index) => (
                            <Link key={index} to="/product-detail" style={{ textDecoration: 'none' }}>
                                <div
                                    style={{
                                        width: '400px',
                                        height: '505px',
                                        backgroundColor: '#fff',
                                        borderRadius: '10px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                                        overflow: 'hidden',
                                        fontFamily: 'Cairo',
                                        direction: 'rtl',
                                        opacity: 1,
                                        paddingRight: '0px'
                                    }}
                                >
                                    {/* Image Wrapper */}
                                    <div
                                        style={{
                                            position: 'relative',
                                            backgroundColor: 'transparent',
                                            padding: '0',
                                            textAlign: 'center',
                                            height: '382px'
                                        }}
                                    >
                                        {/* Image */}
                                        <img
                                            src={index === 0 ? selectedImage7 : index === 1 ? selectedImage8 : selectedImage9}
                                            alt="product"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div style={{ padding: '5px 20px', marginTop: '10px' }}>
                                        {/* Title and Colors on same line */}
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                marginBottom: '6px',
                                                marginTop: '-5px'
                                            }}
                                        >
                                            {/* Title on left */}
                                            <h3
                                                style={{
                                                    fontFamily: 'Cairo',
                                                    fontWeight: 500,
                                                    fontSize: '24px',
                                                    lineHeight: '150%',
                                                    letterSpacing: '0%',
                                                    color: '#000000',
                                                    margin: 0
                                                }}
                                            >
                                                سكراب ميديكل
                                            </h3>

                                            {/* Color dots on right */}
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    gap: '5px'
                                                }}
                                            >
                                                {['#000000', '#7B1113', '#BDBDBD', '#0D47A1'].map((c, i) => (
                                                    <span
                                                        key={i}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleColorClick3(c, index);
                                                        }}
                                                        style={{
                                                            width: '30px',
                                                            height: '30px',
                                                            borderRadius: '50%',
                                                            backgroundColor: c,
                                                            boxShadow: selectedRowColors.row3[index] === c
                                                                ? '0px 0px 0px 4px #0f6b7a, 0px 4px 12px rgba(0,0,0,0.4)'
                                                                : '0px 2px 4px rgba(0,0,0,0.2)',
                                                            cursor: 'pointer',
                                                            transform: selectedRowColors.row3[index] === c ? 'scale(1.2)' : 'scale(1)',
                                                            transition: 'all 0.3s ease',
                                                            border: selectedRowColors.row3[index] === c ? '3px solid #fff' : '3px solid transparent',
                                                            outline: selectedRowColors.row3[index] === c ? '2px solid #0f6b7a' : 'none',
                                                            outlineOffset: selectedRowColors.row3[index] === c ? '2px' : '0px'
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Button and Price on same line */}
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                marginBottom: '14px',
                                                marginTop: '20px'
                                            }}
                                        >
                                            {/* Price */}
                                            <p
                                                style={{
                                                    fontFamily: 'Cairo',
                                                    fontWeight: 500,
                                                    fontSize: '24px',
                                                    lineHeight: '100%',
                                                    letterSpacing: '0%',
                                                    margin: 0,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '5px'
                                                }}
                                            >
                                                {product.price}
                                                <img
                                                    src="/image/ry.jpeg"
                                                    alt="ريال"
                                                    style={{
                                                        height: '18px',
                                                        width: 'auto'
                                                    }}
                                                />
                                            </p>

                                            <button
                                                style={{
                                                    backgroundColor: '#0F6A7B',
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: '50px',
                                                    padding: '7px 16px',
                                                    fontSize: '17px',
                                                    fontWeight: 600,
                                                    cursor: 'pointer',
                                                    width: '146px',
                                                    height: '44px',
                                                    fontFamily: 'Cairo'
                                                }}
                                            >
                                                + أضف للسلة
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Details;

