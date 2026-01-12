"use client";
import { useState, useEffect } from "react";
import { FetchData } from "../api/room";
import { useSearchParams, useRouter } from "next/navigation";
import { SelectPlayerAmount } from "./components";

export default function Room() {
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    const [data, setData] = useState(null);
    const router = useRouter();
    const [phase, setPhase] = useState("selectroom");

    useEffect(() => {
        const getData = async () => {
            const result = await FetchData();
            setData(result);
            console.log(result)
        }
        getData();
    }, []);

    function waitingplayer () {
        if(!name) {
            alert("กรอกชื่อก่อนดิ้");
            router.push("./");
            return;
        }
        setPhase("selectplayeramount");        
    }
    return(
        <div className="bg-white w-full h-full rounded-xl border-2 border-gray-400 p-6 flex flex-col">
            <header className="flex justify-center items-center mb-4">
                <h1 className="text-3xl font-bold">รายชื่อห้อง</h1>
            </header>
            <div className="flex flex-col bg-green-100 border-1 grow rounded-xl p-4">
                <p className="self-end">ชื่อผู้เล่น: {name}</p>
                {!data && <>Loading...</>}
                
                { phase === "selectroom" &&
                data?.map((d) => 
                    <div 
                        className="cursor-pointer" key={d.id}
                        onClick={waitingplayer}
                    >
                        {d.room.name} จำนวนผู้เล่น 0/{d.player_amount}
                    </div>)
                }

                { phase === "selectplayeramount" && <SelectPlayerAmount setPhase={setPhase} roomId={data[0].id}/>}
            </div>
        </div>
    );
}