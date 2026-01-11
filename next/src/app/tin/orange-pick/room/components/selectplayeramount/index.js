"use client";
import { useState } from "react";
import { setPlayerAmount } from "../../../api/room";

export default function SelectPlayerAmount({setPhase, roomId}) {
  const [count, setCount] = useState(null);

  async function createRoom() {
    if (count === null) {
      alert("เลือกจำนวนคนก่อนสิ!");
      return;
    } else {
      await setPlayerAmount(count, roomId);
      setPhase("waitingplayer");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6">
      <p className="text-lg">เลือกจำนวนคนดิ:</p>

      <select
        className="border rounded-lg p-2"
        onChange={(e) => setCount(Number(e.target.value))}
        defaultValue=""
      >
        <option value="" disabled>
          -- เลือกจำนวนคน --
        </option>
        <option value="4">4 คน</option>
        <option value="5">5 คน</option>
        <option value="6">6 คน</option>
        <option value="7">7 คน</option>
        <option value="8">8 คน</option>
      </select>

      {count && (
        <button
          onClick={createRoom}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          เริ่มเกม
        </button>
      )}
    </div>
  );
}
