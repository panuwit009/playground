import { createRoot } from 'react-dom/client'
import { useState, useEffect } from 'react'
import './global.css'

interface typeitem {
    id: number;
    name: string;
    password: string;
    phone: number;
}


const items: typeitem[] = [
    {id: 0, name: "Admin", password: "1234", phone: 1111},
    {id: 1, name: "Thada", password: "1234", phone: 2222},
]

export default function Home () {
    const [search, setSearch] = useState('')
    const [keyword, setKeyword] = useState('')
    

    const filteredItems = items.filter(item =>
    keyword === ''
        ? true
        : item.name.toLowerCase().startsWith(keyword)
    )

    console.log(search)

    return (
            <div className="bg-black h-dvh w-full">
                <div className="h-full flex items-center justify-center">
                    <div className="flex flex-col gap-2">
                        <form 
                            onSubmit={(e) => {
                                e.preventDefault()
                                setKeyword(search.trim().toLowerCase())
                            }}
                        >
                            <input
                                className="text-white p-2 border border-gray-400 rounded-xl bg-transparent"
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                />
                            <button
                                type="submit"
                                className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-xl"
                                >
                                Search
                            </button>
                            <button
                                type="button"
                                className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-xl"
                                onClick={() => {
                                    setKeyword('')
                                    setSearch('')
                                }
                            }
                                >
                                Clear
                            </button>
                        </form>
                        <table className='bg-red-200'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Password</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                            {filteredItems.length === 0 && !!keyword 
                            ? (     
                                <tr>
                                    <td colSpan={3} className="text-center">
                                        ไม่พบข้อมูล
                                    </td>
                                </tr> 
                            ) : (
                                filteredItems.map(item => 
                            (
                                <tr key={item.id} className='text-center'>
                                    <td>{item.name}</td>
                                    <td>{item.password}</td>
                                    <td>{item.phone}</td>
                                </tr>  
                                ))
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

const root = createRoot(document.getElementById('root')!)
root.render(<Home />)