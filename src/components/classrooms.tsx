import React, { useState } from "react";
import mapImage from "../assets/Map.gif";
import { useSwipeable } from "react-swipeable";

function App() {
  const allRooms = [
    {
      id: "A10",
      group: "A10",
      displayName: "ห้องทำหัตถการออร์โธปิดิกส์",
      link360: "https://photos.app.goo.gl/HFxKicVzsax1Twbh8",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/A10/IMG_110424.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/A10/IMG_110530.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/A10/IMG_110613.jpg",
      ],
      top: 0,
      left: 0,
      width: 60,
      height: 70,
    },
    {
      id: "B27",
      group: "B27",
      displayName: "ห้องทำหัตถการจักษุวิทยา",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B27/IMG_9518.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B27/IMG_9525.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B27/IMG_9527.jpg",
      ],
      top: 203,
      left: 57,
      width: 91,
      height: 72,
    },
    {
      id: "B28",
      group: "B28",
      displayName: "ห้องทำหัตถการสเมียร์เลือดและอื่นๆ",
      link360: "https://photos.app.goo.gl/RS6ZDnhpsd7X5nW89",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B28/IMG_101550.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B28/IMG_101904.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B28/IMG_101941.jpg",
      ],
      top: 275,
      left: 0,
      width: 148,
      height: 72,
    },
    {
      id: "B29",
      group: "B29",
      displayName: "ห้องทำหัตถการ โสต ศอ นาสิกวิทยา",
      link360: "https://photos.app.goo.gl/EdskcnhWuKf6kAPH9",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B29/IMG_085658.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B29/IMG_085735.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B29/IMG_085810.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B29/IMG_085928.jpg",
      ],
      top: 347,
      left: 0,
      width: 148,
      height: 72,
    },
    {
      id: "B30",
      group: "B30",
      displayName: "ห้องประชุมและห้องเรียนอเนกประสงค์บรรจุคนได้ 50 คน",
      links360: [
        "https://photos.app.goo.gl/EutAsA6YmEp5kBYr9",
        "https://photos.app.goo.gl/CvGb9mKAHoLDmhwj9",
      ],
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B30/IMG_102623.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B30/IMG_103718.jpg",
      ],
      top: 419,
      left: 0,
      width: 147,
      height: 270,
    },
    // B03 แยกเป็น 2 พื้นที่ (part1, part2) แต่ group เดียวกัน => "B03"
    {
      id: "b03part1",
      group: "B03",
      displayName: "ห้องเรียนและห้องประจำรายวิชา Rehabilitation Medicine",
      link360: "https://photos.app.goo.gl/51geuqNSAwH7mwpQ6",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B03/IMG_6177.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B03/IMG_6201.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B03/IMG_9513.jpg",
      ],
      top: 0,
      left: 475,
      width: 109,
      height: 156,
    },
    {
      id: "b03part2",
      group: "B03",
      displayName: "B03 Lecture / Rehabilitation (Part 2)",
      link360: "https://photos.app.goo.gl/51geuqNSAwH7mwpQ6",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B03/IMG_6177.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B03/IMG_6201.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B03/IMG_9513.jpg",
      ],
      top: 110,
      left: 397,
      width: 79,
      height: 46,
    },
    {
      id: "B19",
      group: "B19",
      displayName: "ห้อง OPD",
      link360: "https://photos.app.goo.gl/homWBBdotsByTXLG6",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B19/IMG_102711.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B19/IMG_102929.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B19/IMG_103441.jpg",
        "",
      ],
      top: 203,
      left: 193,
      width: 81,
      height: 90,
    },
    {
      id: "B18",
      group: "B18",
      displayName: "ห้องหัตถการฝึกเจาะน้ำไขสันหลังและห้องเรียนอเนกประสงค์",
      link360: "https://photos.app.goo.gl/mrgsiJXLjjvStWqM9",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B18/IMG_075331.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B18/IMG_110734.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B18/IMG_110852.jpg",
      ],
      top: 203,
      left: 273,
      width: 116,
      height: 90,
    },
    {
      id: "B11",
      group: "B11",
      displayName: "ห้อง OPD",
      link360: "https://photos.app.goo.gl/uyowr5xzTN43ZdDc6",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B11/IMG_102916.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B11/IMG_103026.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B11/IMG_103259.jpg",
      ],
      top: 203,
      left: 388,
      width: 66,
      height: 90,
    },
    {
      id: "B10",
      group: "B10",
      displayName: "ห้อง OPD",
      link360: "https://photos.app.goo.gl/quVMkmr3WNFUcDgMA",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B10/IMG_102916.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B10/IMG_102956.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B10/IMG_103441.jpg",
      ],
      top: 203,
      left: 453,
      width: 66,
      height: 90,
    },
    {
      id: "B09",
      group: "B09",
      displayName: "OPD",
      link360: "https://photos.app.goo.gl/homWBBdotsByTXLG6",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B09/IMG_102610.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B09/IMG_102711.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B09/IMG_103026.jpg",
      ],
      top: 203,
      left: 518,
      width: 66,
      height: 90,
    },
    {
      id: "SIM5",
      group: "SIM5",
      displayName: "หุ่นจำลองสถานการณ์เด็กเล็ก",
      link360: "https://photos.app.goo.gl/pTR1KiwtE1ELj3vA8",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/sim5/IMG_6978.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/sim5/IMG_7009.jpg",
      ],
      top: 330,
      left: 388,
      width: 66,
      height: 88,
    },
    {
      id: "SIM4",
      group: "SIM4",
      displayName: "หุ่นจำลองสถานการณ์เด็กแรกเกิด",
      link360: "https://photos.app.goo.gl/p8D4Gf9nP8dtbALb7",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/sim4/IMG_6954.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/sim4/IMG_7019.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/sim4/IMG_7150.jpg",
      ],
      top: 330,
      left: 453,
      width: 66,
      height: 88,
    },
    {
      id: "SIM3",
      group: "SIM3",
      displayName: "หุ่นจำลองสถานการณ์การคลอด",
      link360: "https://photos.app.goo.gl/LaSSdEtYdv8eCe5Z7",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/sim3/IMG_6716.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/sim3/IMG_6866.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/sim3/IMG_7338.jpg",
      ],
      top: 330,
      left: 518,
      width: 66,
      height: 88,
    },
    {
      id: "SIM2",
      group: "SIM2",
      displayName: "หุ่นจำลองสถานการณ์ผู้ใหญ่",
      link360: "https://photos.app.goo.gl/P6Csct8XpK1yDmNfA",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/sim2/IMG_7113.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/sim2/IMG_7175.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/sim2/IMG_7157.jpg",
      ],
      top: 477,
      left: 388,
      width: 128,
      height: 89,
    },
    {
      id: "SIM1",
      group: "SIM1",
      displayName: "หุ่นจำลองสถานการณ์เด็กโต",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/sim1/IMG_6290.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/sim1/IMG_6339.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/sim1/IMG_6380.jpg",
      ],
      top: 477,
      left: 515,
      width: 69,
      height: 88,
    },
    {
      id: "B08",
      group: "B08",
      displayName: "ห้องเรียนอเนกประสงค์",
      link360: "https://photos.app.goo.gl/wjdX5Ne7fFBVaesS8",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B08/IMG_143252.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B08/IMG_143355.jpg",
      ],
      top: 611,
      left: 485,
      width: 99,
      height: 78,
    },
    {
      id: "B04",
      group: "B04",
      displayName: "ห้องเรียนอเนกประสงค์",
      link360: "https://photos.app.goo.gl/FYLRyVuTZUpUBrZu7",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B04/IMG_153959.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B04/IMG_154044.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B04/IMG_155104.jpg",
      ],
      top: 155,
      left: 621,
      width: 78,
      height: 137,
    },
    {
      id: "B05",
      group: "B05",
      displayName: "ห้องเรียนอเนกประสงค์",
      link360: "https://photos.app.goo.gl/QK7YBYougYFwozW26",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B05/IMG_6843.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B05/IMG_103833.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B05/IMG_143002.jpg",
      ],
      top: 292,
      left: 621,
      width: 78,
      height: 135,
    },
    {
      id: "B06",
      group: "B06",
      displayName: "ห้องเรียนอเนกประสงค์",
      link360: "https://photos.app.goo.gl/QLekfErLpCGvgzg38",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B06/IMG_7088.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B06/IMG_7205.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B06/IMG_103251.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B06/IMG_103314.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B06/IMG_103754.jpg",
      ],
      top: 427,
      left: 621,
      width: 78,
      height: 136,
    },
    {
      id: "B07",
      group: "B07",
      displayName: "ห้องเรียนอเนกประสงค์",
      link360: "https://photos.app.goo.gl/KgqoWc9oGjUf84nr9",
      images: [
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B07/IMG_7045.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B07/IMG_150259.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B07/IMG_150316.jpg",
        "https://champs.md.chula.ac.th/cssc/assets/images/classroom/B07/IMG_150558.jpg",
      ],
      top: 563,
      left: 621,
      width: 78,
      height: 126,
    },
  ];

  const [activeGroup, setActiveGroup] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Toggle ห้อง
  const handleRoomClick = (room) => {
    const newGroup = activeGroup === room.group ? null : room.group;
    setActiveGroup(newGroup);
    if (newGroup) setCurrentSlide(0);
  };

  // หา room ที่กำลัง active
  const activeRoom = allRooms.find((r) => r.group === activeGroup);

  // รวม link360 + links360
  const getLinkList = () => {
    if (!activeRoom) return [];
    if (activeRoom.links360?.length > 0) {
      return activeRoom.links360;
    } else if (activeRoom.link360) {
      return [activeRoom.link360];
    }
    return [];
  };
  const linkList = getLinkList();

  // ฟังก์ชันเลื่อนภาพ (ใช้กับการ swipe และ arrow)
  const handleNext = () => {
    if (!activeRoom?.images) return;
    setCurrentSlide((prev) => (prev + 1) % activeRoom.images.length);
  };
  const handlePrev = () => {
    if (!activeRoom?.images) return;
    setCurrentSlide(
      (prev) => (prev - 1 + activeRoom.images.length) % activeRoom.images.length
    );
  };

  // กำหนด swipeHandlers เพื่อใช้กับ react-swipeable
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // ให้ลากด้วยเมาส์ได้ (Desktop)
  });

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      {/* กล่องครอบแผนที่ ให้ overflow-x: auto เพื่อเลื่อนซ้ายขวาได้ */}
      <div className="overflow-x-auto">
        <div className="relative" style={{ width: 800, height: 800 }}>
          <img src={mapImage} alt="Map" />
          {allRooms.map((room) => (
            <div
              key={room.id}
              onClick={() => handleRoomClick(room)}
              style={{
                position: "absolute",
                top: room.top,
                left: room.left,
                width: room.width,
                height: room.height,
                border:
                  activeGroup === room.group ? "2px solid #3b82f6" : "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>

      {/* Modal Popup เต็มจอ */}
      {activeRoom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="relative bg-white w-full max-w-[400px] rounded shadow-lg p-4 overflow-auto max-h-[90vh]">
            {/* หัว Modal: ชื่อห้องตรงกลาง + ปุ่มปิดขวา */}
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <div className="flex-1 text-center">
                <h2 className="text-lg font-semibold">
                  {activeRoom.displayName}
                </h2>
              </div>
              <button
                onClick={() => setActiveGroup(null)}
                className="text-red-500 font-medium hover:underline text-sm"
              >
                ✕ ปิด
              </button>
            </div>

            {activeRoom.images && activeRoom.images.length > 0 && (
              <div className="overflow-x-auto flex justify-center">
                <div
                  className="relative mb-2"
                  {...swipeHandlers}
                  style={{ cursor: "grab" }}
                  onDragStart={(e) => e.preventDefault()}
                >
                  <img
                    src={activeRoom.images[currentSlide]}
                    alt="Slide"
                    className="w-full h-auto rounded"
                    draggable={false}
                  />

                  {/* Dot Navigation ด้านล่างรูป */}
                  {activeRoom.images.length > 1 && (
                    <div className="flex justify-center space-x-2 mt-2">
                      {activeRoom.images.map((_, idx) => (
                        <div
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`w-3 h-3 rounded-full cursor-pointer ${
                            idx === currentSlide ? "bg-blue-600" : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ปุ่ม View 360° (ถ้ามี) */}
            {linkList.length > 0 && (
              <div className="flex flex-col space-y-2 mb-2">
                {linkList.map((link, idx) => (
                  <a
                    key={idx}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm text-center"
                  >
                    🔍 View 360° {linkList.length > 1 && `(Link ${idx + 1})`}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
