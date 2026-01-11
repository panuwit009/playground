"use client"

const menus = [
    {id: 0, name: "Home"},
    {id: 1, name: "Information"},

]

export default function Button({ setClose }) {
    return (
        <div className="flex gap-3">
            {menus.map(menu => (
                <button
                    key={menu.id}
                    className="
                        px-5 py-2
                        rounded-xl
                        font-semibold
                        transition-all duration-300
                        
                        bg-gray-100 text-gray-700
                        hover:bg-blue-500 hover:text-white
                        
                        dark:bg-indigo-600 dark:text-gray-200
                        dark:hover:bg-indigo-700

                        dark:hover:shadow-black/50
                    "
                >
                    {menu.name}
                </button>
            ))}
        </div>
    )
}

