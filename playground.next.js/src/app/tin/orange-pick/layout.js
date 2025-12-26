export default function Layout ({ children }) {
    return (
        <main className="bg-orange-50 flex h-screen w-screen items-center justify-center p-4">
            {children}
        </main>
    );
}