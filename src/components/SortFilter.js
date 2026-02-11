import React, { useState, useEffect, useRef } from "react";

export default function SortFilter({ onSort }) {
    const [open, setOpen] = useState(true);
    const [selectedText, setSelectedText] = useState("فرز حسب");
    const dropdownRef = useRef(null);

    const handleSelect = (type) => {
        onSort(type);     // تبعت نوع الفلترة للأب
        if (type === "highToLow") {
            setSelectedText("السعر : من الاعلي الي الارخص");
        } else if (type === "lowToHigh") {
            setSelectedText("السعر : من الارخص الي الاعلي");
        } else if (type === "bestSeller") {
            setSelectedText("الافضل مبيعا");
        }
        setOpen(false);   // تقفل القائمة
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div style={{ position: "relative", width: "260px", fontFamily: "Cairo", marginLeft: "70px" }}>

            {/* زر فرز حسب */}
            <div
                onClick={() => setOpen(!open)}
                style={{
                    width: "120%",
                    height: "56px",
                    borderRadius: "14px",
                    background: "#EDEDED",
                    fontSize: "20px",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    cursor: "pointer"
                }}
            >
                {selectedText}
                <span
                    style={{
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s"
                    }}
                >
                    ▼
                </span>
            </div>

            {/* القائمة */}
            {open && (
                <div
                    ref={dropdownRef}
                    style={{
                        position: "absolute",
                        top: "65px",
                        width: "100%",
                        background: "#fff",
                        borderRadius: "14px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                        overflow: "hidden",
                        zIndex: 1000
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
