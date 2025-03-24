import React from "react";
import { Button } from "@/components/ui/button";
import { FaClipboardList, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const EduRules = () => {
  return (
    <div className="max-w-5xl mx-auto my-10 p-8 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg">
      {/* Header Section */}
      <h1 className="text-2xl font-extrabold text-red-600 text-center drop-shadow-lg">
        📌
        ระเบียบการยืมหุ่น/อุปกรณ์เพื่อใช้ภายนอกศูนย์ฝึกทักษะการแพทย์เสมือนจริง
      </h1>

      {/* Main Content */}
      <div className="mt-8 space-y-8">
        {/* Section: ระเบียบการขอดูงาน */}
        <section className="p-6 bg-white rounded-lg shadow-md border-l-8 border-blue-500">
          <h2 className="text-2xl font-bold text-blue-700 flex items-center">
            <FaClipboardList className="mr-2" /> ระเบียบการยืม
          </h2>
          <ul className="mt-3 space-y-4 text-gray-700">
            <li className="text-lg font-semibold">1. การขออนุญาตยืม:</li>
            <ul className="ml-10 list-disc space-y-2 text-gray-700">
              <li className="text-md">
                ผู้ขอยืมสามารถตรวจสอบรายการหุ่น/อุปกรณ์ที่ทางศูนย์ฯสามารถให้ยืมได้
                ผ่านระบบ Smart Sim
                หากเป็นหุ่นที่นอกเหนือจากรายการและมีมูลค่าสูงต้องผ่านการพิจารณาโดยคณะกรรมการ
                CHAMPS ก่อน
              </li>
              <li className="text-md">
                ผู้ขอยืมต้องกรอกรายละเอียดผ่านระบบ Smart Sim
                โดยต้องยื่นคำขอล่วงหน้าอย่างน้อย 7 วัน ก่อนวันยืม
              </li>
            </ul>

            <li className="text-lg font-semibold">2. การพิจารณาคำขอ</li>
            <ul className="ml-10 list-disc space-y-2 text-gray-700">
              <li className="text-md">
                ศูนย์ฯจะตรวจสอบว่าหุ่น/อุปกรณ์พร้อมให้ยืมในช่วงเวลาที่ขอยืมได้หรือไม่
              </li>
              <li className="text-md">
                ศูนย์ฯจะพิจารณาให้ยืมหุ่น/อุปกรณ์เพื่อวัตถุประสงคฺ์สำหรับการเรียนการสอนนิสิตแพทย์เป็นลำดับแรก
                หากใช้เพื่อวัตถุประสงค์อื่นนอกเหนือจากการเรียนการสอน
                การยืมหุ่น/อุปกรณ์จำเป็นต้องมีค่าใช้จ่ายตามที่คณะกรรมการ.CHAMPS
                กำหนด
              </li>
              <li className="text-md">
                การยืมหุ่น/อุปกรณ์ ให้ยืมใช้ในนามหน่วยงาน
                ไม่อนุญาตให้ยืมเพื่อใช้ในลักษณะส่วนตัว
              </li>
            </ul>

            <li className="text-lg font-semibold">3. การอนุมัติคำขอยืม</li>
            <ul className="ml-10 list-disc space-y-2 text-gray-700">
              <li className="text-md">
                หากคำขอยืมได้รับการอนุมัติ ให้ผู้ขอยืมจัดทำบันทึก เรียนถึง
                รองคณบดี ฝ่ายนวัตกรรมแนวบูรณาการและเทคโนโลยีดิจิทัล
                คณะแพทยศาสตร์ จุฬาฯ
                พร้อมแนบรายละเอียดใบสรุปการขอยืมที่ได้รับทางอีเมล
              </li>
              <li className="text-md">
                ผู้ขอยืมจะต้องไปรับหุ่น/อุปกรณ์ในวันเวลาที่กำหนด
                โดยจะต้องรับทราบรายละเอียดเกี่ยวกับหุ่น/อุปกรณ์ที่ได้รับอนุญาตให้ยืม
                ที่ทางศูนย์ฯลงข้อมูลไว้ในใบสรุปการขอยืมก่อนที่จะทำการยืม
              </li>
            </ul>

            <li className="text-lg font-semibold">4.การดูแลหุ่นและอุปกรณ์</li>
            <ul className="ml-10 list-disc space-y-2 text-gray-700">
              <li className="text-md">
                ผู้ยืมต้องดูแลหุ่น/อุปกรณ์ที่ยืมอย่างระมัดระวัง
                ไม่ให้เสียหายหรือผิดวัตถุประสค์การใช้งาน
              </li>
              <li className="text-md">
                หากหุ่น/อุปกรณ์เกิดการชำรุด
                ผู้ยืมจะต้องแจ้งให้เจ้าหน้าที่ศูนย์ฯรับทราบทันที
                และหากเกิดความเสียหายรุณแรงหรือสูญหาย
                ต้องผ่านการพิจารราโดคณะกรรมการ
                อาจต้องรับผิดชอบค่าใช้จ่ายในการซ่อมแซมหรือทดแทน
              </li>
            </ul>

            <li className="text-lg font-semibold">5. การคืนหุ่นและอุปกรณ์</li>
            <ul className="ml-10 list-disc space-y-2 text-gray-700">
              <li className="text-md">
                ผู้ยืมต้องคืนหุ่น/อุปกรณ์ตามวันและเวลาที่กำหนดในคำขอยืม
              </li>
              <li className="text-md">
                ก่อนการคืน เจ้าหน้าที่ศูนย์ฯจะต้องตรวจสอบหุ่น/อุปกรณ์
                ว่ามีการชำรุดเสียหายหรือไม่
              </li>
            </ul>

            <li className="text-lg font-semibold">6. การติดตามการคืน</li>
            <ul className="ml-10 list-disc space-y-2 text-gray-700">
              <li className="text-md">
                หากผู้ขอยืมไม่คืนหุ่น/อุปกรณ์ภายในระยะเวลาที่กำหนด
                อาจมีการติดตามหรือห้ามยืมหุ่น/อุปกรณ์ในอนาคต
              </li>
            </ul>
          </ul>
        </section>

        {/* หมายเหตุ */}
        <div className="p-6 bg-yellow-100 text-yellow-800 rounded-lg text-center shadow-md">
          <strong>📢 หมายเหตุ:</strong> การยืมหุ่น/อุปกรณ์
          ไม่อนุญาตให้ยืมเพื่อใช้ในลักษณะส่วนตัว
        </div>
      </div>


    </div>
  );
};

export default EduRules;
