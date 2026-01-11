"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function OrangePick() {
  const [nameInput, setNameInput] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!nameInput) return;
    router.push(`orange-pick/room?name=${nameInput}`);
  }

  return (
    <div className="bg-white p-4 rounded-md shadow flex flex-col items-center gap-2">
      <p>กรอกชื่อ</p>
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
        <input
          className="border border-gray-500 rounded-md p-1"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded-md"
        >
          เข้าเกม
        </button>
      </form>
    </div>
  );
}
