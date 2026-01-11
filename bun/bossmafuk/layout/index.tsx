
export default function Layout({ children, pageName }: { children: React.ReactNode; pageName?: string; }) {
  return (
    <>
    <div className="min-h-screen bg-gray-900 text-white ">
      <Navbar pageName={pageName}/>
      {children}
      <Footer />
      </div>
    </>
  );
}

function Navbar({ pageName } : { pageName?: string }) {
  return (
    <nav className={`bg-gray-900 p-5 text-white flex gap-4 border-b border-gray-800`}>
      {menu.map((item) => (
        <a href={item.href}
          className={` ${pageName === item.name && "underline"}`}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-800 to-gray-700 p-5 text-white flex gap-4">

    </footer>
  )
}

const menu = [
  { name: "Homepage", href: "/bossii", icon: "🚀" },
  { name: "Homework", href: "/reactdoo2", icon: "🔥" },
  { name: "YT Channel", href: "https://www.youtube.com/@13055ii", },
];
