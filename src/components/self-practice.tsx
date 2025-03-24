import React from "react";
import { Button } from "@/components/ui/button";
import {
  FaClipboardList,
  FaCheckCircle,
  FaTimesCircle,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

const EduRules = () => {
  return (
    <div className="max-w-5xl mx-auto my-10 p-8 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg">
      {/* Header Section */}
      <h1 className="text-2xl font-extrabold text-red-600 text-center drop-shadow-lg">
        📌 ระเบียบกฎเกณฑ์ในการใช้บริการ Self-Practice
      </h1>

      {/* Main Content */}
      <div className="mt-8 space-y-8">
        {/* Section 1: การจองห้องและหุ่นฝึกหัตถการ */}
        <section className="p-6 bg-white rounded-lg shadow-md border-l-8 border-blue-500">
          <h2 className="text-2xl font-bold text-blue-700 flex items-center">
            1️⃣ การจองฝึกหัตถการ Self-Practice
          </h2>
          <ul className="list-none mt-3 space-y-3 text-gray-700">
            <li>
              <strong>1.1.</strong> การกำหนดลำดับความสำคัญของการฝึกหัตถการ
              Self-Practice ของนิสิตแพทย์ ถือเป็นลำดับความสำคัญแรก
              และการจองฝึกแต่ละครั้งนิสิตต้องมีอย่างน้อย 2 คนขึ้นไป
            </li>
            <li>
              <strong>1.2.</strong> เวลาในการจองฝึกหัตถการ
              นิสิตจะต้องตรวจสอบวันที่เปิดให้เข้าซ้อมจากปฏิทินและทำการจองล่วงหน้าอย่างน้อย
              1 วันทำการ โดยไม่มีการรับ Walk-in
            </li>
            <li>
              <strong>1.3.</strong> การยืนยันการจองจะต้องได้รับการยืนยันผ่านระบบ
              Smart Sim แจ้งเตือนทางอีเมล และสามารถตรวจสอบสถานะการจองได้ในระบบ
            </li>
            <li>
              <strong>1.4.</strong> การยกเลิกการจอง
              หากต้องการยกเลิกการจองต้องทำผ่านทางระบบ Smart Sim ไม่น้อยกว่า 1
              วัน เพื่อให้ผู้อื่นมีโอกาสสามารถใช้ห้องได้ หรือ หากทางศูนย์ฯ
              จำเป็นต้องยกเลิกการจองจะแจ้งให้ผู้จองทราบล่วงหน้า
            </li>
          </ul>
        </section>

        {/* Section 2: การใช้งานห้องและหุ่น */}
        <section className="p-6 bg-white rounded-lg shadow-md border-l-8 border-purple-500">
          <h2 className="text-2xl font-bold text-purple-700 flex items-center">
            2️⃣ การใช้งานห้อง/หุ่น
          </h2>
          <ul className="list-none mt-3 space-y-3 text-gray-700">
            <li>
              <strong>2.1.</strong> การใช้ห้อง/หุ่น ที่มีการจองแล้ว
              ต้องใช้งานภายในเวลาที่กำหนด (นอกเวลาทำการ 17.00-20.00 น.)
              หากจองแล้วไม่มาและไม่ได้แจ้งยกเลิก
              ขอสงวนสิทธิ์ไม่อนุญาตให้จองห้องฝึกหัตถการนอกเวลาเป็นเวลา 1 เดือน
            </li>
            <li>
              <strong>2.2.</strong> การใช้ห้อง/หุ่น
              ควรใช้ตามวัตถุประสงค์ที่ระบุไว้
              ไม่ควรใช้งานอื่นๆที่ไม่ได้รับอนุญาต
            </li>
          </ul>
        </section>

        {/* Section 3: การดูแลรักษาห้องและหุ่น */}
        <section className="p-6 bg-white rounded-lg shadow-md border-l-8 border-yellow-500">
          <h2 className="text-2xl font-bold text-yellow-700 flex items-center">
            3️⃣ การดูแลรักษาห้อง/หุ่น
          </h2>
          <ul className="list-none mt-3 space-y-3 text-gray-700">
            <li>
              <strong>3.1.</strong> ผู้ใช้ห้อง/หุ่น
              ต้องช่วยดูแลให้อยู่ในสภาพที่ดี ไม่ทำให้เกิดความเสียหาย
            </li>
            <li>
              <strong>3.2.</strong> หากพบความเสียหาย ต้องแจ้งเจ้าหน้าที่ทันที
              เพื่อดำเนินการซ่อมบำรุงให้สามารถพร้อมใช้งานในคร่าวต่อไป
            </li>
          </ul>
        </section>

        {/* หมายเหตุ */}
        <div className="p-6 bg-yellow-100 text-yellow-800 rounded-lg text-center shadow-md">
          <strong>📢 หมายเหตุ:</strong>{" "}
          กรุณาปฏิบัติตามระเบียบและข้อกำหนดการใช้งาน เพื่อให้เกิดประโยชน์สูงสุด
        </div>
      </div>

    </div>
  );
};

export default EduRules;
