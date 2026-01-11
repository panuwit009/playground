import { useState } from 'react'

function MenuItem({
  icon,
  label,
}: {
  icon: string
  label: string
}) {
  return (
    <div className="flex items-center gap-3 cursor-pointer text-gray-700 hover:text-blue-600">
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </div>
  )
}

export default function Homepage() {
  const [isOpen, setIsOpen] = useState(false)
  const [lang, setLang] = useState<'TH' | 'EN'>('TH')
  const [search, setSearch] = useState('')

  const toggleLang = () => {
    setLang(lang === 'TH' ? 'EN' : 'TH')
    // 👉 ตรงนี้สามารถเอาไปผูก i18n ได้ภายหลัง
  }

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex"
      style={{ backgroundImage: "url('/homepageBG.jpg')" }}
    >
      {/* Sidebar */}
      <aside
        className={`bg-gray-200 bg-opacity-95 transition-all duration-300 overflow-hidden
          ${isOpen ? 'h-[70vh] w-64' : 'h-14 w-12'}
        `}
      >
        {/* Toggle */}
        <div
          className={`flex cursor-pointer text-2xl
            ${isOpen ? 'justify-end p-4' : 'justify-center items-center h-14'}
          `}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>

        {/* Sidebar content */}
        {isOpen && (
          <div className="flex flex-col justify-between h-[calc(70vh-56px)]">
            <div>
              {/* Profile */}
              <div className="flex flex-col items-center mb-8 mt-4">
                <div className="w-20 h-20 rounded-full bg-blue-300 flex items-center justify-center text-4xl text-white">
                  👤
                </div>
                <p className="mt-3 text-sm text-gray-700">
                  นาย....................
                </p>
              </div>

              {/* Menu */}
              <nav className="px-6 space-y-5">
                <MenuItem icon="📊" label="Dashboard" />
                <MenuItem icon="📝" label="Tasks" />
                <MenuItem icon="📅" label="Calendar" />
                <MenuItem icon="⚙️" label="Settings" />
              </nav>
            </div>

            {/* Logout */}
            <div className="px-6 pb-6">
              <a href='/'
                className="flex items-center gap-3 text-gray-700 hover:text-red-600"
              >
                🚪 Logout
              </a>
            </div>
          </div>
        )}
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="h-14 flex items-center justify-between px-6 bg-gray-200 bg-opacity-90">
          {/* Search */}
          <div className="relative w-64">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={lang === 'TH' ? 'ค้นหา...' : 'Search...'}
              className="w-full rounded-md pl-10 pr-3 py-2 text-sm outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              🔍
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Language icon */}
            <button
              onClick={toggleLang}
              title={`Switch to ${lang === 'TH' ? 'English' : 'Thai'}`}
              className="text-xl hover:scale-110 transition"
            >
              🌐
            </button>

            <span className="text-sm font-semibold text-gray-700">
              {lang}
            </span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center bg-white/60 p-10 rounded-xl">
            <h1 className="text-3xl font-semibold mb-6">
              {lang === 'TH' ? 'ยินดีต้อนรับ' : 'Welcome'}
            </h1>
            <p className="text-2xl mb-6">
              {lang === 'TH'
                ? 'คุณ..........................................'
                : 'You..........................................'}
            </p>
            <p className="text-2xl font-semibold">
              {lang === 'TH'
                ? 'วันนี้ต้องการให้ช่วยอะไรดี ?'
                : 'How can I help you today?'}
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
