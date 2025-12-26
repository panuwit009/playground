"use client"
import { useState } from "react";
import Test from "./button/page";

export default function Close () {
    const [close, setClose ] = useState(false);

    return (
        <div className="">
            <Test setClose={setClose}/>
            <div className="flex justify-center grid items-center mt-2">
                { close && <div className="bg-white p-4 text-black h-56 w-lg rounded-xl text-center font-bold "> ควย เปิดหาพ่อมึงหรอ</div>}
            </div>
        </div>
    )
}