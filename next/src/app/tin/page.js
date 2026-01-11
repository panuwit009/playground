"use client";
import { useEffect, useRef, useState } from "react";

export default function Tin() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/asd.mp3");
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => console.log("Play failed:", err));
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }

  return (
    <div
      className={`bg-white z-2
        fixed inset-0 h-[100dvh] w-[100dvw]
        transition-transform duration-300 ease-in-out
        translate-x-0`}
    >
      {isPlaying
      ? (<button
          onClick={handleStop}
          className="absolute top-10 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800"
        >
          🛑 หยุดเพลง
        </button>) 
      : (
        <button
          onClick={handlePlay}
          className="absolute top-10 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800"
        >
          ▶️ เล่นเพลง
        </button>
      )}

      <div className="w-full h-[20vh]" />
      <div className="w-full h-[60vh] max-h-[60vh] flex flex-col items-center text-center overflow-y-auto px-4">
        <p className="text-lg text-gray-600 mt-2">1. คือคนอย่างเธอมันเป็นคนใจร้าย ข้อ</p>
        <p className="text-lg text-gray-600 mt-2">2. คือใจของเธอมันบางสะยิ่งกว่าใบไม้</p>
        <p className="text-lg text-gray-600 mt-2">3. คือไม่ต้องพูดว่าเธอลำบากใจ และ</p>
        <p className="text-lg text-gray-600 mt-2">4. คือเธอช่วยไปไกลๆ ฉันเลยจะได้ไหม</p>
        <p className="text-lg text-gray-600 mt-2">5. คือฉันไม่ควรที่จะอยู่ตรงนี้ ข้อ</p>
        <p className="text-lg text-gray-600 mt-2">6. คือไม่ต้องเสต้องแสร้งว่าเธอเป็นคนดี</p>
        <p className="text-lg text-gray-600 mt-2">7. คือเธอช่วยเลือกมาเลยสักคนที และ</p>
        <p className="text-lg text-gray-600 mt-2">8. คือฉันจะได้ไม่ต้องมาเดินเป็นวงรี จะได้รีบไป</p>
      </div>
    </div>
  );
}
