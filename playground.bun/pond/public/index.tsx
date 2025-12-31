import { ReactEventHandler, use, useState } from 'react';
import { createRoot } from 'react-dom/client';

const menus  = [
    {id: 1, name: 'Home'},
    {id: 1, name: 'Page'},
]

const pathname = 'Home'

function App() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [result, setResult] = useState('')
    const [modal, setModal] = useState(false);

    function handleclick () {
        setModal(p => !p)
    }

    function login() {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
            .then(res => res.json())
            .then(data => {
                setResult(data.message)
            })
    }

    return (
        <div className='min-h-screen pt-16 flex flex-col'>
            <Navbar/>
                <div className='flex-1 flex items-center justify-center gap-2'>
                    <button 
                        className='bg-gray-400 rounded-xl p-4 
                        font-bold text-sm'
                        onClick={handleclick}
                    >
                        Modal
                    </button>
                    {modal && <Modal closeModal={handleclick}/>}
                </div>
        </div>
    )

function Navbar () {
    return (
        <nav 
            className='fixed top-0 right-0 left-0 h-16 
            bg-gray-700 p-4 
            flex items-center gap-2 
            z-50'
        >
            {
                menus.map(menu => 
                    <a 
                        className='bg-white p-2 rounded-xl font-bold cursor-pointer' 
                        key={menu.id}
                    >
                        {menu.name}
                    </a>
                )
            }
        </nav>
    )

}

function Modal ({closeModal} : {closeModal : () => void}) {
    return (
            <div className='bg-gray-200 px-6 py-4 rounded-xl'>
                <h2 className='text-center font-bold'>Login</h2>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2 '>
                        <span>ID</span>
                        <input className='border boder-2-gray p-2 rounded-xl' value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span>passwotd</span>
                        <input className='border boder-2-gray p-2 rounded-xl' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
                    </div> 
                    <button onClick={closeModal} className='bg-rose-400 text-white p-4 border border-gray-200 rounded-xl'>ปิด</button>
                    <button className='bg-sky-500 text-white p-4 border border-gray-200 rounded-xl' onClick={login}>Login</button>
                </div>
                <p>{result}</p>
            </div>
    )
}

}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
