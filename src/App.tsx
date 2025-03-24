import React, { useState } from "react";
import { FaClipboardList, FaBook, FaUserCheck, FaTools } from "react-icons/fa";

import Borrowing from "./components/borrowing";
import Rules from "./components/rules";
import Requestwork from "./components/request-work";
import Selfpractice from "./components/self-practice";

// ส่วนตัวอย่างสั้น ๆ ในการใส่ข้อมูลแต่ละแท็บ
// คุณอาจจะแยกเป็น Component หรือดึงมาจากไฟล์อื่นได้เพื่อความเป็นระเบียบ

function TabBorrowing() {
  return (
    <div>
      <Borrowing />
    </div>
  );
}

function TabRules() {
  return (
    <div>
      <Rules />
    </div>
  );
}

function TabRequestWork() {
  return (
    <div>
      <Requestwork />
    </div>
  );
}

function TabSelfPractice() {
  return (
    <div>
      <Selfpractice />
    </div>
  );
}

const ModernTabs = () => {
  // สร้าง state เก็บ index ของแท็บที่เลือก
  const [activeTab, setActiveTab] = useState(0);

  // สร้างรายการแท็บ และ component ที่จะ render
  const tabs = [
    { label: "ระเบียบการยืมหุ่น", component: <TabBorrowing /> },
    { label: "ระเบียบกฎเกณฑ์การจองห้อง", component: <TabRules /> },
    { label: "ระเบียบการขอดูงาน", component: <TabRequestWork /> },
    { label: "ระเบียบกฎเกณฑ์ในการใช้บริการ", component: <TabSelfPractice /> },
  ];

  return (
    <div className="max-w-5xl mx-auto my-10 p-8 bg-gradient-to-br from-blue-100 to-blue-50 shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-red-600 text-center drop-shadow-lg mb-8">
        กฎระเบียบการใช้งาน
      </h1>

      {/* แถวของปุ่ม Tab */}
      <div
        className="flex space-x-4 border-b border-gray-300 mb-6"
        style={{ justifyContent: "center" }}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 font-semibold ${
              activeTab === index
                ? "border-b-4 border-red-600 text-red-600"
                : "text-gray-600 hover:text-red-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ส่วนเนื้อหาที่จะแสดงตามแท็บ */}
      <div>{tabs[activeTab].component}</div>
    </div>
  );
};

export default ModernTabs;
