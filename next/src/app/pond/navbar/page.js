import Button from "./button/button.js";

export default function Navbar ({setClose}) {    

    return (
            <div className="
                w-full sticky top-0 z-50
                bg-white/80 dark:bg-gray-900/80
                backdrop-blur-md
                shadow-md dark:shadow-black/40
            ">
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                    {/* Logo */}
                    <div className="text-xl font-extrabold text-blue-600 dark:text-blue-400 tracking-wide">
                        THADA
                    </div>

                    {/* Menu */}
                    <div className="flex items-center gap-4">
                        <Button />
                    </div>

                </div>
            </div>
    )
}
