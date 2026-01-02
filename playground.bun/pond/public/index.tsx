import { ReactEventHandler, use, useState } from 'react';
import { createRoot } from 'react-dom/client';

const menus  = [
    {id: 1, name: 'Home'},
    {id: 1, name: 'Page'},
]

 export const data =  [{
    "id": 1,
    "first_name": "Tada",
    "last_name": "",
    "email": "tada@gmail.com",
    "phone": "2280"
  },]

function App() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [result, setResult] = useState('')
    const [modal, setModal] = useState(false);
    const [search , setSearch] = useState('')
    const [searchTerm, setSearchTerm] = useState('');

    function handleSearch() {
        setSearchTerm(search)
    }

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
            <Search search={search} setSearch={setSearch} onSearch={handleSearch} />
            <table>
                <tbody>
                    {data.filter((item) => {
                        return searchTerm.toLowerCase() === ''
                        ? true
                        : item.first_name.toLowerCase().includes(searchTerm);
                    }).map((item) => (
                        <tr key={item.id}> 
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                    ))}
                </tbody>
            </table>

                <div className='flex-1 flex items-center justify-center gap-2'>
                    <button 
                        className='bg-gray-400 rounded-xl p-4 
                        font-bold text-sm'
                        onClick={handleclick}
                    >
                        Modal
                    </button>
                    {/* {modal && <Modal closeModal={handleclick}/>} */}
                </div>
        </div>
    )

}

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
                        <div key={menu.id} className='flex justify-start'>
                            <a 
                                className='bg-white p-2 rounded-xl font-bold cursor-pointer' 
                            >
                                {menu.name}
                            </a>
                          </div>
                )
            }
        </nav>
    )

}

// function Modal ({closeModal} : {closeModal : () => void}) {
//     return (
//             <div className='fixed inset-0 bg-black/40 flex items-center justify-center'>
//                 <div className='bg-gray-200 px-6 py-4 rounded-xl'>
//                     <h2 className='text-center font-bold'>Login</h2>
//                     <div className='flex flex-col gap-3'>
//                         <div className='flex flex-col gap-2 '>
//                             <span>ID</span>
//                             <input className='border boder-2-gray p-2 rounded-xl' value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
//                         </div>
//                         <div className='flex flex-col gap-2'>
//                             <span>passwotd</span>
//                             <input className='border boder-2-gray p-2 rounded-xl' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
//                         </div>
//                         <div className='flex gap-2'>
//                             <button onClick={closeModal} className='flex-1 bg-rose-400 text-white p-2 text-sm border border-gray-200 rounded-xl'>ปิด</button>
//                             <button className='flex-1 bg-sky-500 text-white p-2 text-sm border border-gray-200 rounded-xl' onClick={login}>Login</button>
//                         </div>

//                     </div>
//                     <p>{result}</p>
//                 </div>
//             </div>

//     )
// }

function Search ({search, setSearch, onSearch} : {search: string, setSearch: (v: string) => void, onSearch: () => void}) {
    return (
        <>
        <input value={search} onChange={(e) => setSearch(e.target.value)} className='border-2 border-gray-200' type="text" />
        <button onClick={onSearch} className='bg-gray-200 rounded-xl p-4'>ค้นหา</button>
        </>
    )
}




const root = createRoot(document.getElementById('root')!)
root.render(<App />)
