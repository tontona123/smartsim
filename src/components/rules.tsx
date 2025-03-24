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
    <div className="max-w-5xl mx-auto my-10 p-8 bg-gradient-to-br from-blue-100 to-blue-50 shadow-lg rounded-lg">
      {/* Header Section */}
      <h1 className="text-2xl font-extrabold text-red-600 text-center drop-shadow-lg">
        📌 ระเบียบกฎเกณฑ์การจองห้อง และการใช้งานหุ่นฝึกหัตถการ
      </h1>
      {/* Main Content */}
      <div className="mt-8 space-y-8">
        {/* Section 1: การจองห้องและหุ่นฝึกหัตถการ */}
        <section className="p-6 bg-white rounded-lg shadow-md border-l-8 border-blue-500">
          <h2 className="text-2xl font-bold text-blue-700 flex items-center">
            1️⃣ การจองห้อง และหุ่นฝึกหัตถการ
          </h2>
          <ul className="list-none mt-3 space-y-3 text-gray-700">
            <li>
            <strong>1.1</strong> การกำหนดลำดับความสำคัญของผู้จอง : ได้กำหนดการจองห้อง/หุ่น
              สำหรับการเรียนการสอนของนิสิตแพทย์ เป็นลำดับความสำคัญแรก
            </li>
            <li>
            <strong>1.2.</strong> เวลาในการจองห้อง : ผู้ใช้งานต้องจองห้องล่วงหน้าไม่น้อยกว่า 7
              วันทำการ (แต่ต้องเป็นภายในปีการศึกษาปัจจุบันเท่านั้น)
            </li>
            <li>
            <strong>1.3.</strong> เลือกช่วงเวลาในการเตรียมห้องให้เหมาะสม
              (โดยไม่ให้กระทบกับตารางงานเดิมในปฏิทินที่มีอยู่)
            </li>
            <li>
            <strong>1.4.</strong> การยืนยันการจอง :
              การยืนยันการจองห้องจะต้องได้รับการยืนยันผ่านระบบ Smart Sim
              แจ้งเตือนทางอีเมล และตรวจสอบสถานะการจองในระบบ
            </li>
            <li>
            <strong>1.5.</strong> คุณสามารถเพิ่มรายละเอียดได้ล่วงหน้าก่อนวันใช้งาน 3 วัน
              ในเวลาทำการ แต่ไม่สามารถเแก้ไขรายละเอียดการจองที่ยืนยันแล้ว
            </li>
            <li>
            <strong>1.6.</strong> ทำบันทึกข้อความขอความอนุเคราะห์ เรียนถึง รองคณบดี
              ฝ่ายนวัตกรรมแนวบูรณาการและเทคโนโลยีดิจิทัล คณะแพทยศาสตร์ จุฬาฯ
              พร้อมแนบรายละเอียดใบสรุปการขอใช้บริการที่ได้รับทางอีเมล
            </li>
            <li>
            <strong>1.7.</strong> การยกเลิกการจอง : หากต้องการยกเลิกการจองต้องทำผ่านทางระบบ
              Smart Sim ไม่น้อยกว่า 7 วัน เพื่อให้ผู้อื่นมีโอกาสสามารถใช้ห้องได้
              หรือ ทางศูนย์ฯ ยกเลิกการจองจะแจ้งให้ผู้ใช้ทราบอย่างน้อย 30
              ก่อนถึงวันใช้บริการ
            </li>
          </ul>
        </section>

        {/* Section 2: การใช้งานห้องและหุ่น */}
        <section className="p-6 bg-white rounded-lg shadow-md border-l-8 border-purple-500">
          <h2 className="text-2xl font-bold text-purple-700 flex items-center">
            2️⃣ การใช้งานห้องและหุ่น
          </h2>
          <ul className="list-none mt-3 space-y-3 text-gray-700">
            <li> <strong>2.1.</strong> การใช้ห้องที่มีการจองแล้ว ต้องใช้งานภายในเวลาที่กำหนด</li>
            <li>
            <strong>2.2.</strong> การใช้ห้องและหุ่น ควรใช้ตามวัตถุประสงค์ที่ระบุไว้
              ไม่ควรใช้งานอื่นๆที่ไม่ได้รับอนุญาต
            </li>
            <li>
            <strong>2.3.</strong> การใช้ห้องและหุ่น
              ผู้ใช้สามารถตรวจสอบให้ตรงตามต้องการได้ล่วงหน้าเพื่อลดปัญหาความไม่พร้อมในวันใช้บริการ
            </li>
          </ul>
        </section>

        {/* Section 3: การดูแลรักษาห้องและหุ่น */}
        <section className="p-6 bg-white rounded-lg shadow-md border-l-8 border-yellow-500">
          <h2 className="text-2xl font-bold text-yellow-700 flex items-center">
            3️⃣ การดูแลรักษาห้องและหุ่น
          </h2>
          <ul className="list-none mt-3 space-y-3 text-gray-700">
            <li>
            <strong>3.1.</strong> ผู้ใช้ห้องและหุ่น ต้องช่วยดูแลให้อยู่ในสภาพที่ดี
              ไม่ทำให้เกิดความเสียหาย
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
          กรุณาปฏิบัติตามระเบียบการใช้บริการเพื่อให้เกิดประโยชน์สูงสุด
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          className="px-6 py-2 text-blue-700 border-blue-500 hover:bg-blue-100 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> กลับไปที่บริการ
        </Button>
        <Button
          variant="outline"
          className="px-6 py-2 text-blue-700 border-blue-500 hover:bg-blue-100 flex items-center"
        >
          ถัดไป <FaArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default EduRules;
