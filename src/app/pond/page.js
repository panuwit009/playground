"use client";
import { useState, useEffect } from "react";

export default function Test () {
    const [text, setText] = useState(0);
    useEffect(() => {
        console.log("ทำงาน");
    }, [] );

    const [component, setComponent] = useState("first"); 
    function plusOne () {
        setText(text + 1);
        setComponent("second");
    }
    
    return(
    <>
        <div className="bg-white w-full h-full flex justify-between p-2 ">
            <div className="content-center flex gap-2">
                <button className="bg-red-500 p-2 text-center rounded-xl">โฮม</button>
                <button className="bg-red-500 p-2 ะext-center rounded-xl">หน้าไหน</button>
                <button className="bg-red-500 p-2 text-center rounded-xl">งง</button>
            </div>

            <div>
                <button className="bg-red-500 p-2 text-center">ออกจากระบบ</button>
            </div>
        </div>

        <div className="dark:text-red-500 text-blue-950 bg-white-500 h-12 w-12">ไก่ {text} ตัว</div>
        <div className="bg-sky-500 w-full h-full"></div>
        <div className="w-96">w-96</div>

        <div className="grid grid-flow-col grid-rows-3 gap-4">
            <div className="grid grid-flow-col grid-rows-3 gap-4 bg-green-500 p-2 row-span-3">
                <div className="row-span-3 flex justify-center items-center bg-white p-2 rounded-xl 
                transition duration-350 hover:scale-80 hover:bg-sky-500 hover:text-white font-bold text-[100%]">30</div>
                <div className="col-span-1 text-center bg-white p-2">31</div>
                <div className="col-span-1 text-center bg-white p-2">32</div>
                <div className="col-span-1 text-center bg-white p-2">33</div>
            </div>
            <button className="bg-green-500 p-2">2</button>
            <button className="bg-green-500 p-2">3</button>
            <button className="bg-green-500 p-2">4</button>
            <button className="bg-green-500 p-2">5</button>
            <button className="bg-green-500 p-2">6</button>
            <button className="bg-green-500 p-2">7</button>
            <button className="bg-green-500 p-2">8</button>
            <button className="bg-green-500 p-2">9</button>
            <button className="bg-green-500 p-2">10</button>
            <button className="bg-green-500 p-2">11</button>
            <button className="bg-green-500 p-2">12</button>
        </div>

    </>
    );
    
}