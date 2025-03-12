import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MedicalRegulations = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 text-center text-2xl font-bold rounded-md shadow-md">
        🏥 ระเบียบการยืมหุ่น/อุปกรณ์ออกนอกศูนย์ฝึกทักษะการแพทย์เสมือนจริง
      </header>

      {/* Main Section */}
      <section className="my-8 px-10">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-blue-700">📌 ข้อกำหนดการยืมหุ่นและอุปกรณ์</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-6">
            {/* การขออนุญาตยืม */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">📌 การขออนุญาตยืม</h3>
             <ul className="list-disc text-gray-700 mt-2 space-y-2 ml-0 md:ml-10">
                <li>ตรวจสอบรายการที่สามารถยืมได้ผ่านระบบ Smart Sim</li>
                <li>หากเป็นหุ่นที่มีมูลค่าสูง ต้องผ่านการพิจารณาจากคณะกรรมการ</li>
                <li>ต้องยื่นคำขอล่วงหน้าอย่างน้อย 7 วัน</li>
              </ul>
            </div>

            {/* การพิจารณาคำขอ */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">📌 การพิจารณาคำขอ</h3>
             <ul className="list-disc text-gray-700 mt-2 space-y-2 ml-0 md:ml-10">
                <li>ศูนย์ฯ ตรวจสอบว่าหุ่น/อุปกรณ์พร้อมให้ยืมหรือไม่</li>
                <li>อนุญาตเฉพาะกลุ่มบุคลากรทางการแพทย์ และมีค่าใช้จ่ายสำหรับบุคคลภายนอก</li>
              </ul>
            </div>

            {/* การอนุมัติคำขอยืม */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">📌 การอนุมัติคำขอยืม</h3>
             <ul className="list-disc text-gray-700 mt-2 space-y-2 ml-0 md:ml-10">
                <li>แจ้งรายละเอียดทางอีเมล รวมถึงวันเวลาที่ต้องคืน</li>
              </ul>
            </div>

            {/* การรับทรัพย์สิน */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">📌 การรับทรัพย์สิน</h3>
             <ul className="list-disc text-gray-700 mt-2 space-y-2 ml-0 md:ml-10">
                <li>ต้องมารับของตามเวลาที่กำหนด และลงชื่อยืนยัน</li>
                <li>อาจต้องมีเอกสารรับรองในกรณีหุ่นมูลค่าสูง</li>
              </ul>
            </div>

            {/* การดูแลทรัพย์สิน */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">📌 การดูแลทรัพย์สิน</h3>
             <ul className="list-disc text-gray-700 mt-2 space-y-2 ml-0 md:ml-10">
                <li>ต้องดูแลไม่ให้เสียหาย หรือผิดวัตถุประสงค์</li>
                <li>หากเสียหายหรือสูญหาย ต้องแจ้งเจ้าหน้าที่และรับผิดชอบค่าใช้จ่าย</li>
              </ul>
            </div>

            {/* การคืนทรัพย์สิน */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">📌 การคืนทรัพย์สิน</h3>
             <ul className="list-disc text-gray-700 mt-2 space-y-2 ml-0 md:ml-10">
                <li>คืนภายในเวลาที่กำหนด</li>
                <li>อาจมีการตรวจสอบสภาพก่อนคืน</li>
              </ul>
            </div>

            {/* การติดตามการคืน */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">📌 การติดตามการคืน</h3>
             <ul className="list-disc text-gray-700 mt-2 space-y-2 ml-0 md:ml-10">
                <li>หากไม่คืนตามกำหนด อาจถูกห้ามยืมในอนาคต</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* หมายเหตุ */}
      <div className="p-6 bg-yellow-100 text-yellow-800 rounded-lg text-center shadow-md mt-6">
        <strong>📢 หมายเหตุ : </strong> การยืมหุ่น/อุปกรณ์ ไม่อนุญาตให้ใช้ในลักษณะส่วนตัว
      </div>
    </div>
  );
};

export default MedicalRegulations;
