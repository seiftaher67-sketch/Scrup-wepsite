import React, { useState } from "react";

export default function SortFilter({ onSort }) {
    const [open, setOpen] = useState(false);

    const handleSelect = (type) => {
        onSort(type);     // تبعت نوع الفلترة للأب
        setOpen(false);   // تقفل القائمة
    };

    return (
        <div style={{ position: "relative", width: "260px", fontFamily: "Cairo" }}>

            {/* زر فرز حسب */}
            <button
                onClick={() => setOpen(!open)}
                style={{
                    width: "100%",
                    height: "56px",
                    borderRadius: "14px",
                    border: "none",
                    background: "#EDEDED",
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px"
                }}
            >
                فرز حسب
                <span style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
                    ▲
                </span>
            </button>

            {/* القائمة */}
            {open && (
                <div
                    style={{
                        position: "absolute",
                        top: "65px",
                        width: "100%",
                        background: "#fff",
                        borderRadius: "14px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                        overflow: "hidden",
                        zIndex: 100
                    }}
                >
                    <div style={itemStyle} onClick={() => handleSelect("highToLow")}>
                        السعر : من الاعلي الي الارخص
                    </div>

                    <div style={itemStyle} onClick={() => handleSelect("lowToHigh")}>
                        السعر : من الارخص الي الاعلي
                    </div>

                    <div style={itemStyle} onClick={() => handleSelect("bestSeller")}>
                        الافضل مبيعا
                    </div>
                </div>
            )}
        </div>
    );
}

const itemStyle = {
    padding: "16px",
    fontSize: "18px",
    cursor: "pointer",
    textAlign: "center",
    borderBottom: "1px solid #eee"
};
