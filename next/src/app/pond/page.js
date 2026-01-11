"use client"
import { useState } from "react";
import Navbar from "./navbar/page";
import { LoginForm } from "@/components/login-form";
import { GalleryVerticalEnd } from "lucide-react";


export default function Close () {
    const [close, setClose] = useState(false);

    return (
        // <>
        //     <Navbar setClose={setClose}/>
        //     <div className="flex justify-center grid items-center mt-2">
        //         <LoginForm/>
        //         { close && <div className="bg-white p-4 text-black h-56 w-lg rounded-xl text-center font-bold "> ควย เปิดหาพ่อมึงหรอ</div>}
        //     </div>
        // </>
            <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
                <div className="flex w-full max-w-sm flex-col gap-6">
                    <a href="#" className="flex items-center gap-2 self-center font-medium">
                    <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                        <GalleryVerticalEnd className="size-4" />
                    </div>
                    Acme Inc.
                    </a>
                    <LoginForm />
                </div>
            </div>
    )
}