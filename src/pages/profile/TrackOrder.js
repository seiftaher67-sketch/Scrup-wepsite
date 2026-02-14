import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Package,
    CheckCircle,
    Settings,
    Truck,
    MapPin,
    Home
} from "lucide-react";
import Header from '../../components/Header';


export default function TrackOrder() {
    const navigate = useNavigate();
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Always show dummy data for demonstration
        setTimeout(() => {
            const dummyOrderData = {
                order_number: 'ORD-2025-124578',
                status: 'delivered',
                created_at: '2025-12-15T10:00:00Z',
                customer: {
                    full_name: 'أميمة حسن'
                },
                address: {
                    address_line: 'طريق الوصول، حي 1، دبي، الإمارات العربية المتحدة'
                },
                status_histories: [
                    { status: 'pending', created_at: '2025-12-15T10:00:00Z' },
                    { status: 'confirmed', created_at: '2025-12-15T14:00:00Z' },
                    { status: 'processing', created_at: '2025-12-16T09:00:00Z' },
                    { status: 'shipped', created_at: '2025-12-16T16:00:00Z' },
                    { status: 'out_for_delivery', created_at: '2025-12-17T08:00:00Z' },
                    { status: 'delivered', created_at: '2025-12-18T12:00:00Z' }
                ],
                items: [
                    {
                        id: 1,
                        product: {
                            name: 'سكراب ميديكال',
                            images: ['/image/staf1.jpg']
                        },
                        product_variant: {
                            size: 'M',
                            color: 'أسود'
                        },
                        unit_price: 250,
                        quantity: 1
                    },
                    {
                        id: 2,
                        product: {
                            name: 'سكراب ميديكال',
                            images: ['/image/staf1.jpg']
                        },
                        product_variant: {
                            size: 'M',
                            color: 'أسود'
                        },
                        unit_price: 250,
                        quantity: 1
                    }
                ],
                subtotal: 500,
                shipping: 20,
                total: 520
            };
            setOrderData(dummyOrderData);
            setLoading(false);
        }, 500);
    }, []);

    const getStatusProgress = (status) => {
        const statusMap = {
            'pending': 25,
            'processing': 50,
            'shipped': 75,
            'out_for_delivery': 85,
            'delivered': 100,
            'cancelled': 0
        };
        return statusMap[status] || 0;
    };

    const getStatusText = (status) => {
        const statusTexts = {
            'pending': 'في الانتظار',
            'confirmed': 'تم التاكيد',
            'processing': 'قيد المعالجة',
            'shipped': 'تم الشحن',
            'out_for_delivery': 'في طريقها للتسليم',
            'delivered': 'تم التسليم',
            'cancelled': 'ملغي'
        };
        return statusTexts[status] || status;
    };

    const getStatusDate = (status, statusHistories) => {
        const history = statusHistories.find(h => h.status === status);
        return history ? new Date(history.created_at).toLocaleDateString('ar-SA', { year: 'numeric', month: '2-digit', day: '2-digit' }) : '';
    };

    const order = orderData ? {
        number: orderData.order_number,
        date: new Date(orderData.created_at).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' }),
        status: getStatusText(orderData.status),
        progress: getStatusProgress(orderData.status),
        steps: [
            { title: 'تم تقديم الطلب', completed: true, date: getStatusDate('pending', orderData.status_histories), icon: Package },
            { title: 'تم التأكيد', completed: orderData.status !== 'pending', date: orderData.status !== 'pending' ? getStatusDate('confirmed', orderData.status_histories) : '', icon: CheckCircle },
            { title: 'قيد المراجعة', completed: ['processing', 'shipped', 'out_for_delivery', 'delivered'].includes(orderData.status), date: ['processing', 'shipped', 'out_for_delivery', 'delivered'].includes(orderData.status) ? getStatusDate('processing', orderData.status_histories) : '', icon: Settings },
            { title: 'تم الشحن', completed: ['shipped', 'out_for_delivery', 'delivered'].includes(orderData.status), date: ['shipped', 'out_for_delivery', 'delivered'].includes(orderData.status) ? getStatusDate('shipped', orderData.status_histories) : '', icon: Truck },
            { title: 'في طريقها للتسليم', completed: ['out_for_delivery', 'delivered'].includes(orderData.status), date: ['out_for_delivery', 'delivered'].includes(orderData.status) ? getStatusDate('out_for_delivery', orderData.status_histories) : '', icon: MapPin },
            { title: 'تم التسليم', completed: orderData.status === 'delivered', date: orderData.status === 'delivered' ? getStatusDate('delivered', orderData.status_histories) : '', icon: Home }
        ],
        shipping: {
            method: 'الشحن السريع',
            recipient: orderData.customer.full_name,
            address: orderData.address.address_line,
            expected: '11-2-2026'
        },
        items: orderData.items.map(item => ({
            id: item.id,
            name: item.product.name,
            price: parseFloat(item.unit_price),
            qty: item.quantity,
            size: item.product_variant ? item.product_variant.size : '',
            color: item.product_variant ? item.product_variant.color : '',
            image: item.product.images ? item.product.images[0] : '/image/staf1.jpg'
        })),
        totals: {
            subtotal: orderData.subtotal,
            shipping: orderData.shipping,
            total: orderData.total
        }
    } : {
        number: 'ORD-2025-124578',
        date: '15 ديسمبر 2025',
        status: 'في طريقه الاستلام',
        progress: 75,
        steps: [
            { title: 'تم تقديم الطلب', completed: true, date: '2025-12-15', icon: Package },
            { title: 'تم التأكيد', completed: true, date: '2025-12-15', icon: Settings },
            { title: 'قيد المراجعة', completed: true, date: '2025-12-16', icon: Settings },
            { title: 'تم الشحن', completed: true, date: '2025-12-16', icon: Truck },
            { title: 'في طريقها للتسليم', completed: true, date: '2025-12-17', icon: Truck },
            { title: 'تم التسليم', completed: false, date: '2025-12-18', icon: Home }
        ],
        shipping: {
            method: 'الشحن السريع',
            recipient: 'أميمة حسن',
            address: 'طريق الوصول، حي 1، دبي، الإمارات العربية المتحدة',
            expected: '11-2-2026'
        },
        items: [
            { id: 1, name: 'سكراب ميديكال', price: 250, qty: 1, size: 'M', color: 'أسود', image: '/image/staf1.jpg' },
            { id: 2, name: 'سكراب ميديكال', price: 250, qty: 1, size: 'M', color: 'أسود', image: '/image/staf1.jpg' }
        ],
        totals: { subtotal: 500, shipping: 20, total: 520 }
    };

    if (loading) {
        return (
            <>
                <Header showSearch={true} />
                <div className="pb-24 container mx-auto px-6" dir="rtl" style={{ marginTop: '130px' }}>
                    <div className="max-w-6xl mx-auto flex justify-center items-center min-h-[50vh]">
                        <div className="text-xl" style={{ fontFamily: 'Cairo' }}>جاري التحميل...</div>
                    </div>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Header showSearch={true} />
                <div className="pb-24 container mx-auto px-6" dir="rtl" style={{ marginTop: '130px' }}>
                    <div className="max-w-6xl mx-auto flex justify-center items-center min-h-[50vh]">
                        <div className="text-xl text-red-500" style={{ fontFamily: 'Cairo' }}>{error}</div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Header showSearch={true} />
            <div className="pb-24 container mx-auto px-6" dir="rtl" style={{ marginTop: '130px' }}>
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-right mb-2"
                        style={{
                            fontFamily: 'Cairo',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            fontSize: '48px',
                            leadingTrim: 'none',
                            lineHeight: '100%',
                            letterSpacing: '0px',
                            marginTop: '30px'
                        }}
                    >تتبع طلبك</h1>

                    <p className="text-right mb-8"
                        style={{
                            fontFamily: 'Cairo',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontSize: '24px',
                            leadingTrim: 'none',
                            lineHeight: '300%',
                            letterSpacing: '0px',
                            color: '#6B7280'
                        }}
                    >تابع رحلة طلبك وأدر المرتجعات</p>



                    {/* Order Info */}
                    <div className="bg-gradient-to-b from-[#022B3A] to-[#1F7A8C] rounded-2xl p-6 flex justify-between items-center mb-8 text-white">
                        <div>
                            <div className="font-semibold text-xl" style={{ marginBottom: '10px', fontWeight: 'bolder', marginRight: '30px' }}>رقم الطلب</div>
                            <div className="text-xl">{order.number}</div>
                        </div>

                        <div>
                            <div className="font-semibold text-xl" style={{ marginBottom: '10px', fontWeight: 'bolder', marginRight: '10px' }}>تاريخ الطلب</div>
                            <div className="text-xl">{order.date}</div>
                        </div>

                        <div className="text-center" >
                            <div className="font-semibold text-xl mb-2" style={{ marginBottom: '10px', fontWeight: 'bolder' }}>الحالة الحالية</div>
                            <span className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                {order.status}
                            </span>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="bg-white rounded-2xl p-8 mb-8 text-black">
                        <h3 className="text-2xl font-bold mb-12 font-[Cairo] text-right">
                            رحلة الطلب
                        </h3>

                        <div className="relative" dir="rtl">
                            {/* الخط */}
                            {order.steps.slice(0, -1).map((step, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute top-7 h-[3px] rounded-full ${step.completed ? 'bg-blue-500' : 'bg-gray-300'
                                        }`}
                                    style={{ right: `${(idx * 20)}%`, width: '20%' }}
                                ></div>
                            ))}

                            <div className="flex justify-between relative z-10">
                                {order.steps.map((step, idx) => {
                                    const Icon = step.icon;

                                    return (
                                        <div
                                            key={idx}
                                            className="flex flex-col items-center w-full"
                                        >
                                            {/* الدائرة */}
                                            <div
                                                className={`rounded-full flex items-center justify-center mb-3 ${step.completed
                                                    ? 'bg-blue-500 text-white'
                                                    : 'bg-gray-200 text-gray-400'
                                                    } w-14 h-14`}
                                            >
                                                <Icon size={22} />
                                            </div>

                                            {/* العنوان */}
                                            <div
                                                className={`font-semibold text-sm font-[Cairo] text-center ${step.completed
                                                    ? 'text-black'
                                                    : 'text-gray-400'
                                                    }`}
                                            >
                                                {step.title}
                                            </div>

                                            {/* التاريخ */}
                                            <div className="mt-1 font-[Cairo] text-xs text-gray-400">
                                                {step.date}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-2xl border p-6 shadow-sm mb-6">
                        <h3 style={{ fontFamily: 'Cairo', fontWeight: 700, fontSize: '26px', textAlign: 'right', marginBottom: '16px' }}>معلومات الشحن</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-right text-sm text-gray-700 items-start">
                            <div className="md:text-right">
                                <div className="text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'Medium', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px' }}>اسم العميل</div>
                                <div className="mt-2" style={{ display: 'block', width: '452px', height: '24px', whiteSpace: 'normal', wordBreak: 'break-word', transform: 'rotate(0deg)', opacity: 1, overflow: 'hidden', fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'Bold', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px' }}>{order.shipping.recipient}</div>
                            </div>

                            <div className="text-right">
                                <div className="text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'Medium', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px' }}>شركه الشحن</div>
                                <div className="mt-2" style={{ display: 'block', width: '452px', height: '24px', whiteSpace: 'normal', wordBreak: 'break-word', transform: 'rotate(0deg)', opacity: 1, overflow: 'hidden', fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'Bold', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', marginRight: '10px', textAlign: 'right' }}>{order.shipping.company || 'وصلها'}</div>
                            </div>

                            <div className="md:text-right">
                                <div className="flex items-start justify-end gap-6">
                                    <div>
                                        <div className="text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}>طريقة الدفع</div>
                                        <div className="mt-2" style={{ display: 'block', width: '220px', lineHeight: '24px', whiteSpace: 'normal', wordBreak: 'break-word', transform: 'rotate(0deg)', opacity: 1, overflow: 'hidden', fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'Bold', fontSize: '16px', lineHeight: '24px', textAlign: 'right', marginRight: '10px' }}>ماستر كارد</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}>تاريخ التوصيل المتوقع</div>
                                        <div className="mt-2" style={{ display: 'block', width: '220px', lineHeight: '24px', whiteSpace: 'normal', wordBreak: 'break-word', transform: 'rotate(0deg)', opacity: 1, overflow: 'hidden', fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'Bold', fontSize: '16px', lineHeight: '24px', textAlign: 'right' }}>{order.shipping.expected}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-start-1 md:mt-4">
                                <div className="text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'Medium', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px' }}>عنوان التسليم</div>
                                <div className="mt-2" style={{ display: 'block', width: '452px', height: '24px', whiteSpace: 'normal', wordBreak: 'break-word', transform: 'rotate(0deg)', opacity: 1, overflow: 'hidden', fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'Bold', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px' }}>{order.shipping.address}</div>
                            </div>


                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border p-6 shadow-sm mb-6" style={{ border: '1px solid #EFEFEF' }}>
                        <h3 style={{ fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'Bold', fontSize: '32px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right', marginBottom: '16px' }}>عناصر الطلب</h3>
                        <div className="space-y-4">
                            {order.items.map(it => (
                                <div key={it.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center gap-4">
                                        <img src={it.image} alt="item" className="w-20 h-20 object-cover rounded" />
                                        <div className="text-right">
                                            <div style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px' }}>{it.name}</div>
                                            <div className="text-xs text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px' }}>المقاس: <span style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'Medium', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', color: '#000000' }}>{it.size}</span></div>
                                            <div className="text-xs text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px' }}>اللون: <span style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'Medium', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', color: '#000000' }}>{it.color}</span></div>
                                            <div className="text-xs text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px' }}>الكمية: <span style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'Medium', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', color: '#000000' }}>{it.qty}</span></div>
                                        </div>

                                    </div>
                                    <div className="text-right">
                                        <div style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'Regular', fontSize: '32px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', display: 'inline-flex', alignItems: 'center', marginLeft: '10px' }}>{it.price} <img src="/image/ry.jpeg" alt="ريال" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginLeft: '4px' }} /></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-xl border border-gray-300 p-8 flex flex-col justify-center">
                        <div className="space-y-4 text-right">
                            <div className="flex justify-between items-center" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'Regular', fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>
                                <span className="text-gray-700">المبلغ الإجمالي</span>
                                <span className="text-gray-700" style={{ display: 'inline-flex', alignItems: 'center', fontWeight: 600 }}>
                                    {order.totals.subtotal}
                                    <img src="/image/ry.jpeg" alt="ريال" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginLeft: '4px' }} />
                                </span>
                            </div>
                            <div className="flex justify-between items-center" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'Regular', fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>
                                <span className="text-gray-700">مصاريف التوصيل</span>
                                <span className="text-gray-700" style={{ display: 'inline-flex', alignItems: 'center', fontWeight: 600 }}>
                                    {order.totals.shipping}
                                    <img src="/image/ry.jpeg" alt="ريال" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginLeft: '4px' }} />
                                </span>
                            </div>
                            <div className="flex justify-between items-center" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'Regular', fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>
                                <span className="text-gray-800">المبلغ كامل</span>
                                <span className="text-gray-800" style={{ display: 'inline-flex', alignItems: 'center', fontWeight: 600 }}>
                                    {order.totals.total}
                                    <img src="/image/ry.jpeg" alt="ريال" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginLeft: '4px' }} />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center" style={{ marginTop: '20px' }}>
                        <button
                            onClick={() => navigate(`/return-request/${orderData?.order_number}`)}
                            disabled={!orderData || orderData.status !== 'delivered'}
                            className={`py-4 px-56 rounded-full transition ${orderData && orderData.status === 'delivered' ? 'bg-blue-300 hover:bg-blue-400 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                            style={{ background: '#1F7A8C', color: '#F6F6F6', fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '32px', lineHeight: '30px', letterSpacing: '0px', textAlign: 'center', marginTop: '30px', borderRadius: '5px', width: '100%' }}>المرتجعات متاحة بعد التسليم</button>
                    </div>

                </div>
            </div>
        </>
    );
}
