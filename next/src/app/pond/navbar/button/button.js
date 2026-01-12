"use client"

const menus = [
    {id: 0, name: "Home"},
    {id: 1, name: "Information"},

]

export default function Button() {
  return (
    <div className="flex items-center gap-2">
      {menus.map(menu => (
        <button
          key={menu.id}
          className="
            px-4 py-2
            rounded-full
            text-sm font-medium
            text-muted-foreground
            hover:text-foreground
            hover:bg-accent
            transition-colors
          "
        >
          {menu.name}
        </button>
      ))}
    </div>
  )
}


