export default function Tin () {
    return(
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-dvh">
        <div className="bg-zinc-200 hidden lg:block lg:col-span-3"></div>
        <div className="bg-lime-100 col-span-1 lg:col-span-6 text-center">
            <div className="bg-red-100 grid grid-cols-11">
                <div className="bg-sky-100 col-span-4 h-5"></div>
                <div className="bg-gray-100 col-span-7 h-30"></div>
            </div>
        </div>
        <div className="bg-zinc-200 hidden lg:block lg:col-span-3"></div>
    </div>
    );
}