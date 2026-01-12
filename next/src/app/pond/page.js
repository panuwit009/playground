"use client"
import { useState } from "react";
import Navbar from "./navbar/page";


export default function Close () {
    const [close, setClose] = useState(false);

    function handleChange () {
        setClose(prev => !prev)
    }

    return (
        <>
            <Navbar/>
            <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <button
                        onClick={handleChange}
                        className="
                        py-2.5 px-4
                        bg-indigo-500
                        hover:bg-indigo-800 
                        rounded-xl
                        text-gray-200"
                    >
                    อย่าเปิด
                    </button>

                    {close && (
                        <div
                            className="
                            fixed inset-0 z-50
                            flex items-center justify-center
                            bg-black/50 backdrop-blur-sm
                            "
                            onClick={handleChange}
                        >
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="
                                    relative
                                    w-full max-w-2xl
                                    rounded-2xl
                                    bg-white dark:bg-gray-900
                                    p-6
                                    text-center
                                    font-bold
                                    text-black dark:text-white
                                    shadow-2xl
                                    animate-slide-up"
                            >
                                <button
                                    onClick={handleChange}
                                    className="
                                    absolute top-3 right-3
                                    h-8 w-8
                                    flex items-center justify-center
                                    rounded-full
                                    text-gray-500
                                    hover:bg-gray-200 dark:hover:bg-gray-700
                                    hover:text-black dark:hover:text-white
                                    transition"
                                >
                                    ✕
                                </button>

                                <div className="flex flex-col gap-2 text-5xl font-extrabold text-center">
                                    <span
                                        className="
                                        bg-gradient-to-r
                                        from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500
                                        bg-clip-text text-transparent
                                        animate-gradient
                                        "
                                    >
                                        ควย
                                    </span>

                                    <p
                                        className="
                                        bg-gradient-to-r
                                        from-pink-500 via-orange-500 via-lime-500 via-sky-500 to-violet-500
                                        bg-clip-text text-transparent
                                        animate-gradient
                                        "
                                    >
                                        เปิดหาพ่อมึงหรอ
                                    </p>
                                    <p
                                        className="
                                        bg-gradient-to-r
                                        from-pink-500 via-orange-500 via-lime-500 via-sky-500 to-violet-500
                                        bg-clip-text text-transparent
                                        animate-gradient
                                        "
                                    >บอกว่าอย่าเปิดไงไอสัส</p>
                                </div>

                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}