import React from "react";
import { Button } from "@/components/ui/button";
import { FaClipboardList, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const EduRules = () => {
    return (
        <div className="max-w-5xl mx-auto my-10 p-8 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg">
            {/* Header Section */}
            <h1 className="text-2xl font-extrabold text-red-600 text-center drop-shadow-lg">
                📌 ระเบียบการขอดูงาน
            </h1>

            {/* Main Content */}
            <div className="mt-8 space-y-8">
                
                {/* Section: ระเบียบการขอดูงาน */}
                <section className="p-6 bg-white rounded-lg shadow-md border-l-8 border-blue-500">
                    <h2 className="text-2xl font-bold text-blue-700 flex items-center">
                        <FaClipboardList className="mr-2" /> ข้อกำหนดการขอดูงาน
                    </h2>
                    <ul className="mt-3 space-y-4 text-gray-700">
                        <li className="text-lg font-semibold">1. การยื่นคำขอ</li>
                        <p className="ml-6">ขอความกรุณาผู้ที่ต้องการขอดูงานต้องยื่นคำขอผ่านทางระบบ <strong>Smart Sim</strong> ล่วงหน้า <strong>7 วัน</strong></p>

                        <li className="text-lg font-semibold">2. ระยะเวลาในการขอดูงาน</li>
                        <p className="ml-6">ผู้ขอดูงานสามารถตรวจสอบวันดูงานได้ทาง <strong>ปฏิทินของศูนย์ฯ</strong></p>

                        <li className="text-lg font-semibold">3. การพิจารณาคำขอ</li>
                        <p className="ml-6">หลังจากที่ยื่นคำขอผ่านทางระบบแล้ว ทางศูนย์จะพิจารณาคำขอตามความเหมาะสม อาจจะพิจารณาอนุมัติหรือไม่อนุมัติ แล้วจึงแจ้งผลตอบกลับทางอีเมล์ภายใน 3 วัน  พร้อมให้รายละเอียดเกี่ยวกับการดูงาน ให้ผู้ขอดูงานทำบันทึก ดังนี้
                        </p>
                        <ul className="ml-10 list-disc space-y-2 text-gray-700">
                            <li className="text-md"><strong>3.1</strong> เรียนคณบดี คณะแพทยศาสตร์ จุฬาฯ เพื่อขอเยี่ยมชมศูนย์ฝึกทักษะการแพทย์เสมือนจริง อาคารภูมิสิริ ชั้น 11 โซน C คณะแพทยศาสตร์ จุฬา
                            </li>
                            <li className="text-md"><strong>3.2</strong> เรียนผู้อำนวยการโรงพยาบาลจุฬาลงกรณ์ เพื่อขอเยี่ยมชมศูนย์ฝึกู้ชีพและฝึกทักษะเสมือนจริง อาคาร ส.ธ. ชั้น 16 โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย
                            </li>
                        </ul>

                        <li className="text-lg font-semibold">4. การเข้าชมงาน</li>
                        <p className="ml-6">ขอความกรุณาแต่งกายสุภาพและปฏิบัติตามคำแนะนำหรือข้อควรระวังของศูนย์</p>

                        <li className="text-lg font-semibold">5. การประเมินผล</li>
                        <p className="ml-6">หลังจากการขอดูงานเสร็จสิ้น ขอความกรุณาให้ผู้ขอดูงานจัดทำแบบสอบถามความพึงพอใจและเขียนข้อเสนอแนะให้กับทางศูนย์ฯเพื่อนำข้อมูลดังกล่าวมาปรับปรุงพัฒนาศูนย์ฯต่อไปในอนาคต
                        </p>
                    </ul>
                </section>

                {/* หมายเหตุ */}
                <div className="p-6 bg-yellow-100 text-yellow-800 rounded-lg text-center shadow-md">
                    <strong>📢 หมายเหตุ:</strong> กรุณาปฏิบัติตามระเบียบและข้อกำหนดการใช้งาน เพื่อให้เกิดประโยชน์สูงสุด
                </div>
            </div>


        </div>
    );
};

export default EduRules;
