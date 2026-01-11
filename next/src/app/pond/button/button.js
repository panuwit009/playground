"use client"

export function ButtonHome () {
    return (
        <div>
            <button className="bg-green-500 font-bold p-4 rounded-lg text-lg ">Home</button>
        </div>
    )
}

export function Information () {
    return (
        <div>
            <button className="bg-green-500 font-bold p-4 rounded-lg text-lg ">Information</button>
        </div>
    )
}

export default function Button ({setClose}) {

    function CloseDiv () {
        setClose(false);
    }

    function OpenDiv () {
        setClose(true);
    }

    return (
        <div className="flex gap-2">
            <button onClick={OpenDiv} className="bg-blue-500 text-white font-bold transition duratipn-300 hover:scale-110 rounded-lg text-lg py-3 px-5">Open</button>
            <button onClick={CloseDiv} className="bg-red-500 text-white font-bold transition duratipn-300 hover:scale-110 rounded-lg text-lg py-3 px-5">Close</button>
        </div>
    )
}